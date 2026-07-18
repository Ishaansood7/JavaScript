// 1. STATE VARIABLES
let tasks = [];
let editingTaskId = null; // Tracks if we are adding a new task or editing an existing one

// 2. DOM ELEMENTS
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const searchInput = document.getElementById('searchInput');

const listTodo = document.getElementById('list-todo');
const listProgress = document.getElementById('list-progress');
const listDone = document.getElementById('list-done');

const countTodo = document.getElementById('count-todo');
const countProgress = document.getElementById('count-progress');
const countDone = document.getElementById('count-done');

// 3. CORE RENDER FUNCTION
function renderBoard() {
    // Clear the existing DOM lists
    listTodo.innerHTML = '';
    listProgress.innerHTML = '';
    listDone.innerHTML = '';

    // Get the current search term and make it case-insensitive
    const searchTerm = searchInput.value.toLowerCase().trim();

    // Reset counters
    let totals = { todo: 0, progress: 0, done: 0 };

    // Loop through tasks array
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        // Search Filter: Skip this task if it doesn't match the search term
        if (!task.title.toLowerCase().includes(searchTerm)) {
            continue;
        }

        // Increment the respective counter
        totals[task.status]++;

        // Create the task card element
        const card = document.createElement('div');
        card.className = 'task-card';

        // Determine if movement buttons should be disabled based on status
        const prevDisabled = task.status === 'todo' ? 'disabled' : '';
        const nextDisabled = task.status === 'done' ? 'disabled' : '';

        // Build the card's inner HTML using Template Literals
        card.innerHTML = `
      <div class="task-title">${task.title}</div>
      <div class="task-actions">
        <div class="btn-group">
          <button class="btn-small" onclick="editTask(${task.id})">Edit</button>
          <button class="btn-small btn-delete" onclick="deleteTask(${task.id})">Delete</button>
        </div>
        <div class="btn-group">
          <button class="btn-small" onclick="moveTask(${task.id}, 'prev')" ${prevDisabled}>⬅ Prev</button>
          <button class="btn-small" onclick="moveTask(${task.id}, 'next')" ${nextDisabled}>Next ➡</button>
        </div>
      </div>
    `;

        // Append to the correct column
        if (task.status === 'todo') {
            listTodo.appendChild(card);
        } else if (task.status === 'progress') {
            listProgress.appendChild(card);
        } else if (task.status === 'done') {
            listDone.appendChild(card);
        }
    }

    // Update DOM counts (Stretch Goal)
    countTodo.textContent = totals.todo;
    countProgress.textContent = totals.progress;
    countDone.textContent = totals.done;
}

// 4. ADD / EDIT LOGIC
addBtn.addEventListener('click', function () {
    const title = taskInput.value.trim();

    // Validation: Cannot add empty task
    if (title === "") return;

    if (editingTaskId !== null) {
        // We are in EDIT mode
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === editingTaskId) {
                tasks[i].title = title; // Update the title, preserve the status
                break;
            }
        }
        // Reset edit state
        editingTaskId = null;
        addBtn.textContent = 'Add Task';
    } else {
        // We are in ADD mode
        const newTask = {
            id: Date.now(), // Generate a simple unique ID
            title: title,
            status: 'todo'
        };
        tasks.push(newTask);
    }

    // Clear input and re-render the board
    taskInput.value = '';
    renderBoard();
});

// 5. HELPER FUNCTIONS (Triggered by inline onclick events in the HTML string)
function editTask(id) {
    // Find task
    let taskToEdit = null;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            taskToEdit = tasks[i];
            break;
        }
    }

    if (taskToEdit) {
        // Fill the input with current text and switch button mode
        taskInput.value = taskToEdit.title;
        editingTaskId = id;
        addBtn.textContent = 'Save Changes';
    }
}

function deleteTask(id) {
    // Stretch Goal: Show confirmation dialog
    if (confirm("Are you sure you want to delete this task?")) {
        const updatedTasks = [];
        // Rebuild array without the deleted ID
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id !== id) {
                updatedTasks.push(tasks[i]);
            }
        }
        tasks = updatedTasks;
        renderBoard();
    }
}

function moveTask(id, direction) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            const currentStatus = tasks[i].status;

            // Handle 'Next' movement
            if (direction === 'next') {
                if (currentStatus === 'todo') tasks[i].status = 'progress';
                else if (currentStatus === 'progress') tasks[i].status = 'done';
            }
            // Handle 'Prev' movement
            else if (direction === 'prev') {
                if (currentStatus === 'done') tasks[i].status = 'progress';
                else if (currentStatus === 'progress') tasks[i].status = 'todo';
            }
            break;
        }
    }
    renderBoard();
}

// 6. SEARCH EVENT LISTENER
searchInput.addEventListener('input', function () {
    // Call renderBoard every time the user types. 
    // It handles the filtering logic automatically.
    renderBoard();
});

// 7. INITIAL RENDER
renderBoard();