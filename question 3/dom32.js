"use strict"
// Arrays for names and scores
let names = ["Ben", "Joel", "Judy", "Anne"];
let scores = [88, 98, 77, 89];

// Add score function
function addScore() {
    const name = document.getElementById('name').value;
    const score = parseInt(document.getElementById('score').value);

    // Validate input
    if (name.trim() === '' || isNaN(score) || score < 0 || score > 100) {
        alert("You must enter a name and a valid score between 0 and 100.");
        return;
    }

    // Add name and score to arrays
    names.push(name);
    scores.push(score);

    // Clear fields and refocus on name input
    document.getElementById('name').value = '';
    document.getElementById('score').value = '';
    document.getElementById('name').focus();
}

// Display results function (average and highest score)
function displayResults() {
    const resultsDiv = document.getElementById('results');

    // Calculate average score
    const totalScore = scores.reduce((a, b) => a + b, 0);
    const averageScore = totalScore / scores.length;

    // Find highest score
    const maxScore = Math.max(...scores);
    const maxIndex = scores.indexOf(maxScore);
    const highScorer = names[maxIndex];

    // Display results
    resultsDiv.innerHTML = `<h2>Results</h2>
                            <p>Average score = ${averageScore.toFixed(2)}</p>
                            <p>High score = ${highScorer} with a score of ${maxScore}</p>`;
}

// Display scores in a table
function displayScores() {
    const tableBody = document.querySelector('#scores_table tbody');

    // Clear previous rows
    tableBody.innerHTML = '';

    // Add rows for each name and score
    names.forEach((name, index) => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const scoreCell = document.createElement('td');

        nameCell.textContent = name;
        scoreCell.textContent = scores[index];

        row.appendChild(nameCell);
        row.appendChild(scoreCell);
        tableBody.appendChild(row);
    });
}

// Attach event listeners
document.getElementById('addBtn').addEventListener('click', addScore);
document.getElementById('displayResultsBtn').addEventListener('click', displayResults);
document.getElementById('displayScoresBtn').addEventListener('click', displayScores);

// Set focus to name input on load
window.onload = function() {
    document.getElementById('name').focus();
};