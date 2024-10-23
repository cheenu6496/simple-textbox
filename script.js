// Get elements
const messageInput = document.getElementById("message");
const charCounter = document.getElementById("charCounter");
const warningMessage = document.getElementById("warningMessage");

// Set maximum character limit
const maxChars = 200;

// Add event listener for real-time character count update
messageInput.addEventListener("input", () => {
    const currentLength = messageInput.value.length;

    // Update character count display
    charCounter.textContent = `${currentLength}/${maxChars} characters`;

    // Check if user exceeds the limit
    if (currentLength >= maxChars) {
        warningMessage.textContent = "You have reached the character limit!";
    } else {
        warningMessage.textContent = "";
    }
});

// Prevent further typing when character limit is reached
messageInput.addEventListener("keydown", (e) => {
    if (messageInput.value.length >= maxChars && e.key !== "Backspace" && e.key !== "Delete") {
        e.preventDefault();
    }
});
