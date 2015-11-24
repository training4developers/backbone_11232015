var Widget = Backbone.Model.extend({
  urlRoute: "/api/widgets"
});

var Widgets = Backbone.Collection.extend({
  model: Widget,
  url: "/api/widgets"
});

var widgets = new Widgets();
