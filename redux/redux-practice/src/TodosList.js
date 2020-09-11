import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo';

const TodosList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch()

    const removeTodo = (id) => dispatch({
        type: "REMOVE_TODO",
        payload: id,
    });

    return (
        <div>
            {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
                )
            )}
        </div>
    )

}

export default TodosList;