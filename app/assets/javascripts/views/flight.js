var app = app || {};
app.Views = app.Views || {};

// View of the page for selecting a seat in the flight
app.Views.FlightView = Backbone.View.extend({

	// behind the scenes
	// var $el = $('<div class="flightView">')
	className: 'flightView',
	initialize: function(){
		var flight = this;
		var plane = new app.Models.Plane({id: this.model.get('plane_id') });
		plane.fetch().done(function(){
			flight.rows = plane.get('rows');
			flight.columns = plane.get('column');
			flight.render();
		});
	},

	render: function(){
		$('.searchView').html(this.$el);

		var seatCollection = new app.Collections.Seats()
		var flight = this;

		seatCollection.fetch({
			data: {flight_id: flight.model.get('id')}, // this.model.id
			success: function(seats, res, opts){
				var seatSelectionView = new app.Views.SeatsView({collection: seats});
				seatSelectionView.rows = flight.rows;
				seatSelectionView.columns = flight.columns;
				seatSelectionView.render();
				flight.$el.html(seatSelectionView.el);
			}	
		});
	},
});
