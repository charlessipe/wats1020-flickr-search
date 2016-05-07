// Asynchronous Flickr Search
//
// Flickr reveals a searchable JSON Feed you can access via jQuery's $.getJSON()
// method. Use this to allow users to search for a tag or comma-separated list
// of tags and view the images that are found.
//
// Allow users to click the images to see a larger version with more information.

$(document).on('ready', function(){
    // Place your code here, inside the document ready handler.
  
    
  
    var searchImages = function(tags){
      var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
      
      $.getJSON( flickerAPI, {
        tags: tags,
        tagmode: "any",
        format: "json"
      })
        .done(function( data ) {
          
          $("#images img").remove(); // remove previous images from page
          $("#images ul").remove(); // remove previous data
        
          $.each( data.items, function( i, item ) {
            //console.log(item.media.m);
            console.log(item.title);
            console.log(item.date_taken);
            console.log(item.description);
            console.log(item.author);
            console.log(item.link);
            
            var image = item.media.m;
            var title = item.title;
            var date_taken = item.date_taken;
            var description = item.description;
            var author = item.author;
            var link = item.link;
            
            //$( "<img>").append("<div class='col-xs-4'");
            
            //$( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
            
            $( "#images" ).append( "<ul><li>" + "Title: " + title + "</li><li>" + "Date taken: "+ date_taken + "</li><li>" + "Description: "+ description + "</li><li>" + "Author: "+ author + "</li><li>" + "Link: "+ link + "</li></ul>");
            
            //<li><img src='" + image + "'></li>" +
            
            //<div class='col-xs-4'><ul>   </ul></div>
            
            //$( "<img>").append("</div>");
            //$( "<img> li[i]").text("hi").appendTo("")
            /*
            if ( i === 3 ) {
              return false;
            }
            */
          });
        });
      
    };
  
    $( "#flickr-button" ).click(function() {
        event.preventDefault();  // prevent button from submitting

        var tagName = document.getElementById('flickr-tag').value;  // get value of Flicker search input field

        searchImages(tagName);  // execute searchImages function
      });
  
    
  
    // Create a function called `searchImages()`. This function will handle the
    // process of taking a user's search terms and sending them to Flickr for a
    // response.

    // Inside the `searchImages()` function, the following things should happen:

        // 1.   Accept a string value called `tags` as an argument. Example:
        //      `var searchPhotos = function(tags){`
        //
        // 2.   Define the location of the Flickr API like this:
        //      `var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";`
        //
        // 3.   Construct a `$.getJSON()` call where you send a request object
        //      including the tags the user submitted, and a `done()` handler
        //      that displays and refreshes the content appropriately.
        //
        // 4.   Update the display to add the images to the list with the id
        //      `#images`.

    // Attach an event to the search button (`button.search`) to execute the
    // search when clicked.

        // When the Search button is clicked, the following should happen:
        //
        // 1.   Prevent the default event execution so the browser doesn't
        //      Example: `event.preventDefault();`
        //
        // 2.   Get the value of the 'input[name="searchText"]' and use that
        //      as the `tags` value you send to `searchImages()`.
        //
        // 3.   Execute the `searchImages()` function to fetch images for the
        //      user.

    // STRETCH GOAL: Add a "more info" popup using the technique shown on the
    // Bootstrap Modal documentation: http://getbootstrap.com/javascript/#modals-related-target



});
