const socket = new WebSocket("ws://localhost:12345/ws");

socket.onopen = (event) => {
    console.log("WebSocket connection opened:", event);
};

socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    displayMessage(message.Sender, message.Content);
};

socket.onclose = (event) => {
    console.log("WebSocket connection closed:", event);
};

function sendMessage() {
    const input = document.getElementById("message-input");
    const message = input.value.trim();
    if (message !== "") {
        const data = { Content: message };
        socket.send(JSON.stringify(data));
        input.value = "";
    }
}

function displayMessage(sender, content) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${content}`;
    chatBox.appendChild(messageElement);
}
