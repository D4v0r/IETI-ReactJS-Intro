import React from "react";
import  { Todo }  from "./Todo";

export const TodoList = ({todoList}) => (
    <ul>
        {
        
            todoList.map(todo => <li> <Todo key={todo.toString()} {...todo}/> </li>)
        }
    </ul>
);
