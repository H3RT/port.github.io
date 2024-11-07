
document.addEventListener("DOMContentLoaded", () => {
    const portfolio = document.querySelector('.portfolio');

    portfolio.style.display = 'none';
    
    setTimeout(() => {
        portfolio.style.display = 'block'; 
        document.querySelector('.landing-page').style.display = 'none'; 
    }, 5000); 
});

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("button").addEventListener("click", function () {

      var a = document.createElement("a");

      a.href = "./CV.pdf";

      a.download = "CV.pdf";

      a.click();

    });

  });

//declaring my const variables
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-btn');
const chatContainer = document.querySelector('.chat-container');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    const messageText = userInput.value;
    if (messageText.trim() === "") return;

    // Display user's message
    appendMessage(messageText, 'user');
    userInput.value = '';

    // Simulate bot response after a short delay
    setTimeout(() => {
        const botResponse = getBotResponse(messageText);
        appendMessage(botResponse, 'bot');
    }, 1000);
}

function appendMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
}

function getBotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
        return "Hello! How can I help you today?";
    } else if (lowerCaseMessage.includes("hey")) {
        return "Hey there! How can I help you?"
    }  else if (lowerCaseMessage.includes("hi")) {
        return "Hi there! How can I help you?"
    } else if (lowerCaseMessage.includes("about me")) {
        return "I am an enthusiastic and detail-oriented Junior Software Developer with a strong foundation in software engineering principles and hands-on experience in various programming languages including Python, Java, HTML, and CSS. I recently graduated with a Diploma in Computer Systems Engineering, equipped with practical knowledge in web development, database management, and software testing.";
    } else if (lowerCaseMessage.includes("experience")) {
        return "I worked at InvesthoodIT from January 2022 to December 2022.";
    } else if (lowerCaseMessage.includes("contact")) {
        return "You can contact me via LinkedIn, Gmail, or phone. Check my portfolio for the links!";
    } else if (lowerCaseMessage.includes("skills")) {
        return "I have skills in Java, Python, C++, SQL, HTML, and more.";
    } else if (lowerCaseMessage.includes("projects")) {
        return "I have developed a 1 Player Tic-Tac-Toe game and a Hangman game in Java.";
    } else {
        return "Sorry, I didn't understand that. You can ask about 'about me', 'experience', 'skills', or 'contact'.";
    }
}
