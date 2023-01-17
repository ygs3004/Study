import fetch from 'node-fetch'; // CommonJS 에서 require('node-fetch')

async function fetchTodo(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    const response = await fetch(url);
    const todo = await response.json();
    console.log(todo);
}

fetchTodo(); // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
