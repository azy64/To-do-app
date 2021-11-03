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
    console.log('je suis dans le remove', e.target.parentNode.parentNode.parentNode.id);
    const id = parseInt(e.target.parentNode.parentNode.parentNode.id, 10);
    const { handlerRemove } = this.props;
    handlerRemove(id);
  }

  isChecked = (e) => {
    console.log(e.target.checked);
    const { checked } = e.target;
    const id = parseInt(e.target.parentNode.id, 10);
    // const { value } = e.target.nextSibling;
    const { title } = this.state;
    // const { value } =
    const { handlerEdit } = this.props;
    handlerEdit({ id, title, completed: checked });
  }

  changeValue = (e) => {
    this.setState({ title: e.target.value });
    console.log(e.target.value);
  }

  putCheck = (value) => {
    if (value) return <input type="checkbox" checked onChange={this.isChecked} />;
    return <input type="checkbox" onChange={this.isChecked} />;
  }

  render() {
    const { id, title, completed } = this.props;
    // e.target.valuethis.setState({ title });
    return (
      <div id={id} className="task">
        {this.putCheck(completed)}
        <textarea className="edit" onInput={this.edit} value={this.title || title} onChange={this.changeValue} />
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
