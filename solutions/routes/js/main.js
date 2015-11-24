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

var ViewWidgetsView = Backbone.View.extend({
  tagName: "div",
	initialize: function(options) {
    var source = $("#view-widgets").html();
		this.template = Handlebars.compile(source);
  },
  render: function() {
		var html = this.template({ widgets: this.collection.toJSON() });
		this.$el.html(html);
  }
});

var ViewWidgetView = Backbone.View.extend({
  tagName: "div",
	initialize: function(options) {
    var source = $("#view-widget").html();
		this.template = Handlebars.compile(source);
    this.options = options;
  },
  render: function() {
		var html = this.template({ widget: this.model.toJSON() });
		this.$el.html(html);
  },
	events: {
		"click #edit_widget": function(e) {
			this.options.router.navigate("#/widget/" + this.model.id + "/edit", { trigger: true });
		},
		"click #goto_widget_list": function(e) {
			this.options.router.navigate("#/widgets", { trigger: true });
		},
		"click #delete_widget": function(e) {
			var router = this.options.router;
			if (confirm("Are you sure you want to delete the widget?")) {
        widgets.remove(this.model.id);
        this.options.router.navigate("#/widgets", { trigger: true });
			}
		}
	}
});

var EditWidgetView = Backbone.View.extend({
  tagName: "div",
	initialize: function(options) {
    var source = $("#edit-widget").html();
		this.template = Handlebars.compile(source);
    this.options = options;
  },
  render: function() {
		var html = this.template({
			widgetOp: "Edit",
			widget: this.model.toJSON()
		});
		this.$el.html(html);
  },
	events: {
		"click #save_widget": function() {
			this.model.set("name", $("#widget_name").val());
			this.model.set("description", $("#widget_description").val());
			this.model.set("color", $("#widget_color").val());
			this.model.set("size", $("#widget_size").val());
			this.model.set("quantity", $("#widget_quantity").val());
			this.options.router.navigate("#/widget/" + this.model.id, {trigger:true});
		},
		"click #cancel_widget": function() {
			this.options.router.navigate("#/widget/" + this.model.id, {trigger:true});
		}
	}
});
