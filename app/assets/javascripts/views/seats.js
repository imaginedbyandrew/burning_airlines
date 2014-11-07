var app = app || {};
app.Views = app.Views || {};

// View holding all the seats

app.Views.SeatsView = Backbone.View.extend({
	className: 'seatsView',

	initialize: function() {

	},

	render: function() {
		this.collection.forEach(this.addOne, this);
		// $('.flightView').append(this.$el);
	},

	addOne: function(seat) {
		var view = new app.Views.SeatView({model: seat})
		view.render();
		this.$el.append(view.$el)
	}
});

