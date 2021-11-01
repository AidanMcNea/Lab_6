const express = require("express");
const app = express();
const port = 4000;
const path = require("path");
const bodyParser = require("body-parser");

const cors = require("cors");
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to Data Representation & Querying");
});

app.get("/hello/:name", (req, res) => {
  console.log(req.params.name);
  res.send("Hello " + req.params.name);
});

app.get("/api/movies", (req, res) => {
  const myMovies = [
    {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
        "Title": "Charlie Wilson's War",
        "Year": "2007",
        "imdbID": "tt0472062",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"
        }
  ];
  res.json({ movies: myMovies });
});

app.get("/test", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/name", (req, res) => {
  res.send("Hello " + req.query.fname + " " + req.query.lname);
});

app.post("/api/movies", (req, res) => {

    console.log(req.body.Title)
    console.log(req.body.Year)
    console.log(req.body.Poster);

  res.send('Data Recieved');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
