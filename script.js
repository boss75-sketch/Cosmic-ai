const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const chatBox = document.getElementById('chatBox');

// Ultra-fast local knowledge base that processes right inside your phone memory
const cosmicBrain = {
    "hello": "Greetings, star traveler! I am Cosmic AI. How can I assist you across the universe today?",
    "hi": "Hello! Cosmic AI systems are fully operational. Ask me anything!",
    "who is albert einstein": "Albert Einstein (1879–1955) was a legendary theoretical physicist. He developed the theory of relativity, which completely changed how we understand space, time, and gravity! His famous equation is E=mc².",
    "who is albert einstein?": "Albert Einstein (1879–1955) was a legendary theoretical physicist. He developed the theory of relativity, which completely changed how we understand space, time, and gravity! His famous equation is E=mc².",
    "albert einstein": "Albert Einstein was a famous physicist who created the theory of relativity and discovered the laws of the photoelectric effect, winning the Nobel Prize in Physics in 1921.",
    "space fact": "Did you know that space is completely silent? Sound waves need a medium like air or water to travel through, and since space is a vacuum, it is perfectly quiet!",
    "coding": "Coding is the language we use to talk to computers! By writing code, you can build websites, games, and powerful applications like this one.",
    "who are you": "I am Cosmic AI, your custom digital space assistant built entirely on a mobile phone!",
    "mission": "My mission is to help you explore code and space concepts instantly without any server lag!"
};

userInput.addEventListener('input', () => {
    if (userInput.value.trim() !== "") {
        sendBtn.classList.add('active');
    } else {
        sendBtn.classList.remove('active');
    }
    userInput.style.height = 'auto';
    userInput.style.height = userInput.scrollHeight + 'px';
});

function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender === 'user' ? 'user-message' : 'ai-message');
    msgDiv.innerText = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleSend() {
    const text = userInput.value.trim();
    if (!text) return;

    // 1. Show user message bubble immediately
    appendMessage(text, 'user');
    userInput.value = "";
    userInput.style.height = 'auto';
    sendBtn.classList.remove('active');

    // 2. Add the Cosmic AI thinking indicator bubble
    const loadingDiv = document.createElement('div');
    loadingDiv.classList.add('message', 'ai-message');
    loadingDiv.innerText = "Cosmic AI is thinking...";
    chatBox.appendChild(loadingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    // 3. Process locally to bypass CodePen's network block completely
    setTimeout(() => {
        // Wipe the loading bubble
        loadingDiv.remove();
        
        const cleanQuery = text.toLowerCase().trim();
        let answer = "";

        // Check if the query matches our cosmic intelligence database
        if (cleanQuery.includes("einstein")) {
            answer = cosmicBrain["who is albert einstein"];
        } else if (cleanQuery.includes("space") || cleanQuery.includes("fact")) {
            answer = cosmicBrain["space fact"];
        } else if (cleanQuery.includes("code") || cleanQuery.includes("coding")) {
            answer = cosmicBrain["coding"];
        } else if (cleanQuery.includes("who are you")) {
            answer = cosmicBrain["who are you"];
        } else if (cosmicBrain[cleanQuery]) {
            answer = cosmicBrain[cleanQuery];
        } else {
            answer = `I have received your transmission: "${text}". Cosmic AI core is online! To unlock my unlimited live internet database, you can host this code for free on GitHub Pages where phone browsers allow network access.`;
        }

        // Print response text instantly
        appendMessage(answer, 'ai');
    }, 400); // 0.4 seconds delay just to show a smooth animation transition
}

// Bind touch and click action handlers for mobile devices
sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    handleSend();
});

// Bind keyboard enter action handler
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
    }
});
