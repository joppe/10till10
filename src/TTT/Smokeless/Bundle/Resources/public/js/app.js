/*
 * Main application
 */
var App = {
	Views : {},
	Models : {}
};

/*
|--------------------------------------------------------
|	Router
|--------------------------------------------------------
*/
App.Router = Backbone.Router.extend({

	routes: {
		"": "form",
		"form": "form",
		"progress": "progress"
	},

    initialize: function (user) {
        this.user = user;
    },

	login: function () {
		$('#app').html(new App.Views.Login({
            model: this.user
        }).el);
	},

	progress: function () {
		$("#app").html(new App.Views.Progress({
            model: this.user
        }).el);
	},

	form: function () {
		$("#app").html(new App.Views.Form({
            model: this.user
        }).el);
	}
});

jQuery(function () {
    var user = new App.Models.User();

    App.Instance = new App.Router(user);
    Backbone.history.start();
});