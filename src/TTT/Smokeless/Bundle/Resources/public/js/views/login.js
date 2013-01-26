/*
|--------------------------------------------------------
|	Login
|--------------------------------------------------------
*/
App.Views.Login = Backbone.View.extend({

	events: {
		'click #login' : 'login'
	},

	initialize: function () {
		this.render();
	},

	render: function () {
		$(this.el).html('login');
		return this;
	},

	login: function () {
		alert('test');
	}


});
