//node-spotify npm package
var Spotify = require('node-spotify-api');
// Spotify, OMDB, and Bands In Town Modules
var keys = require('./keys.js');
//File System npm package
var fs = require("fs");

var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});



function spotifyX(userInput) {
    var song = userInput;
    if (!song) {
        song = "the sign Ace of Base" 
    }
    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
    //   console.log(data.tracks.items[0]); 
      console.log("\n---------------------\nSong Name: " + data.tracks.items[0].name);
      console.log("Artist(s) Name: "+ data.tracks.items[0].artists[0].name);
      console.log("Album Name: "+ data.tracks.items[0].album.name);
      console.log("Preview URL: " + data.tracks.items[0].preview_url+"\n---------------\n");

     //adds text to log.txt
        fs.appendFileSync('log.txt', "\r\n" + "Song Search Log---------------------------------------"+ "\r\n", 'utf8');
        fs.appendFileSync('log.txt', "\r\n" + "Song Name: " + data.tracks.items[0].name + "\r\n", 'utf8' );
        fs.appendFileSync('log.txt', "\r\n" + "Artist(s): " + data.tracks.items[0].artists[0].name + "\r\n", 'utf8');
        fs.appendFileSync('log.txt', "\r\n" + "Album: " + data.tracks.items[0].album.name+ "\r\n", 'utf8');
        fs.appendFileSync('log.txt', "\r\n" + "Preview Link: " + data.tracks.items[0].preview_url + "\r\n", 'utf8' );
        fs.appendFileSync('log.txt', "\r\n" + "-------------------------------------------------------"+ "\r\n", 'utf8');
    });
    }


// Exporting the function 
module.exports = spotifyX;