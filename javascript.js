/**
 * Defines Global Variables
 */
const mainFragment = document.createDocumentFragment();
// creates a contaier
const container = document.createElement('div');
// creates a box for inputting a new task
const newTask = document.createElement('div');
// creates the input element for the new task
const inputTask = document.createElement('input');
// creates a button for inputting a new task 
const button = document.createElement('button');
// creates a list for the tasks 
const tasks = document.createElement('div');

/**
 * End Global Variables
 */
// TODO: Build the HTML structure ---------------------------

// add text: "Add Task" to <button>'s content.
button.innerHTML = "Add Task";
// adds class to the container to add some styles.
container.classList.add('container');
// adds type and placeholder attributes to the input element.
inputTask.setAttribute("type", "text"); 
inputTask.setAttribute("placeholder", "Task to be done in our CMS track :)"); 
// adds id attribute to the input button, the list of the tasks and to the box of inputting a new task.
newTask.setAttribute("id", "newtask"); 
tasks.setAttribute("id", "tasks"); 

//Append elements to the HTML hierarchy
// Appends input tag <input>, button tag <button> to newTask div <div id="newtask">
newTask.appendChild(inputTask);
newTask.appendChild(button);
// Appends newTask container <div id="newtask"> & tasks <div id="tasks"> to the container div <div class="container">
container.appendChild(newTask);
container.appendChild(tasks);
// Appends the container div <div class="container"> to the body
document.body.appendChild(container);

/**
 * Begins Main Function
 */

function tasksFn() {
    if(inputTask.value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${inputTask.value}
                </span>
                <button class="delete">
                    delete
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}

/**
 * End Main Function
 * Begins Event
 */
// TODO: run function (tasksFn) when the eventTarget (button) listens for an event of type 'click'.
button.addEventListener('click',tasksFn);