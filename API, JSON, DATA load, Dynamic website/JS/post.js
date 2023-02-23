function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

/**  add a element into element
 1. get the container element where you want to add the new elements.
 2. create child element
 3. set innerText or innerHTML
 4. appendChild to the parent
*/

/** 
 CRUD --- CRUD is the acronym for CREATE, READ, UPDATE and DELETE
*/

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
    for (const post of posts) {
        const postArticle = document.createElement('article');
        postArticle.classList.add('post')
        // console.log(post);
        postArticle.innerHTML = `
            <h4>User ID -${post.id}</h4>
            <h3>Post Title: ${post.title}</h3>
            <p>Post Description: ${post.body}</p>
        `;
        postsContainer.appendChild(postArticle);
    }
};

loadPosts();