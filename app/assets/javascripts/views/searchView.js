var app = app || {};
app.Views = app.Views || {};

// View of the page for selecting a seat in the flight
app.Views.SearchView = Backbone.View.extend({
	el: '#main',
	events: {
		'click .subSearch': 'searchFlights'
	},
	initialize: function(){
		this.template = $('#searchView').html();
	},
	render: function(){
		
		var renderHTML = Handlebars.compile(this.template);
		$('#main').html(renderHTML(this.$el));
	},
	searchFlights: function(){
		var to = $('.to').val();
		var from = $('.from').val();
		var search = this;	

		var flightCollection = new app.Collections.Flights()
		flightCollection.fetch({
			data: {origin: from, destination: to}, // this.model.id
			success: function(flights, res, opts){
				var flightsView = new app.Views.FlightsView({collection: flights});
				flightsView.render();
				search.$el.html(flightsView.el)
			}	
		});
	}
});
