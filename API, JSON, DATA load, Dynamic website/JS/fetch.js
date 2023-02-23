/** 
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())  // .json is not similar but close to JSON.parse
    .then(json => console.log(json))
*/

const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json))

function loadData() {
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
}

// LOAD USERS
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

function displayUsers(data) {
    console.log(data);
}

// LOAD USERS-2
function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers2(data))
}

function displayUsers2(users) {
    // console.log(users);
    const ul = document.getElementById('users-list');
    for (const user of users) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}

// ----------------

function deletePost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
};

function patchPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
};

function createPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}