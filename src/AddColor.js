import React, { Component } from 'react';

class AddColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addColor(this.state.color);
    this.props.history.push('/colors');
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* can do input type color */}
          <input name="color" value={this.state.color} onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddColor;