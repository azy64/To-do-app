import React, { Component } from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
import Items from './Items';
import '../css/container.css';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: JSON.parse(localStorage.getItem('tasks')) || [],
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
    this.saveData(tasks);
    this.setState({ tasks });
    // this.saveData();
  }

  removeTask = (id) => {
    let { tasks } = this.state;
    tasks = tasks.filter((task) => task.id !== parseInt(id, 10));
    this.saveData(tasks);
    this.setState({ tasks });
    // this.saveData();
  }

  saveData = (tab = []) => {
    localStorage.setItem('tasks', JSON.stringify(tab));
  }

  addTask = (value) => {
    const { tokenId, tasks } = this.state;
    let tok = tokenId;
    if (tasks.length !== 0) tok = tasks[tasks.length - 1].id;
    const task1 = {
      id: tok + 1,
      title: value,
      completed: false,
    };
    tasks.push(task1);
    this.saveData(tasks);
    this.setState({ tasks, tokenId: tokenId + 1 });
  }

  renderTasks = () => {
    const tabs = [];
    let { tasks } = this.state;
    if (localStorage.getItem('tasks')) tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.map((task) => {
      tabs.push(<Items
        title={task.title}
        id={task.id}
        completed={task.completed}
        handlerEdit={this.EditTile}
        handlerRemove={this.removeTask}
        key={task.id}
      />);
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
