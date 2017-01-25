import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetch } from '../../actions/baseActions';
import { bindActionCreators } from 'redux'
import TodoItem from '../../components/todoItem'
import {browserHistory} from 'react-router';
import './style.scss';


// Needed to have access to settings from initState
const mapStateToProps = ({ settings }) => ({
  settings: settings
});

let isSettings = true;

export class Settings extends React.Component {

  goBack() {
    browserHistory.goBack()
  }

  render() {
    return (
      <div className="root">
        <h1>2Pac List</h1>
        <ul className="todo-list">
            <li className="todo-header">
              <div className="back-button" onClick={this.goBack.bind(this)}>&#060;</div>
            </li>
            {this.props.settings.map((todo , index) => (
              <TodoItem key={index} todo={todo} settings={isSettings}/>
            ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, { fetch })(Settings);
