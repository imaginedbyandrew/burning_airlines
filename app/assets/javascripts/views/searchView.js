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
		app.router.navigate('search/SYD/MELB', true);
	}
	
});
