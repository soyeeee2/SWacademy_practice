const data = [
    {
        text: 'JS 공부'
    },
    {
        text: 'JS 복습'
    }
]

const $app = document.querySelector('.app')

new TodoForm({
    $target: $app,
    onSubmit : (text) => {
        const nextState = [...todoList.state, {text}]
        todoList.setState(nextState)
    
    }
})

const todoList = new TodoList({
    $target: $app,
    initialState: data
})

