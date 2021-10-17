import React from "react";

function todoItem({todo, toggleTodo}){

    function handleTodoClick(){
        toggleTodo(todo.id)
    }

    return(
        <li> 
        <input type="checkbox"  checked={todo.complete}
        onChange={handleTodoClick}/>
        {todo.name}
        </li>
    )
}

export default todoItem;