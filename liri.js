// All required node modules
require('dotenv').config();

// Spotify, OMDB, and Bands In Town Modules
var keys = require('./keys.js');
var fs = require('fs');
console.log(keys.spotify.id);


// Exporting of the Spotify, Concerts, and Movies functions
var spotifyX = require("./spotify.js");
var concertX = require("./concerts.js");
var moviesX = require("./movies.js");


//Creates initial user initiation & user input
var userInitiation=process.argv[2];
var userInput=process.argv.splice(3,process.argv.length).join(' ');


//app conditions 
switch (userInitiation) {
    // help function to clarify commands used
    case "help":
        console.log("Type one of these commands\n"+
                    "'concert-this': to search your favorite artist concerts\n"+
                    "'spotify-this-song': to search your favorite song\n"+
                    "'movie-this': to search your favorite movie \n"+
                    "'do-what-it-says': using command from random.txt \n"
                    );
        break;
    case "concert-this":
        concertX(userInput);
        break;
    case "spotify-this-song":
        spotifyX(userInput);
        break;
    case "movie-this":
        moviesX(userInput);
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
    default:
        // console.log("Let's try that again :)");
};


function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        //Return error if error occurs.
        if (error) {
            return console.log(error);
        }
        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");
        
        // Each command is represented. Because of the format in the txt file, remove the quotes to run these commands. 
        if (dataArr[0] === "spotify-this-song") {
            var songcheck = dataArr[1].slice(1, -1);
            console.log("Song Check: "+songcheck)
            spotifyX(songcheck);
        } else if (dataArr[0] === "concert-this") {
            var venueName = dataArr[1].slice(1, -1);
            console.log("Venue Name: "+venueName)
            concertX(venueName);
        } else if(dataArr[0] === "movie-this") {
            var movieName = dataArr[1].slice(1, -1);
            console.log("Movie Name: "+movieName)
            moviesX(movieName);
        }
    });
};