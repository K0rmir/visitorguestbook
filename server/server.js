// This is considered boilerplate for server setup and can be copy and pasted into projects //
import Database from "better-sqlite3";
const db = new Database("database.db");
import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

// This starts/creates the server. The console log confirms the server is running upon executing "node server" //
app.listen(8080, function() {
    console.log("Congratulations, you just hacked the mainframe.")
});

// This is creating the homepage of the API endpoint //
app.get("/", function (request, response) {
    response.json("This is a response from the server")
});

// This creates a new endpoint called /messages, creates a new variable and saving within that variable
// all (*) of the values from our database called messages. The GET request enables the API to recieve/go and GET 
// data from the database. //
app.get("/messages", function (request, response) {
    const messages = db.prepare("SELECT * FROM messages").all();
    response.json(messages)
});

// This POST request updates the database with what was added to the form. It creates two variables
// called username and message where the values are equal to those in the body of the request.
app.post("/messages", function (request, response) {
    const username = request.body.username;
    const message = request.body.message;
// We then use SQL to insert the username and message values into the "messages" database.
// The values are question marks to prevent SQL injection.
    const newMessage = db.prepare(`INSERT INTO messages (username, message) VALUES (?, ?)`).run(username, message);
    response.json("message added");
});

