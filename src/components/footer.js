import React from 'react'
import {browserHistory} from 'react-router';

export default class Footer extends React.Component {

  openDefaultTodoList() {
      browserHistory.push('/settings')
  }

  render() {
    return (
      <li className="todo-footer">
        <div className="add-button" onClick={this.openDefaultTodoList.bind(this)}>+</div>
      </li>
    )
  }
}