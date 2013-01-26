/*
|--------------------------------------------------------
|	Login
|--------------------------------------------------------
*/
App.Views.Login = Backbone.View.extend({

	events: {
		'click #fb-connect' : 'connect'
	},

	initialize: function () {
		this.render();
	},

	render: function () {
		$(this.el).html(tpl.get('login'));
		return this;
	},

	connect: function (e) {
		e.preventDefault();
		alert('test');
	}


});
