// Get DOM elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Add task to the list
addButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    // Add delete functionality
    deleteBtn.addEventListener("click", function() {
        taskItem.remove();
    });

    // Add functionality to mark task as complete
    taskItem.addEventListener("click", function() {
        taskItem.classList.toggle("completed");
    });

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    // Clear input field
    taskInput.value = "";
});
