import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const TodoForm = () => {

    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState('')

    const handleChange = e => setNewTodo(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO',
            payload: {
                label: newTodo,
                id: Math.ceil(Math.random() * 100),
            }
        })
        setNewTodo('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTodo}
                onChange={handleChange}
            />
            <button type="submit">
                Add Todo
            </button>
        </form>
    )
}

export default TodoForm;