import React from "react";

class TwitterMessage extends React.Component {
  state = {
    value: '',
    maxChars: this.props.maxChars
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      maxChars: (this.props.maxChars - event.target.value.length)
    });
  }

  calculateCharRemaining() {
    return (this.props.maxChars - this.state.value.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        />  (You have {this.state.maxChars} characters remaining.)
      </div>
    );
  }
}

export default TwitterMessage;
