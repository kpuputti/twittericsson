var USER = 'nerd_dev';
var PASS = '12wR4vKL4..S';

function updateFeed() {
    console.log('update feed');

    $.ajax({
	    type: 'GET',
	    url: 'http://api.twitter.com/1/statuses/home_timeline.json?callback=?',
	    dataType: 'json',
	    username: USER,
	    password: PASS,
	    success: function(data) {
		$.each(data, function(i, res){		 
		        var tweet = '<div class="tweet">' +
			    '<p><b>' + res.user.screen_name + '</b> ' +
			    res.text + ' <span class="source">from ' + 
			    res.source + '</span></p>' +
			    '</div>';
				  
		        $('.feed').append(tweet).show();
		   		
	        });
	     }
	});
}

function tweet() {

    var post = $('#tweet_text').val();
    console.log('tweeting: ' + post);
    
    $.getJSON(UPDATE_URL,
	      {text: post},
	      function(data) {
		  console.log("update done");
	      });
    
    //var auth = make_basic_auth('nerd_dev','12wR4vKL4..S');

    /*
    $.ajax({
	    type: 'POST',
		url: 'http://twitter.com/statuses/update.json?jsonp=?',
		dataType: 'json',
		data: 'status=All your base are belong to us',
		beforeSend: function(req) {
                req.setRequestHeader('Authorization', auth);},
		jsonp: function(data) {
                console.log('data: ' + data);
	   }
	  });
    */
    /*
    $.ajax({
            type: 'POST',
	    url: 'http://twitter.com/statuses/update.json?callback=?',
	    dataType: 'json',
	    username: USER,
	    password: PASS,
	    data: ({status : post}),
	    success: function(data) {
		console.log('success! ' + data);
	    }
        });

    */

}

function make_basic_auth(user, pass) {
    console.log('calc: ' + user + ', ' + pass);
    var tok = user + ':' + pass;
    var hash = Base64.encode(tok);
    return "Basic " + hash;
}