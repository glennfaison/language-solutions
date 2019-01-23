import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.updateChildInputPlaceholder = this.updateChildInputPlaceholder.bind(this);
  }
  componentDidMount() { this.updateChildInputPlaceholder(); }
  componentDidUpdate() { this.updateChildInputPlaceholder(); }
  updateChildInputPlaceholder() {
    let container = ReactDOM.findDOMNode(this.refs["InputContainer"]);
    let children = container.children;
    let input, textarea;
    for (let i = 0; i < children.length; i++) {
      input = input || (children[i].nodeName === "INPUT") ? children[i] : undefined;
      textarea = textarea || (children[i].nodeName === "TEXTAREA") ? children[i] : undefined;
    }
    for (let i = 0; i < children.length; i++) {
    }
    for (let i = 0; i < children.length; i++) {
      if ((input && input.value) || (textarea && textarea.value)) {
        children[i].classList.add("float")
      } else {
        children[i].classList.remove("float")
      }
    }
  }
  render() {
    return (
      <div className="InputContainer"
        ref="InputContainer"
        autoFocus
        onLoad={this.updateChildInputPlaceholder}
        onBlur={this.updateChildInputPlaceholder} >
        {this.props.children}
      </div>
    );
  }
}

export default InputContainer;