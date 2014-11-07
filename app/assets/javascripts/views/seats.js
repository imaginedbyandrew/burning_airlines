var app = app || {};
app.Views = app.Views || {};

// View holding all the seats

app.Views.SeatsView = Backbone.View.extend({
	className: 'seatsView',

	initialize: function() {

	},

	render: function() {
		$('.flightView').append(this.$el);

		this.collection.each(function(seat) {
			var view = new app.Views.SeatView({model: seat})
			view.render();
		});
	},
});

