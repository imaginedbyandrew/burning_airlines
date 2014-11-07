var app = app || {};
app.Views = app.Views || {};

// View of the page for selecting a seat in the flight
app.Views.FlightView = Backbone.View.extend({

	// behind the scenes
	// var $el = $('<div class="flightView">')
	className: 'flightView',
	initialize: function(){

	},

	render: function(){
		$('.searchView').html(this.$el);

		var seatCollection = new app.Collections.Seats()
		var flight = this;

		seatCollection.fetch({
			data: {flight_id: flight.model.id}, // this.model.id
			success: function(seats, res, opts){
				var seatSelectionView = new app.Views.SeatsView({collection: seats});
				seatSelectionView.render();
			}	
		});
	},
});
