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

      this.trigger("showWidgetDetail", {
        widgetId: this.model.id,
        editMode: true
      });

		},

		"click #goto_widget_list": function(e) {

			this.trigger("showWidgetList");

		},

		"click #delete_widget": function(e) {

      if (confirm("Are you sure you want to delete the widget?")) {
				this.trigger("deleteWidget");
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

    	this.trigger("saveWidget", {
				name: this.$("#widget_name").val(),
				description: this.$("#widget_description").val(),
				size: this.$("#widget_size").val(),
				color: this.$("#widget_color").val(),
				quantity: this.$("#widget_quantity").val()
			});

		},

		"click #cancel_widget": function() {

			this.trigger("showWidgetDetail", {
        widgetId: this.model.id,
        editMode: false
      });

		}
	}
});
