var app = app || {};

// app router
////
app.AppRouter = Backbone.Router.extend({
	routes: {
		'search': 'showSearch',
		'flights/:id': 'showFlight',
	},

	showFlight: function(id){
		console.log('test');
		var flight = new app.Models.Flight();
		flight.id = id;
		flight.fetch({
			success: function(){
				console.log('test');
				var flightView = new app.Views.FlightView({model: flight});
				flightView.render();
			}
		});
	},

	search: function() {
		console.log('test');

		var view = new app.Views.SearchView();
		view.render();
	}


});