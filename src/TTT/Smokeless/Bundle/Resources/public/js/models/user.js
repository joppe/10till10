/*
|--------------------------------------------------------
|	Users Model
|--------------------------------------------------------
*/
App.Models.User = Backbone.Model.extend({

	urlRoot: "user",

	initialize: function () {

	},

	validate: function () {

	},
	
	defaults: {

	}
});

/*
|--------------------------------------------------------
|	Users Collection
|--------------------------------------------------------
*/
App.Models.UserCollection = Backbone.Collection.extend({

	model: App.Models.User,

	url: "user"
});