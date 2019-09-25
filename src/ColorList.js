import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ColorList extends Component {
  render() {
    return (
      <div>
        <Link to="/colors/new">Add a color</Link>
        <ul>
          {this.props.colors.map((c, idx) =>
            <li key={idx}><Link to={`/colors/${c}`}>{c}</Link></li>
          )}
        </ul>
      </div>
    )
  }
}

export default ColorList;