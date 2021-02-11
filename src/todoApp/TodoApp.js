import React from "react";
import { TodoList } from "./TodoList";

export class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { todos: [], text: '', priority: undefined, dueDate: undefined};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <br/>
            <input
              id="text"
              name="text"
              placeholder="task"
              type="text"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <input
              id="priority"
              name="priority"
              placeholder="Priority"
              type="number"
              onChange={this.handleChange}
              value={this.state.priority}
            />
            <input
              id="dueDate"
              name="dueDate"
              placeholder="Due Date"
              type="date"
              onChange={this.handleChange}
              value={this.state.dueDate}
            />

            <button>
              Add #{this.state.todos.length + 1}
            </button>
          </form>
          <div>
              {this.state.todos.length && <TodoList todoList={this.state.todos}/>} 
          </div>
        </div>
      );
    }
  
    handleChange({target}) {
      this.setState({ [target.name]: target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      const {text, priority, dueDate} = this.state;
      if (!text.length || priority === null || dueDate === null) {
        return;
      }
      const newTodo = {
        text,
        priority,
        dueDate
      };

      this.setState(({todos}) => ({
        todos: [...todos, newTodo],
        text: '',
        priority: undefined,
        dueDate: undefined
      }));
    }
  }