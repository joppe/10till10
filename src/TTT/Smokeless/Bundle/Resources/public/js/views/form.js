/*
|--------------------------------------------------------
|	Form
|--------------------------------------------------------
*/
App.Views.Form = Backbone.View.extend({

	initialize: function () {
		this.render();
	},

	render: function () {
		$(this.el).html('#id');
		return this;
	}

});
