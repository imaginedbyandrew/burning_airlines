var app = app || {};

// app router
////
app.AppRouter = Backbone.Router.extend({
	routes: {
		'': 'index',
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
				$('#main').html(flightView.el);
			}
		});
	},

	showSearch: function() {
		console.log('test');
		var view = new app.Views.SearchView();
		view.render();
	},

	index: function(){
		
	}


});