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

        var self = this;

		// login with facebook
		fbHelper.login('email', 'id, name, gender, email', function(auth_response, api_response) {

			// set user settings
			App.Settings.accessToken	= auth_response.accessToken;
			App.Settings.signed_request	= auth_response.signedRequest;

			self.model.set({
                'fb_uid': api_response.id,
                'name': api_response.name,
                'email': api_response.email,
                'gender': api_response.gender
            });
            self.model.save();

			// goto form
			App.Instance.navigate('form', {trigger: true});
		});
	}

});
