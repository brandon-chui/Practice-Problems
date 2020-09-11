import React from 'react';

const Todo = ({ todo, removeTodo }) => {


    return (
        <li>
            <span>{todo.label}</span>
            <button onClick={() => removeTodo(todo.id)}>X</button>
        </li>
    )
}

export default Todo;