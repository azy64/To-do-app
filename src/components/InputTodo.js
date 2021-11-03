import React, { Component } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import PropTypes from 'prop-types';
import '../css/inputTodo.css';

export default class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  createTask = (e) => {
    // console.log(e.code);
    if (e.code === 'Enter') {
      const { value } = e.target;
      if (value) {
        const { handlerCreation } = this.props;
        console.log('value', value);
        handlerCreation(value);
      }
      e.target.value = '';
    }
  }

  render() {
    return (
      <div id="inputTodo">
        <div className="inputTodo">
          <input type="text" placeholder="Add todo..." aria-labelledby="inputTodo" onKeyDown={this.createTask} />
          <button type="button" className="add">
            <IoIosAddCircle className="icon" size="30px" color="darkblue" />
          </button>
        </div>

      </div>
    );
  }
}

InputTodo.propTypes = {
  handlerCreation: PropTypes.func.isRequired,
};
