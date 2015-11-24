var Widget = Backbone.Model.extend({

	initialize: function() {

		this.set("name", "");
		this.set("description", "");
		this.set("size", "");
		this.set("color", "");

	},

	getLongDescription: function() {
		return this.get("name") + " " + this.get("description") + " " + this.get("size") + " " + this.get("color");
	}

});

var WidgetView = Backbone.View.extend({

	tagName: "div",

	initialize: function() {

		var source = $("#widget-view").html();
		this.template = Handlebars.compile(source);
		this.render();

	},

	render: function() {

		var html = this.template(this.model.attributes);
		this.$el.html(html);
	}

});

window.addEventListener("DOMContentLoaded", function() {

	var aWidget = new Widget();
	aWidget.set("name", "Cool Widget");
	aWidget.set("description", "A cool widget that will help you.");
	aWidget.set("size", "large");
	aWidget.set("color", "blue");

	var aWidgetView = new WidgetView({

		el: $(document.body),
		model: aWidget

	});

});
