var app = app || {};
app.Collections = app.Collections || {};

// Seat collection 

app.Collections.Seats = Backbone.Collection.extend({
	url: '/seats',
	model: app.Models.Seat
});

