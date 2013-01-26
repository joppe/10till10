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
        this.template = _.template($('#tpl-login').html());
		this.render();
	},

	render: function () {
		this.$el.html(this.template(this.model.attributes));
		return this;
	},

	connect: function (e) {
		e.preventDefault();
		alert('test');
	}


});
