function addTaskHTML ({title, done}) {
    const doneTask = done ? `checked` : ``;
    formTasks.innerHTML += 
    `
        <label for="">
            <p>${title}</p>
            <input 
                type="checkbox" 
                ${doneTask}
            />
        </label>
    `;
}

const tasks = [
    {
        title: 'Limpiar',
        done: false,
    },
    {
        title: 'Estudiar',
        done: true,
    },
    {
        title: 'Cocinar',
        done: false,
    },
    {
        title: 'Bañarse',
        done: true,
    },
    {
        title: 'Comprar',
        done: true,
    },
];

const formTasks = document.getElementById('tasks-form');

tasks.forEach(addTaskHTML);
