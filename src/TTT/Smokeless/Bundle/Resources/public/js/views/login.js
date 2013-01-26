/*
|--------------------------------------------------------
|	Login
|--------------------------------------------------------
*/
App.Views.Login = Backbone.View.extend({

	tagName: 'div',

	className: 'login',

	events: {
		'click #fb-connect' : 'connect'
	},

	initialize: function () {
		this.render();
	},

	render: function () {
		$(this.el).html();
		return this;
	},

	connect: function (e) {
		e.preventDefault();
		alert('test');
	}


});
