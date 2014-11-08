var app = app || {};
app.Views = app.Views || {};

// View holding all the seats

app.Views.SeatsView = Backbone.View.extend({
	className: 'seatsView',

	events: {
		'click #bookSeats': 'book'
	},

	initialize: function() {

	},
	render: function() {
		this.$el.html('');
		// For each row
		var seatView = this;
		var currentSeat = 0;
		_.times(seatView.rows, function(r){
			// create a div with class seatRow
			var $seatRow = $('<div class="seatRow">');
			// for each column
			_.times(seatView.columns, function(c){
				// add a inline div with class seat
				var view = new app.Views.SeatView({model: seatView.collection.at(currentSeat)})
				// view.render();
				this.append(view.$el);
				currentSeat++;
			}, $seatRow);
					// Render a seat
			// put the div at the bottom of the flight
			this.$el.append($seatRow);
		}, this);
		$button = $('<button id="bookSeats">');
		$button.text('Book');
		this.$el.append($button);
			
	},
	book: function(){
		var seatsToBook = this.collection.where({selected: true});
		_.each(seatsToBook, function(seat) {
			seat.set({passenger_id: 1});
			seat.save();
		});
		this.render();
	}
});

