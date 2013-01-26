/*
|--------------------------------------------------------
|	Progress
|--------------------------------------------------------
*/
App.Views.Progress = Backbone.View.extend({
    tagName: 'div',

    className: 'progress',

	initialize: function () {
        this.template = _.template($('#tpl-progress').html());
        this.render();
	},

	render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
	}

});
