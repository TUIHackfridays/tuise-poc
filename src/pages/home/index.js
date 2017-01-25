import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetch } from '../../actions/baseActions';
import TodoList from '../../components/todoList'
import './style.scss';



const mapStateToProps = ({ todos }) => ({
  todos: todos
});

export class Home extends React.Component {

  render() {
    return (
      <div className="root">
        <h1>2Pac List</h1>
        <TodoList todos={this.props.todos}/>
      </div>
    );
  }
}

Home.propTypes = {
  todos: React.PropTypes.array.isRequired
};

export default connect(mapStateToProps, { fetch })(Home);
