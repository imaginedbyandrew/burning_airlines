var app = app || {};
app.Models = app.Models || {};

// Seat Models

app.Models.Flight = Backbone.Model.extend({
	urlRoot: '/flights'
});