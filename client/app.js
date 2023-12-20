const messageForm = document.querySelector("#messageForm");

function handleSubmitMessageForm(event) {
    event.preventDefault();
    console.log("Form Submitted!");
}

messageForm.addEventListener("submit", handleSubmitMessageForm);