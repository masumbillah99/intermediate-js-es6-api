// API --- APPLICATION PROGRAMMING INTERFACE
/**
 1. explore the API AND DO any design
 2. search for any valid word
 3. show error message for invalid word search 
 4. show the valid result 
 5. play the audio file for the word if it is available
 6. 
*/

// fetch('https://randomuser.me/api')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     });

const handleSearch = () => {
    const inputField = document.getElementById('text-field').value;
    if (inputField) {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputField}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.title === 'No Definitions Found') {
                    alert(data.message);
                } else {
                    displayResult(data);
                }
            });
    } else {
        alert("Empty input field");
    }
    document.getElementById('text-field').value = '';
};

const displayResult = (data) => {
    const parent = document.getElementById('audio-container');
    parent.innerHTML = '';
    data[0].phonetics.forEach(element => {
        const audio = document.createElement('audio');
        audio.src = element.audio;
        const btn = document.createElement('button');
        btn.innerHTML = "Play";
        btn.onclick = () => {
            audio.play();
        }
        const container = document.createElement('div');
        container.appendChild(btn);
        container.appendChild(audio);

        parent.appendChild(container);
    });
};

const loadGithubUsers = () => {
    fetch('https://api.github.com/users?per_page=10')
        .then(res => res.json())
        .then(data => {
            displayUser(data);
        })
};

const displayUser = (users) => {
    const userContainer = document.getElementById('user-container');
    // for (const user of users) {
    //     console.log(user);
    // }
    userContainer.classList.add('user-container');
    users.forEach(user => {
        console.log(user);
        fetch(user.followers_url)
            .then(res => res.json())
            .then(data => {
                const div = document.createElement('div');
                div.classList.add('user-div');
                div.innerHTML = `
                    <img class="user-img" src="${user.avatar_url}" alt="">
                    <h3 class="pt-3 text-uppercase">${user.login}</h3>
                    <h5>Followers</h5>
                `;
                userContainer.appendChild(div);
            });
    });
};