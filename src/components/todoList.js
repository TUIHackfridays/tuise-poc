import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
// import { addTodo, deleteTodo, editTodo, completeTodo } from '../actions/todoActions';
import { addTodo } from '../actions/todoActions';
import {browserHistory} from 'react-router';
import TodoItem from './todoItem';
import Footer from './footer';


class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
     }


    // Handles the value changes on the input element
    handleChange(e) {
        this.setState({text: e.target.value});
    }


    // Handles the addition of todo items
    handleSubmit(e) {

      // Trim removes whitespaces from both sides of input text
      const text = e.target.value.trim()

      // Add Todo item with Return/Enter key
      if (e.which === 13) {
        this.props.addTodo(text)

        // Empties the input text after todo submit
        this.setState({ text: '' })
      }
    }

    openDefaultTodoList() {
      browserHistory.push('/settings')
    }

    render() {
        return (
            <div>
                <input className="new-todo" 
                       value={this.state.text}
                       placeholder="What do you need 2pack?" 
                       type="text" 
                       autoFocus="true"
                       onChange={this.handleChange.bind(this)} 
                       onKeyDown={this.handleSubmit.bind(this)}/>
                <ul className="todo-list">
                    {this.props.todos.map(todo => (
                      <TodoItem key={todo.id} todo={todo} />
                    ))}
                    <Footer />
                </ul>
            </div>

        );
    }
}
  
export default connect(null, {addTodo})(TodoList);