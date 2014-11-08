var app = app || {};
app.Collections = app.Collections || {};

// Flights collection 

app.Collections.Flights = Backbone.Collection.extend({
	url: '/flights',
	model: app.Models.Flight,

	searchFlights: function(from, to, callback){
		this.fetch({
			data: {origin: from, destination: to}, // this.model.id
			success: callback
		});
	}
});