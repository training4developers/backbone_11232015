var WidgetsRouter = Backbone.Router.extend({

	routes: {
		"widget/:id": "viewWidget",
		"widget/:id/edit": "editWidget",
		"widgets": "viewWidgets",
		"": "viewWidgets"
	},

	viewWidget: function(id) {
		if (this.currentView) {
      this.currentView.undelegateEvents();
    }
    this.currentView = new ViewWidgetView({
      el: this.options.el,
      model: widgets.get(id),
      router: this
    });
    this.currentView.render();
	},

	editWidget: function(id) {
		if (this.currentView) {
      this.currentView.undelegateEvents();
    }
    this.currentView = new EditWidgetView({
      el: this.options.el,
      model: widgets.get(id),
      router: this
    });
    this.currentView.render();
	},

	viewWidgets: function() {
		if (this.currentView) {
      this.currentView.undelegateEvents();
    }
    this.currentView = new ViewWidgetsView({
      el: this.options.el,
      collection: widgets,
      router: this
    });
    this.currentView.render();
	},

	initialize: function(options) {
		this.options = options;
	}
});

$(document).ready(function() {

	var router = new WidgetsRouter({ el: $("body") });
	Backbone.history.start({pushState: false});

});
