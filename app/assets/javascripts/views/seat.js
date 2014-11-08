var app = app || {};
app.Views = app.Views || {};

// individual seat view

app.Views.SeatView = Backbone.View.extend({
	className: 'seat',
	events: {
		'click': 'clickSeat'
	},

	initialize: function() {
		this.render()
	},	
	render: function() {
		// if (this.model.get('passenger_id')) {
			// console.log('test');
		// }
		if (this.model.get('passenger_id')) {
			this.$el.addClass('taken');
		}
		this.$el.html(this.model.get('name'));
	},

	clickSeat: function() {
		if (this.model.get('passenger_id')) {
			return;
		} else {
			this.$el.toggleClass('selected');
			if (this.model.get('selected')) {
				this.model.set({selected: false});
			} else {
				this.model.set({selected: true});
			}	
		}
	}
});



