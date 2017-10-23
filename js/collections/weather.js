$(document).ready( function(){
	WeathersCollection = Backbone.Collection.extend({
	    model: WeathersEntry, 
	    initialize: function(){
	        // When initialized we want to associate a view with this collection
	        this.weatherList = new WeathersList;
	        // Backbone lets us "listen" for certain events
	        // In this case when the collection receives an array
	        // of models we want to re-render the list view
	        this.bind("refresh", this.weatherList.renderList);
	    },
	});
})