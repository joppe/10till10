/*
|--------------------------------------------------------
|	Users Model
|--------------------------------------------------------
*/
App.Models.User = Backbone.Model.extend({
    url: '/app_dev.php/rest',

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
    }
/*
    sync: function (success) {
        var method = 'create';

        if (this.get('id') !== null) {
            method = 'update';
        }

        Backbone.sync(method, this, {
            success: function () {
                if (typeof success === 'function') {
                    success();
                }
                console.log('success');
            },
            error: function () {
                console.log('error');
            }
        });
    },*/
});
/*

*/
/*
|--------------------------------------------------------
|	Users Collection
|--------------------------------------------------------
*//*

App.Models.UserCollection = Backbone.Collection.extend({

	model: App.Models.User,

	url: "user"
});*/
