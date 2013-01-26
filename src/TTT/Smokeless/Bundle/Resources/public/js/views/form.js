/*
|--------------------------------------------------------
|	Form
|--------------------------------------------------------
*/
App.Views.Form = Backbone.View.extend({
    events: {
        'blur #date_registered': 'updateDateRegistered',
        'blur #date_smoker_since': 'updateDateSmokerSince',
        'blur #number_per_day': 'updateNumberPerDay',
        'blur #number_per_pack': 'updateNumberPerPack',
        'blur #cost_per_pack': 'updateCostPerPack',
        'click #save': 'save'
    },

	initialize: function () {
        this.template = _.template($('#tpl-form').html());
        this.render();
	},

	render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
	},

    save: function (event) {
        event.preventDefault();

        this.model.save();
    },

    updateDateRegistered: function () {
        this.model.set('date_registered', $('#date_registered').val());
    },

    updateDateSmokerSince: function () {
        this.model.set('date_smoker_since', $('#date_smoker_since').val());
    },

    updateNumberPerDay: function () {
        this.model.set('number_per_day', $('#number_per_day').val());
    },

    updateNumberPerPack: function () {
        this.model.set('date_registered', $('#date_registered').val());
    },

    updateCostPerPack: function () {
        this.model.set('date_registered', $('#date_registered').val());
    }
});
