var app = app || {};
app.Models = app.Models || {};

// Plane model 

app.Models.Plane = Backbone.Model.extend({
	urlRoot: '/planes'
});