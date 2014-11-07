var app = app || {};

$(document).ready(function(){
	// Only start the start the app if they are on the right page
	if ($('#app').length > 0 ){
		app.router = new app.AppRouter();
		Backbone.history.start();	
	}
});