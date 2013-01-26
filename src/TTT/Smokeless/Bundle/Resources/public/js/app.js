
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
		"": "login",
		"form": "form",
		"progress": "progress"
	},

    initialize: function (user) {
        this.user = user;
    },

	login: function () {
		$('#main').html(new App.Views.Login({
            model: this.user
        }).el);
	},

	progress: function () {
		$("#main").html(new App.Views.Progress({
            model: this.user
        }).el);
	},

	form: function () {
		$("#main").html(new App.Views.Form({
            model: this.user
        }).el);
	}
});

/*
|--------------------------------------------------------
|	Preload templates
|--------------------------------------------------------
*/
tpl.loadTemplates(['login','form','progress'], function () {
	App.Instance = new App.Router();
	Backbone.history.start();
});