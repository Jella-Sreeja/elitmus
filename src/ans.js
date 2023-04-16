
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "Lalit Modi";

    // Get user input
    const userInput = document.getElementById("answerInput").value;

    // Check if user input matches the correct answer
    if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
      document.getElementById("result").textContent = "Correct answer!";
    } else {
      document.getElementById("result").textContent = "Incorrect answer. Refresh to Try Again!";
    }
}