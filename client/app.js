// The below calls/fetches data from the api, turns it into JSON which is an array of objects,
// then for each item in the array, creates a html p element for both the username, changes the text content of those p elements to
// what the user entered using template literals and then appends/adds them to the message area.
const messageForm = document.getElementById("messageForm");

async function getMessages() {
    const response = await fetch("https://visitor-guestbook-assignment.onrender.com/messages");
    const messages = await response.json();
    for (let i = 0; i < messages.length; i++) {
        const username = messages[i].username;
        const message = messages[i].message;
        const p = document.createElement("p");
        p.textContent = `${username}: ${message}`;        
        const messageArea = document.getElementById("messageArea");
        messageArea.appendChild(p);        
    }
};

getMessages();

// This event listener takes the submitted values from the form when submit is clicked, saves them as variables, 
// then sends back the new values to the server to add it to the database. //
messageForm.addEventListener("submit", async function(event) {
    event.preventDefault();
    const formData = new FormData(messageForm);
    const formValues = Object.fromEntries(formData);
    const response = await fetch("https://visitor-guestbook-assignment.onrender.com/messages", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formValues),
    });
    messageForm.reset();
    // lines 36 to 39 could be put inside a function. This function would be established in the for loop on lines 8-12 to avoid duplication of code//
    const username = formValues.username;
    const message = formValues.message;
    const p = document.createElement("p");
    p.textContent = `${username}: ${message}`;
    
    const messageArea = document.getElementById("messageArea");
    messageArea.appendChild(p);
});