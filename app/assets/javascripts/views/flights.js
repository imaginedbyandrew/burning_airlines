var app = app || {};
app.Views = app.Views || {};

// View of the page for selecting a seat in the flight
app.Views.FlightsView = Backbone.View.extend({
	className: 'flightsView',
	initialize: function(){
		this.template = $('#flightList').html();
	},
	render: function(){
		var renderHTML = Handlebars.compile(this.template);
		$('.searchView').append(renderHTML({flights: this.collection.toJSON()}));
	},
});
