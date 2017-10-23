$(document).ready( function(){
    AppView = Backbone.View.extend({
        el: $("#appview"),
        initialize: function(){
            // Lets create an empty collection to store the weathers
            this.weathers_collection = new WeathersCollection;
        },
        events: {
            // Events are attached when Backbone starts and 
            // there are many types. We are simply listening for
            // "keypress" on the input field #searchbox
            "keypress #searchbox": "loadResults"
        },
        loadResults: function(event){
            // results is passed an event object which we 
            // can use to get the input text, also note "this"
            // refers to the current view
            query = $(event.currentTarget).val();
            
            // Now we will use jquery deferred objects to get 
            // data from the API
            $.when( this.ajaxGetWeathers( query ) )
            .then( $.proxy( function( response ){
                // Below is accessing all the weathers from google api
                // It puts it in a big json string and I am 
                // simply selecting it
				entries = response.forecast.forecastday;
                // Now we pass the array of json objects to add to the collection
                this.weathers_collection.refresh( entries );

            }, this ) ); // $.proxy is a useful way of passing the parent object to the anonymous function
        },
        ajaxGetWeathers: function( query ){
            // Google is damn fast, return the ajax function to pass the promise() test in the $.when statement
            var ajaxQuery =  $.ajax("http://api.apixu.com/v1/forecast.json?key=c1f93b42acf84432a1482548172310&q=" + query + "&days=5");
            return ajaxQuery; 
        }
    
    });
    // Create an app view once the document has loaded
    var appview = new AppView;
})