$(document).ready( function(){ 
    WeathersList = Backbone.View.extend({
        el: $("#weatherList"), // Every view has a element associated with it
        initialize: function(){
            // Set the initial content of the view
            // this.el.html("Type to search for city weather");
        },
        renderList: function( collection ){
            // This function is called when the collection "listens"
            // for the "refresh" event which is called in our loadResults()
            // Now we want to compile our underscore template
            // The underscore template just takes a string of text/html 
            var compiled_template = _.template( $("#weatherPerDay").html() );
            // Once compiled we can call our template and pass it any 
            // matching data we have and append it to our view.el
            collection.weatherList.el.html( compiled_template( { weathers: collection.models } ) );

            // Compilation with Handlebar, but unfortunately return error - .toJSON() is not defined  ;(
            //  var tpl = function () {
            //      return Handlebars.compile($("#weatherPerDay").html());
            // }
            // collection.weatherList.el.html(tpl(collection.models.model.toJSON()));
        }
    });
})