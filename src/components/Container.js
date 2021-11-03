import React, { Component } from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
import Items from './Items';
import '../css/container.css';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      tokenId: 0,
    };
  }

  EditTile = ({ id, title, completed }) => {
    const { tasks } = this.state;
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].id === id) {
        tasks[i].title = title;
        tasks[i].completed = completed;
        break;
      }
    }
    this.setState({ tasks });
    this.saveData();
  }

  removeTask = (id) => {
    let { tasks } = this.state;
    tasks = tasks.filter((task) => task.id !== parseInt(id, 10));
    this.setState({ tasks });
    this.saveData();
  }

  saveData = () => {
    const { tasks } = this.state;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  addTask = (value) => {
    const { tokenId } = this.state;
    const task1 = {
      id: tokenId + 1,
      title: value,
      completed: false,
    };
    const { tasks } = this.state;
    tasks.push(task1);
    this.setState({ tasks, tokenId: tokenId + 1 });
    this.saveData();
    // console.log(tasks);
  }

  componentDidUpdate = () => {
    // this.saveData();
    /* const { tasks } = this.state;
    console.log('didcomponent', tasks);
    */
  }

  renderTasks = () => {
    const tabs = [];
    let { tasks } = this.state;
    if (localStorage.getItem('tasks')) tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.map((task) => {
      // console.log(task);
      // tabs.push(<p key={task.id}>{task.title}</p>);
      tabs.push(<Items
        title={task.title}
        id={task.id}
        completed={task.completed}
        handlerEdit={this.EditTile}
        handlerRemove={this.removeTask}
        key={task.id}
      />);
      // console.log(tasks);
      return task;
    });
    return tabs;
  }

  render() {
    // this.saveData();
    return (
      <div className="container">
        <Header />
        <InputTodo handlerCreation={this.addTask} />
        <div>
          {
               this.renderTasks()
            }
        </div>
      </div>
    );
  }
}
