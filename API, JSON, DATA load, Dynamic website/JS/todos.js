function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))
}

function displayTodos(todos) {
    // get the container
    const todoContainer = document.getElementById('todos-container');
    for (const todo of todos) {
        // console.log(todo);
        // create the child element
        const todoDiv = document.createElement('div');
        // set innerText or innerHTML
        todoDiv.innerHTML = `
            <h3>Title: ${todo.title}</h3>
            <p>User: ${todo.userId}</p>
            <p>Is completed: 
            ${todo.completed === true ? 'completed' : 'not completed'}</p>
        `;
        // appendChild
        todoContainer.appendChild(todoDiv);
    }
}

loadTodos();