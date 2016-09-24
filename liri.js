var operator = process.argv[2];


//twitter
if (operator == "my-tweets") {
var twitter = require('./keys.js');

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
}



//spotify
else if (operator == "spotify-this-song") {
var spotify = require('spotify');
var s = process.argv;
var songName = "";

for (var i = 3; i < s.length; i++){

	if (i > 2 && i < s.length) {
		songName = songName + "+" + s[i];
	}
	else{
		songName = songName + s[i];
	}
};//for loop
 
spotify.search({ type: 'track', query: songName }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    else{
    	console.log(data);
    	// console.log("The song's artist is: " + JSON.parse(str)["Artist"]);
    	// console.log("The song's name is: " + JSON.parse(data)["Title"]);
    	// console.log("Preview of song: " + JSON.parse(data)["Preview"]);
    	// console.log("The song's album is: " + JSON.parse(data)["Album"]);
    }
 
    // Do something with 'data' 
});
}



//movie
else if (operator == "movie-this") {
var request = require('request');
var p = process.argv;
var movieName = "";

for (var i = 3; i < p.length; i++){

	if (i > 2 && i < p.length) {
		movieName = movieName + "+" + p[i];
	}else{
		movieName = movieName + p[i];
	}
};//for loop

var queryUrl = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json';

console.log(queryUrl);

request(queryUrl, function (error, response, body) {

	if (!error && response.statusCode == 200) {

		console.log("\n");
		console.log("The movie's title is: " + JSON.parse(body)["Title"]);
		console.log("The movie's year is: " + JSON.parse(body)["Year"]);
		console.log("The movie's rating is: " + JSON.parse(body)["imdbRating"]);
		console.log("The movie's country is: " + JSON.parse(body)["Country"]);
		console.log("The movie's language is: " + JSON.parse(body)["Language"]);
		console.log("The movie's plot is: " + JSON.parse(body)["Plot"]);
		console.log("The movie's actors is: " + JSON.parse(body)["Actors"]);
		console.log("\n");
	}//if statement for movie
	else{
		var movieName = "Mr+Nobody";

			if (!error && response.statusCode == 200) {

				console.log("The movie's title is: " + JSON.parse(body)["Title"]);
				console.log("The movie's year is: " + JSON.parse(body)["Year"]);
				console.log("The movie's rating is: " + JSON.parse(body)["imdbRating"]);
				console.log("The movie's country is: " + JSON.parse(body)["Country"]);
				console.log("The movie's language is: " + JSON.parse(body)["Language"]);
				console.log("The movie's plot is: " + JSON.parse(body)["Plot"]);
				console.log("The movie's actors is: " + JSON.parse(body)["Actors"]);
			}//if statement
	}//else mr.nobody

});//top request

}//moviethis



//fs
else if (operator == "do-what-it-says") {
	var fs = require('fs');
	var textFile = "./random.txt";

	fs.readFile("random.txt", "utf8", function(error, data) {

	var dataArr = data.split(',');
	for (data in dataArr) {
		console.log(dataArr[data]);
	}
	// console.log(dataArr.join("+"));
	// turns array back into a string
})
}
