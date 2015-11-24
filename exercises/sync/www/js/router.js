var WidgetsRouter = Backbone.Router.extend({

	routes: {
		"widget/:widgetId": "viewWidget",
		"widget/:widgetId/edit": "editWidget",
		"widgets": "viewWidgets",
		"": "viewWidgets"
	},

	viewWidget: function(widgetId) {

		this.trigger("showWidgetDetail", {
			widgetId: parseInt(widgetId,10),
			editMode: false
		});

	},

	editWidget: function(widgetId) {

		this.trigger("showWidgetDetail", {
			widgetId: parseInt(widgetId,10),
			editMode: true
		});

	},

	viewWidgets: function() {

		this.trigger("showWidgetList");

	},

	initialize: function(options) {
		this.options = options;
	}
});
