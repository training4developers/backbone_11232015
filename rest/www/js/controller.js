function WidgetsController(options, widgetsRouter) {

	var
		currentView, that = this, controller = this,
		contentDiv = options.el;

	widgetsRouter.on("showWidgetList", function() {
		that.showWidgetList();
	});

	widgetsRouter.on("showWidgetDetail", function(options) {
		that.showWidgetDetail(options.widgetId, options.editMode);
	});

	this.showWidgetList = function() {

		widgets.fetch({
			success: function() {

				if (currentView) {
					currentView.remove();
				}

				currentView = new ViewWidgetsView({
					collection: widgets
				});

				currentView.on("create-widget", function() {
					console.log("create widget");
					controller.showWidgetDetail(null, true);
				});

				currentView.render();
				contentDiv.append(currentView.$el);

			}
		});

	};

	this.showWidgetDetail = function(widgetId, editMode) {

		function success(widget) {

			if (currentView) {
				currentView.remove();
			}

			if (editMode) {
				currentView = new EditWidgetView({
					model: widget
				});
			} else {
				currentView = new ViewWidgetView({
					model: widget
				});
			}

			if (editMode) {

				currentView.on("saveWidget",
					function(options) {
						widget.save(options, {
							success: function() {
								currentView.trigger("showWidgetList");
							}
						})
					});

			} else {

				currentView.on("deleteWidget",
					function(options) {
						widget.destroy({
							success: function() {
								currentView.trigger("showWidgetList");
							}
						});
					});

			}

			currentView.on("showWidgetDetail",
				function(options) {
					that.showWidgetDetail(options.widgetId, options.editMode);
				});

			currentView.on("showWidgetList",
				function(options) {
					that.showWidgetList();
					widgetsRouter.navigate("");
				});

			currentView.render();
			contentDiv.append(currentView.$el);

			widgetsRouter.navigate("widget/" + encodeURIComponent(widgetId) + (editMode ? "/edit" : ""));

		}


		var widget = new Widget({
			id: widgetId
		});

		if (!widgetId) {
			success(widget);
		} else {
			widget.fetch({
				success: success
			});
		}

	};

}
