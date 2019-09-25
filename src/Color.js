import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";

class Color extends Component {
  render() {
    return (
      this.props.allColors.includes(this.props.match.params.color) ?
        <div className="color-box" style={{ backgroundColor: this.props.match.params.color }}>
          <Link to="/colors">Go Back</Link>
        </div>
        :
        <Redirect to="/colors" />
    )
  }
}

export default Color;