var app = app || {};
app.Models = app.Models || {};

// Seat Models

app.Models.Seat = Backbone.Model.extend({
	urlRoot: '/seats'
});