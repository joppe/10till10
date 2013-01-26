/*
|--------------------------------------------------------
|	Form
|--------------------------------------------------------
*/
App.Views.Form = Backbone.View.extend({

	initialize: function () {
        this.model = new App.Models
		this.render();
	},

	render: function () {
		$(this.el).html('#id');
		return this;
	}

});
