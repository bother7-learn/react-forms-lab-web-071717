import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };
  }

  poemChange = event => {
    this.setState({text: event.target.value})
  }

  poemValid = () => {
    var poem = this.state.text
    var poemArray = poem.split('\n')
    if (poemArray.length >= 3 && poemArray[0].split(" ").length >= 5 && poemArray[1].split(" ").length >= 3 && poemArray[2].split(" ").length >= 5) {
      return true
    } else {
      return false
    }
  }

  render() {
    console.log(this.state.text, this.poemValid())
    if (this.poemValid()) {
      return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange={this.poemChange}
        />
      </div>
    );}
    else {
      return (
        <div>
          <textarea
            rows="3"
            cols="60"
            onChange={this.poemChange}
          />
          <div
            id="poem-validation-error"
            style={{color: 'red'}}
          >
            This poem is not written in the right structure!
          </div>
        </div>
      );
    }
  }
}

export default PoemWriter;
