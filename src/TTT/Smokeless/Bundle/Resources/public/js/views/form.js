/*
|--------------------------------------------------------
|	Form
|--------------------------------------------------------
*/
App.Views.Form = Backbone.View.extend({
    tagName: 'div',

    className: 'login',

    events: {
        'blur #date_registered': 'updateDateRegistered',
        'blur #date_smoker_since': 'updateDateSmokerSince',
        'blur #number_per_day': 'updateNumberPerDay',
        'blur #number_per_pack': 'updateNumberPerPack',
        'blur #cost_per_pack': 'updateCostPerPack',
        'click #save': 'save'
    },

	initialize: function () {
        var self = this,
            helper = ['date_registered', 'date_smoker_since', 'number_per_day', 'number_per_pack', 'cost_per_pack'];

        this.template = _.template($('#tpl-form').html());
        this.render();

        this.$el.find('#date_registered').datepicker();
        this.$el.find('#date_smoker_since').datepicker();


        _.each(helper, function (attribute) {
            self.$el.find('#' + attribute).val(self.model.get(attribute));
        });
	},

	render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
	},

    save: function (event) {
        event.preventDefault();

        this.model.save(this.model.attributes, {
            success: function () {
                console.log('saved');
            }
        });
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
        this.model.set('number_per_pack', $('#number_per_pack').val());
    },

    updateCostPerPack: function () {
        this.model.set('cost_per_pack', $('#cost_per_pack').val());
    }
});
