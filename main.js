
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


// const chatbox = document.getElementById('chatbox');
// const userInput = document.getElementById('userInput');
// const sendButton = document.getElementById('sendButton');

// // Simple responses for demonstration
// var responses = {
//     "hello": ["Hi there! How can I assist you today?", "Hello! What’s on your mind?"],
//     "hey": ["Hey! What would you like to know?", "Hello! How can I help you?"],
//     "hi": ["Hi! Need any help?", "Hello! What can I do for you?"],
//     "how are you?": ["I'm just code, but I'm functioning perfectly! How about you?", "Doing great! How are you doing?"],
//     "about me": [
//         "I am an enthusiastic and detail-oriented Junior Software Developer with a strong foundation in software engineering principles and hands-on experience in various programming languages including Python, Java, HTML, and CSS among others. I recently graduated with a Diploma in Computer Systems Engineering, equipped with practical knowledge in web development, database management, and software testing. I'm passionate about learning new technologies and contributing to innovative projects."
//     ],
//     "projects": [
//         "1 Player Tic-Tac-Toe: A simple console-based Tic-Tac-Toe game in Java where you compete against the computer.\nHangman Game: A simple console-based Hangman game implemented in Java, allowing one or two players to play."
//     ],
//     "skills": [
//         "My tech stack includes Java, Python, C++, SQL, HTML, CSS, and PHP."
//     ],
//     "education": [
//         "I studied at Tshwane University of Technology, earning a National Diploma in Computer Systems Engineering from 2018 to 2021."
//     ],
//     "bye": ["Goodbye! Have a great day!", "See you later! Take care!"],
// };

// function appendMessage(sender, message) {
//     const messageDiv = document.createElement('div');
//     messageDiv.innerHTML = `${sender}: ${message}`; // Use innerHTML to allow HTML content
//     chatbox.appendChild(messageDiv);
    
//     // Scroll to the bottom of the chatbox
//     chatbox.scrollTop = chatbox.scrollHeight; // Ensure the latest message is visible
// }

// function getBotResponse(userMessage) {
//     const lowerMessage = userMessage.toLowerCase();
//     const responseArray = responses[lowerMessage];
//     if (responseArray) {
//         return responseArray[Math.floor(Math.random() * responseArray.length)];
//     }
//     return "Sorry, I didn't understand that. Can you ask something else?";
// }

// sendButton.addEventListener('click', () => {
//     const userMessage = userInput.value.trim();
//     if (userMessage) {
//         appendMessage('You', userMessage);
//         userInput.value = ''; // Clear input field

//         const botResponse = getBotResponse(userMessage);
//         setTimeout(() => {
//             appendMessage('Bot', botResponse);
//         }, 500); // Simulate response delay
//     }
// });

// // Optional: Send message with Enter key
// userInput.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         sendButton.click();
//     }
// });  

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
