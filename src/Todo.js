import React from 'react';

const Todo = ({text, priority, dueDate}) => (
    <div>
        <h2>{text}</h2>
        <p>Priority: {priority}</p>
        <p>Due Date: {dueDate.toString()}</p>
    </div>
);

export default Todo;