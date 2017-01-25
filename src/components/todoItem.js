import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { addTodo, deleteTodo, completeTodo } from '../actions/todoActions';
import { editSetting } from '../actions/settingsActions';
import Switch from 'react-toggle-switch'

 class TodoItem extends Component {

    handleDelete = (id) => {
      this.props.deleteTodo(id)
    }

    handleComplete = (id) => {
      this.props.completeTodo(id)
    }

    toggleSwitch = (setting) => {
    	if(!setting.visible) {
    		this.props.addTodo(setting.text)
    	} else {
    		this.props.deleteTodo(setting.id)
    	}
    	this.props.editSetting(setting)
    }

  render() {
   	
   	let todo = this.props.todo;

    return (
	    <li>
	         <div className="view">
	         {!this.props.settings &&
	          <input className="toggle"
	                 type="checkbox"
	                 checked={todo.completed}
	                 onChange={this.handleComplete.bind(this, todo.id)} />
	          }
	          <label>{todo.text}</label>
	          {!this.props.settings ? (
	          		<button className="destroy"
	                  	onClick={this.handleDelete.bind(this, todo.id)} />
	            ) : (
			  		<Switch on={todo.visible} onClick={this.toggleSwitch.bind(this, todo)}/>
	            )
			  }
	        </div>
	    </li>
    )
  }
}

export default connect(null, {addTodo, editSetting, deleteTodo, completeTodo})(TodoItem);
