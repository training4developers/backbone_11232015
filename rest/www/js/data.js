var Widget = Backbone.Model.extend({
  urlRoot: "/api/widgets"
});

var Widgets = Backbone.Collection.extend({
  model: Widget,
  url: "/api/widgets"
});

var widgets = new Widgets();
