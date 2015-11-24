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

var aWidget = new Widget();

aWidget.on("change:color", function(model, color) {
	console.log("color changed: " + color);
});

aWidget.set("name", "Cool Widget");
aWidget.set("description", "A cool widget that makes life better.");
aWidget.set("size", "large");
aWidget.set("color", "blue");

console.log(aWidget.getLongDescription());
