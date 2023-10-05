document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            
            const taskTextElement = document.createElement("span");
            taskTextElement.textContent = taskText;

            const deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            deleteButton.className = "delete";

            deleteButton.addEventListener("click", function () {
                taskList.removeChild(li);
            });

            li.appendChild(taskTextElement);
            li.appendChild(deleteButton);
            
            taskList.appendChild(li);

            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTaskButton.click();
        }
    });
});
