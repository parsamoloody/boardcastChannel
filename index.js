const channel = new BroadcastChannel('message');


let [sendMessage, inputMessage, messages ] = [
    document.querySelector("#sendMessage"),
    document.querySelector("#inputMessage"),
    document.querySelector("#messages")
];

channel.onmessage = (e) => {
    messages.innerHTML = e.data
}

function sendHandler() {
    let value = inputMessage.value;
    channel.postMessage(value)
}

sendMessage.addEventListener('click', sendHandler)