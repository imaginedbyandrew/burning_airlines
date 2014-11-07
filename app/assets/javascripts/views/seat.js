var app = app || {};
app.Views = app.Views || {};

// individual seat view

app.Views.SeatView = Backbone.View.extend({
	className: 'seat',
	events: {
		'click': 'clickSeat'
	},

	initialize: function() {
		this.template = $('#seatView').html();
	},	

	render: function() {
		var seatViewHTML = Handlebars.compile(this.template);
		this.$el.html( seatViewHTML(this.model.toJSON()) );

		// TODO: put seat on page
		// $('.seatsView').append(this.el);
	},

	clickSeat: function() {
		alert('Clicked seat ' + this.model.get('name'));
	}
});



