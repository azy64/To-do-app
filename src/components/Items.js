import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';
import '../css/items.css';

export default class Items extends Component {
  constructor(props) {
    super(props);
    const { title } = this.props;
    this.state = {
      title,
    };
  }

  remove = (e) => {
    const id = parseInt(e.target.parentNode.parentNode.parentNode.id, 10);
    const { handlerRemove } = this.props;
    handlerRemove(id);
  }

  isChecked = (e) => {
    const { checked } = e.target;
    const id = parseInt(e.target.parentNode.id, 10);
    const text = e.target.nextSibling;
    text.classList.add('complete');
    const { title } = this.state;
    // const { value } =
    const { handlerEdit } = this.props;
    handlerEdit({ id, title, completed: checked });
  }

  focused = (e) => {
    const { target } = e;
    target.classList.remove('complete');
  }

  blur = (e) => {
    const { target } = e;
    target.classList.add('complete');
  }

  changeValue = (e) => {
    this.setState({ title: e.target.value });
    const id = parseInt(e.target.parentNode.id, 10);
    const { checked } = e.target.previousSibling;
    const { title } = this.state;
    const { handlerEdit } = this.props;
    handlerEdit({ id, title, completed: checked });
  }

  putCheck = (value, tmp) => {
    if (value) {
      return (
        [<input type="checkbox" key={0} checked onChange={this.isChecked} />,
          <textarea onFocus={this.focused} onBlur={this.blur} key={1} className="edit complete" onInput={this.edit} value={tmp} onChange={this.changeValue} />]
      );
    }
    return [<input type="checkbox" key={0} onChange={this.isChecked} />,
      <textarea className="edit" onFocus={this.focused} onBlur={this.blur} key={1} onInput={this.edit} value={tmp} onChange={this.changeValue} />,
    ];
  }

  returnTitle = (value) => {
    const { title } = this.state;
    if (title) return title;
    return value;
  }

  render() {
    const { id, title, completed } = this.props;
    const tmp = this.returnTitle(title);

    // e.target.value
    // this.setState({ title });
    return (
      <div id={id} className="task">
        {this.putCheck(completed, tmp)}
        <button type="button" className="add" onClick={this.remove}>
          <FaTrash color="red" size="20px" />
        </button>
      </div>
    );
  }
}
Items.propTypes = {
  handlerEdit: PropTypes.func.isRequired,
  handlerRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
