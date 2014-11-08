var app = app || {};

// app router
////
app.AppRouter = Backbone.Router.extend({
	routes: {
		'': 'index',
		'search': 'showSearch',
		'flights/:id': 'showFlight',
		'search/:o/:d': 'search'
	},

	showFlight: function(id){
		var flight = new app.Models.Flight({id: parseInt(id)});
		flight.fetch({
			success: function(){
				var flightView = new app.Views.FlightView({model: flight});
				$('#main').html(flightView.el);
			}
		});
	},
	showSearch: function() {
		var view = new app.Views.SearchView();
		view.render();
	},
	search: function(origin, des){
		this.showSearch();
		var flightCollection = new app.Collections.Flights();

		flightCollection.searchFlights(origin, des, function(flights){
			var flightsView = new app.Views.FlightsView({collection: flights});
			flightsView.render();
			$('.searches').html(flightsView.el);
		});
	},

	index: function(){
		
	}
});