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
        this.template = _.template($('#tpl-login').html());
		this.render();
	},

	render: function () {
		this.$el.html(this.template(this.model.attributes));
		return this;
	},

	connect: function (e) {
		e.preventDefault();

		// login with facebook
		fbHelper.login('email', 'id, name, gender', function(auth_response, api_response) {

			// set user settings
			App.Settings.accessToken	= auth_response.accessToken;
			App.Settings.signed_request	= auth_response.signedRequest;
			App.Settings.userId			= api_response.id;
			App.Settings.name			= api_response.name;
			App.Settings.email			= api_response.email;
			App.Settings.gender			= api_response.gender;


			this.model.set({fb_uid:

			})

			// goto form
			App.Instance.navigate('form', {trigger: true});
		});
	}

});
