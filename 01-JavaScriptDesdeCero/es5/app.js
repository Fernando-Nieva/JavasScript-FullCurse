class Task {
    constructor(name) {
        this.name = name;
        this.isComplete = false;
    }

    complete() {
        this.isComplete = !this.isComplete;
    }
}

class TaskList {
    constructor(name) {
        this.name = name;
        this.task = [];
    }

    addTask(task, element) {
        this.task.push(task);
        this.renderTasks(element);
    }

    removeTask(id, element) {
        this.task.splice(id, 1);
        this.renderTasks(element);
    }

    renderTasks(element) {
        let tasksHTML = this.task.map((task, index) => /* html */ `
            <li class="task ${task.isComplete ? 'complete': ''}">
                <input type="checkbox" class="task__complete-button" ${task.isComplete ? 'checked' : ''}>
                <span class="task__name ${task.isComplete ? 'completed' : ''}">${task.name}</span>
                <button class="task__remove-button" data-id="${index}">X</button>
            </li>
        `).join('');

        element.innerHTML = tasksHTML;
    }
}

// ================= DOM =================
const addTaskElement = document.getElementById('add-task');
const taskContainerElement = document.getElementById('tasks-container');
const inbox = new TaskList('inbox'); 

// añadir tarea desde el input
function addDOOMTask(e, list = inbox) {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
        let task = new Task(e.target.value.trim());
        list.addTask(task, taskContainerElement);
        e.target.value = ''; // limpiar input
        console.table(list.task); // mostrar estado en consola
    }
}
addTaskElement.addEventListener('keyup', addDOOMTask);

// obtener índice de la tarea en la lista
function getTaskIndex(e) {
    let taskItem = e.target.closest('li');
    let taskItems = [...taskContainerElement.querySelectorAll('li')];
    return taskItems.indexOf(taskItem);
}

// eliminar tarea
function removeDOMtask(e, list = inbox) {
    if (e.target.classList.contains('task__remove-button')) {
        list.removeTask(getTaskIndex(e), taskContainerElement);
        console.table(list.task); // ver estado actualizado
    }
}

// completar tarea
function completeDOMtask(e, list = inbox) {
    if (e.target.classList.contains('task__complete-button')) {
        let index = getTaskIndex(e);
        list.task[index].complete();

        // 👇 Reordenar: las no completadas (false) arriba, completadas (true) abajo
        list.task.sort((a, b) => Number(a.isComplete) - Number(b.isComplete));

        list.renderTasks(taskContainerElement); // refrescar estilos
        console.table(list.task); // ver estado actualizado
    }
}


// delegación de eventos en el contenedor de tareas
taskContainerElement.addEventListener('click', (e) => {
    removeDOMtask(e);
    completeDOMtask(e);
});
