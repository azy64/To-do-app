import React, { Component } from 'react';
import { IoIosAddCircle } from 'react-icons/io';

export default class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="inputTodo">
        <div>
          <input type="text" placeholder="Add todo" aria-labelledby="inputTodo" />
          <IoIosAddCircle />
        </div>

      </div>
    );
  }
}
