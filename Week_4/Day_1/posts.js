const postsContainer = document.querySelector('.posts-list');

const getPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log('try');
        return data;
    } catch (err) {
        console.log(`----->  ${err.message} <------`);
        return [
            {
                userId: 1,
                id: 1,
                title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
            },
        ];
    }
    // throw Error('OOOOPPPSSS')
};

getPosts()
    .then((result) => {
        const renderData = result.map((post) => `<h2>${post.title}</h2><p>${post.body}</p>`);
        postsContainer.innerHTML = renderData.join('</br>');
    })
    .catch((err) => alert(err.message));
