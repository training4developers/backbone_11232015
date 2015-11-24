var Widget = Backbone.Model.extend({
  defaults: {
    name: "Widget",
    color: "black",
    size: "small",
    description: 'A small, black widget',
    quantity: 10
  }
});

var Widgets = Backbone.Collection.extend({
  model: Widget
});

var widgets = new Widgets();

widgets.add(new Widget({
  id: 1,
	name: "Small Red Gear",
	color: "red",
	size: "small",
	decription: "A small, red gear.",
	quantity: 3
}));

widgets.add(new Widget({
  id: 2,
	name: "Large Blue Bolt",
	color: "blue",
	size: "large",
	decription: "A small, blue bolt.",
	quantity: 7
}));

widgets.add(new Widget({
  id: 3,
	name: "Medium Yellow Gear",
	color: "yellow",
	size: "medium",
	decription: "A medium, yellow gear.",
	quantity: 10
}));
