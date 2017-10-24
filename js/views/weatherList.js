$(document).ready( function(){ 
    WeathersList = Backbone.View.extend({
        el: $("#weatherList"), // Every view has a element associated with it
        initialize: function(){
            // Set the initial content of the view
            // this.el.html("Type to search for city weather");
        },
        renderList: function( collection ){
            var template = Handlebars.compile( $("#weatherPerDay").html() );
            collection.weatherList.el.html( template({ weathers: collection.models }) );
        }
    });
})