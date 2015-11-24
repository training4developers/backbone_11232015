var Widget = Backbone.Model.extend({

	defaults: {
		name: "",
		description: "",
		size: "",
		color: ""
	},

	getLongDescription: function() {
		return this.get("name") + " " + this.get("description") + " " + this.get("size") + " " + this.get("color");
	}

});

var Widgets = Backbone.Collection.extend({
	model: Widget
});

var theWidgets = new Widgets();

for (var x=1; x<=5; x++) {
	theWidgets.add(new Widget({
		id: x,
		name: "Cool Widget " + x,
		description: "A cool widget that makes life better.",
		size: "large",
		color: "blue"
	}));
}

theWidgets.each(function(widget) {
	console.log(widget.getLongDescription());
});

theWidgets.remove(3);

theWidgets.each(function(widget) {
	console.log(widget.getLongDescription());
});
