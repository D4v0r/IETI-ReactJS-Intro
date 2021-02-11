import React from "react";
import  Todo  from "./Todo";

const TodoList = ({todoList}) => (
    <ul>
        {
            todoList.map((todo, i) => <Todo key={i} {...todo}/>)
        }
    </ul>
);

export default TodoList;