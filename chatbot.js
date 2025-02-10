document.addEventListener("DOMContentLoaded", function () {
    const chatWindow = document.getElementById("chatWindow");
    const chatContent = document.getElementById("chatContent");

    function toggleChat() {
        chatWindow.classList.toggle("open");
        if (chatWindow.classList.contains("open")) {
            loadQuestions();
        }
    }

    function loadQuestions() {
        chatContent.innerHTML = `
            <div class="message bot-message">Hey there! I'm <strong>Cruisy</strong>. How can I help? 😊</div>
            <div class="options">
                <button onclick="sendResponse(1)">Why should I use Career Cruise? 🤔</button>
                <button onclick="sendResponse(2)">Is all the given data relevant? ✅</button>
                <button onclick="sendResponse(3)">What features does Career Cruise offer? 🚀</button>
            </div>
        `;
    }

    window.sendResponse = function (questionNumber) {
        let response = "";

        if (questionNumber === 1) {
            response = "Career Cruise is your go-to destination for engineering research! We do the hard work of gathering optimal options for you. It's built by passionate CSE (DS) students, ensuring well-researched and reliable information.";
        } else if (questionNumber === 2) {
            response = "Yes, all data is relevant to a great extent. However, we still recommend cross-checking critical information for accuracy.";
        } else if (questionNumber === 3) {
            response = "Career Cruise provides details on exams, top colleges, scholarships, and job opportunities—everything you need to navigate your engineering career! 🌟";
        }

        chatContent.innerHTML += `<div class="message user-message">${event.target.innerText}</div>`;
        setTimeout(() => {
            chatContent.innerHTML += `<div class="message bot-message">${response}</div>`;
            chatContent.scrollTop = chatContent.scrollHeight; 
        }, 500);
    };

    window.toggleChat = toggleChat;
});
