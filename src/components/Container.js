import React, { Component } from 'react';
import Header from './Header';
import InputTodo from './InputTodo';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [1, 2, 'fcfcfcf'],
    };
  }

  renderTasks = () => {
    const tabs = [];
    const { tasks } = this.state;

    tasks.map((value) => {
      // console.log(index);
      tabs.push(<span key={value}>{value}</span>);
      return value;
    });
    return tabs;
  }

  render() {
    return (
      <div>
        <Header />
        <InputTodo />
        <div>
          {
               this.renderTasks()
            }
        </div>
      </div>
    );
  }
}
