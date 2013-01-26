
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

	login: function () {
		$('.center').html(new App.Views.Login().el);
	},

	progress: function () {
		$(".center").html(new App.Views.Progress().el);
	},

	form: function () {
		$(".center").html(new App.Views.Form().el);
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