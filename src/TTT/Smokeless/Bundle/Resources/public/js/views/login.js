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
        console.log($(tpl.get('login')));
//		$(this.el).html(tpl.get('login'));
		return this;
	},

	connect: function (e) {
		e.preventDefault();
		alert('test');
	}


});
