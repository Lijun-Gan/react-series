import React from 'react';
import TodoItem from './todoItem'

function TodoList({todos, toggleTodo}) {

    return(
        <div>
            <ul>
                {todos.map( todo =>{
                    return <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                })}
            </ul>
         
        </div>
    )
}

export default TodoList;
