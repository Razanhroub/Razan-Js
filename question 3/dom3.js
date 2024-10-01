"use strict"
// Get references to the input field, button, and list
const itemInput = document.getElementById('item');
const addButton = document.getElementById('addBtn');
const shoppingList = document.getElementById('shoppingList');

// Function to add a new item to the list
addButton.addEventListener('click', addItem);

function addItem() {
    const itemText = itemInput.value;

    // Check if the input is not empty
    if (itemText.trim() !== "") {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = itemText;

        // Create a delete button for each item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        // Event listener for delete button to remove item
        deleteButton.addEventListener('click', () => {
            shoppingList.removeChild(listItem);
        });

        // Add the delete button to the list item
        listItem.appendChild(deleteButton);

        // Add the list item to the shopping list
        shoppingList.appendChild(listItem);

        // Clear the input field and focus again
        itemInput.value = '';
        itemInput.focus();
    } else {
        alert("Please enter an item.");
    }
}

// Set the cursor focus to the input field when the page loads
window.onload = function() {
    itemInput.focus();
};