$(document).ready(function() {

	var widgetsRouter = new WidgetsRouter();
	var widgetsController = new WidgetsController({ el: $("body") }, widgetsRouter);

	Backbone.history.start({pushState: false});

});
