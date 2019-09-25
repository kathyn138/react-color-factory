import React, { Component } from 'react';
import './App.css';
import Color from './Color';
import ColorList from './ColorList';
import AddColor from './AddColor';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      colors: ['green', 'yellow', 'red', 'blue']
    }
    this.addColor = this.addColor.bind(this);
  }

  addColor(color) {
    this.setState({
      colors: [...this.state.colors, color]
    })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/colors" render={() => <ColorList colors={this.state.colors} />} />
            <Route exact path="/colors/new" render={rtProps => <AddColor {...rtProps} addColor={this.addColor} />} />
            <Route exact path="/colors/:color" render={rtProps => <Color {...rtProps} allColors={this.state.colors}/> } />
            <Redirect to="/colors" />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
