let isLoggedIn = false;

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform AJAX request to the backend for authentication
    // If successful, set isLoggedIn to true and show the quiz container
    // If unsuccessful, show an error message
}

function loadQuiz() {
    // Load quiz questions and options from the backend using AJAX
    // Display questions and options in the quiz-container
    // Start the timer
}

function submitAnswers() {
    // Collect selected answers from the user
    // Send selected answers to the backend for evaluation
    // Display results to the user
    // Stop the timer
}

function logout() {
    // Perform logout action and redirect to the login page
}
