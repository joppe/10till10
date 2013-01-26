/*
|--------------------------------------------------------
|	Users Model
|--------------------------------------------------------
*/
App.Models.User = Backbone.Model.extend({
    defaults: {
        id: null,
        name: null,
        fb_uid: null,
        date_registered: null,
        date_last_fail: null,
        date_smoker_since: null,
        number_per_day: null,
        cost_per_pack: null,
        number_per_pack: null
    },

    sync: function (success) {
        var method = 'create';

        if (this.get('id') !== null) {
            method = 'update';
        }

        Backbone.sync(method, this, {
            url: 'rest',
            success: function () {
                success();
                console.log('success');
            },
            error: function () {
                console.log('error');
            }
        });
    },

	urlRoot: "user",

	initialize: function () {

	},

	validate: function () {

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