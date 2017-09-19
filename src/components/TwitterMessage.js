import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
      charsLeft: 140
    };
  }

  textChange = event => {
    this.setState({
      text: event.target.value,
      charsLeft: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p> {this.state.charsLeft} characters left </p>
        <input type="text" value={this.state.text} onChange={this.textChange} />
      </div>
    );
  }
}



export default TwitterMessage;
