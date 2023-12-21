import Database from "better-sqlite3";
const db = new Database("database.db");
import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());


// This starts/creates the server //
app.listen(8080, function() {
    console.log("You are now on the running server")
});

// This is creating the homepage of the API endpoint //
app.get("/", function (request, response) {
    response.json("This is a response from the server")
});

// This creates a new endpoint called /messages, creating a new variable and saving within that variable
// all (*) of the values from our database called messages. The GET request enables the API to recieve/go and GET 
// data from the database. //
app.get("/messages", function (request, response) {
    const messages = db.prepare("SELECT * FROM messages").all();
    response.json(messages)
});

// This now updates the database with what was added to the form 
app.post("/messages", function (request, response) {
    const username = request.body.username;
    const message = request.body.message;

    const newMessage = db.prepare(`INSERT INTO messages (username, message) VALUES (?, ?)`).run(username, message);
    response.json("message added");
});

