import Todo from "./Todo.js";

const $app = document.querySelector('.app')

new Todo({
    $target: $app,
    initialState: [
        {
            text: '111111111'
        },
        {
            text: '222222222'
        }
        
    ]
})