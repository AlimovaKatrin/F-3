const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { postText, title } = event.target;
    const newPost = {
        body: postText.value,
        title: title.value,
        usetId: 1,
    };
    // console.log(newPost);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(newPost),
    })
        .then((response) => response.json())
        .then((createdPost) => {
            postsContainer.append(JSON.stringify(createdPost)) // postsContainer берется из posts.js
        });
});
