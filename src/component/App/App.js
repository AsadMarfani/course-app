import React, { Component, PropTypes } from 'react';
import Header from '../../common/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header></Header>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App;
