










const cursorSmallDot = document.getElementById("cursor-small-dot");
const cursorBigDot = document.getElementById("cursor-big-dot");

let smallDotPosition = { x: 0, y: 0 };
let bigDotPosition = { x: 0, y: 0 };

const translate3d = (x, y) => `translate3d(${x}px, ${y}px, 0)`;

const handleMouseMove = (e) => {
  smallDotPosition.x = e.clientX;
  smallDotPosition.y = e.clientY;

  bigDotPosition.x = e.clientX - 4;
  bigDotPosition.y = e.clientY - 8;

  cursorSmallDot.style.transform = translate3d(
    smallDotPosition.x,
    smallDotPosition.y
  );
  cursorBigDot.style.transform = translate3d(
    bigDotPosition.x,
    bigDotPosition.y
  );
};

const mouseMoveHandler = (e) => {
  window.requestAnimationFrame(() => handleMouseMove(e));
};

window.addEventListener("mousemove", mouseMoveHandler);












document.querySelector("#task-form").addEventListener("submit", (event) => {
    event.preventDefault(); 

    let pname = document.querySelector('#pname').value;
    let pmail = document.querySelector('#pmail').value;
    let prole = document.querySelector('#prole').value;
    let page = document.querySelector('#page').value;
    let ptask = document.querySelector('#ptask').value;

    let newTask = {
        pname: pname,
        pmail: pmail,
        prole: prole,
        page: page,
        ptask: ptask,
    };

    let tasks = JSON.parse(localStorage.getItem("task")) || [];
    
    if (editIndex !== null) {
        tasks[editIndex] = newTask; 
        editIndex = null; 
    } else {
        tasks.push(newTask);
    }

    localStorage.setItem("task", JSON.stringify(tasks)); 

    document.querySelector("#task-form").reset(); 
    loadTask();
});

let editIndex = null;

function loadTask(filteredTasks = null) {
    let allTask = JSON.parse(localStorage.getItem("task")) || [];

    let tasksToDisplay = filteredTasks || allTask;

    let result = "";
    tasksToDisplay.forEach((record, index) => {
        let row = `
            <div class="task-card col-3">
                <div class="card-content">
                    <h2>${record.pname}</h2>
                    <p>${record.pmail}</p>
                    <p>${record.prole}</p>
                    <p>${record.page}</p>
                    <p>${record.ptask}</p>
                    <button onclick="deleteTask(${index})">Delete</button>
                    <button onclick="editTask(${index})">Edit Task</button>
                </div>
            </div>
        `;
        result += row;
    });

    document.querySelector("#task-list").innerHTML = result;
}

function deleteTask(index) {
    let allTask = JSON.parse(localStorage.getItem("task"));
    allTask.splice(index, 1); 
    localStorage.setItem("task", JSON.stringify(allTask)); 
    loadTask(); 
}

function editTask(index) {
    let allTask = JSON.parse(localStorage.getItem("task"));
    let taskToEdit = allTask[index];

    document.querySelector('#pname').value = taskToEdit.pname;
    document.querySelector('#pmail').value = taskToEdit.pmail;
    document.querySelector('#prole').value = taskToEdit.prole;
    document.querySelector('#page').value = taskToEdit.page;
    document.querySelector('#ptask').value = taskToEdit.ptask;

    editIndex = index; 
}

function filterTasks() {
    let searchPerson = document.querySelector("#role-search").value.toLowerCase();
    let allTask = JSON.parse(localStorage.getItem("task")) || [];

    let filteredTasks = allTask.filter(task => task.prole.toLowerCase().includes(searchPerson));

    loadTask(filteredTasks); 
}


loadTask();










