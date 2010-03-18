var LATITUDE = '';
var LONGITUDE = '';

/**
 * Updates the tweet feed.
 */
function updateFeed() {
    console.log('juuh');
    var geocoder = new google.maps.Geocoder();

    $.ajax({
	    type: 'GET',
	    url: 'http://api.twitter.com/1/statuses/home_timeline.json?callback=?',
	    dataType: 'json',
		success: function(data) {
		$.each(data, function(i, res){		
			
			var location = '';
			if (res.geo != null) {
			    // location data in the tweet
    
			    var latlng = new google.maps.LatLng(res.geo.coordinates[0], res.geo.coordinates[1]);
			    geocoder.geocode({'latLng': latlng}, function(results, status) {
				    if (status == google.maps.GeocoderStatus.OK) {
					if (results[2]) {

					    location = results[2].formatted_address; 
					    var tweet = '<div class="tweet">' +
						'<p><b>' + res.user.screen_name + '</b> ' +
						res.text + ' <span class="source">from ' +
						res.source + ' at ' + location + '</span>' +
						'</p>' +'</div>';
				
					    $('.feed').append(tweet);
					    
					} else {
					    alert("Geocoder :: No results found");
					}
				    } else {
					alert("Geocoder failed due to: " + status);
				    }
				});

			}
			else {
			    // no location data in the tweet, just print the text
			        var tweet = '<div class="tweet">' +
				    '<p><b>' + res.user.screen_name + '</b> ' +
				    res.text + ' <span class="source">from ' +
				    res.source + location + '</span>' +
				    '</p>' +'</div>';

				$('.feed').append(tweet);

			}
	        });
	     }
	});
    //show the update feed
    $('.feed').show();
}

/**
 *
 *Sends a new tweet.
 *
 */
function tweet() {

    var post = $('#tweet_text').val();
    var username = $('#username').val();
    var password = $('#password').val();

    if (username != '' && password != '') {

	console.log('lat: ' + LATITUDE);
	console.log('long: ' + LONGITUDE);

	$.getJSON(UPDATE_URL,
		  {
		      username: username,
			  password: password,
			  text: post, 
			  lat: LATITUDE, 
			  long: LONGITUDE
			  },
		  function(data) {
		      console.log("update done");
		  });
    
    }
   
}

/**
 * Resolves the current location of the user.
 */
function getGeoData() {

    //determine if the handset has client side geo location capabilities
    if(geo_position_js.init()){
	geo_position_js.getCurrentPosition(
					   function(data){
					           
					       LATITUDE = data.coords.latitude;
					       LONGITUDE = data.coords.longitude;

					   },

					   function(data){
					       alert('could not retrieve geo data');
					   }
					   );
    }
    else{
	alert("Functionality not available");
    }



}


function make_basic_auth(user, pass) {
   
    var tok = user + ':' + pass;
    var hash = Base64.encode(tok);
    return "Basic " + hash;
}