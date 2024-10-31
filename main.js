
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


  const chatbox = document.getElementById('chatbox');
  const userInput = document.getElementById('userInput');
  const sendButton = document.getElementById('sendButton');
  
  // Simple responses for demonstration
  var responses = {
      "hello": ["Hi there! How can I assist you today?", "Hello! What’s on your mind?"],
      "hey": ["Hey! What would you like to know?", "Hello! How can I help you?"],
      "hi": ["Hi! Need any help?", "Hello! What can I do for you?"],
      "how are you?": ["I'm just code, but I'm functioning perfectly! How about you?", "Doing great! How are you doing?"],
      "about me": ["I know several languages, including:<ul><li>Python</li><li>C++</li><li>Java</li><li>PHP</li><li>HTML & CSS</li></ul>What about you?"],
      "bye": ["Goodbye! Have a great day!", "See you later! Take care!"],
  };
  
  function appendMessage(sender, message) {
      const messageDiv = document.createElement('div');
      messageDiv.innerHTML = `${sender}: ${message}`; // Use innerHTML to allow HTML content
      chatbox.appendChild(messageDiv);
      
      // Scroll to the bottom of the chatbox
      chatbox.scrollTop = chatbox.scrollHeight; // Ensure the latest message is visible
  }

  function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    const responseArray = responses[lowerMessage];
    if (responseArray) {
        return responseArray[Math.floor(Math.random() * responseArray.length)];
    }
    return "Sorry, I didn't understand that. Can you ask something else?";
}

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        appendMessage('You', userMessage);
        userInput.value = ''; // Clear input field

        const botResponse = getBotResponse(userMessage);
        setTimeout(() => {
            appendMessage('Bot', botResponse);
        }, 500); // Simulate response delay
    }
});

// Optional: Send message with Enter key
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});  
