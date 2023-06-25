"use strict";
let chatHolder = document.getElementById("text");

function openChat() {
  document.getElementById("chat-form").style.display = "block";
}

function closeChat() {
  document.getElementById("chat-form").style.display = "none";
}
function handleSubmit(event) {
  event.preventDefault();
  let target = event.target;
  let messageElm = document.createElement("p");
  messageElm.textContent = target.msg.value;
  chatHolder.appendChild(messageElm);
}

//Calendar Functionality
