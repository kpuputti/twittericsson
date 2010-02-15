var LATITUDE = '';
var LOGNITUDE = '';


function updateFeed() {

    $.ajax({
	    type: 'GET',
	    url: 'http://api.twitter.com/1/statuses/home_timeline.json?callback=?',
	    dataType: 'json',
		success: function(data) {
		$.each(data, function(i, res){		 
		        var tweet = '<div class="tweet">' +
			    '<p><b>' + res.user.screen_name + '</b> ' +
			    res.text + ' <span class="source">from ' + 
			    res.source + '</span></p>' +
			    '</div>';
				  
		        $('.feed').append(tweet).show();
			console.log('text: ' + res.text);
			console.log('geo: ' + res.geo);
	        });
	     }
	});
}

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