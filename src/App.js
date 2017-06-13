import React, { Component } from 'react';
import BarGraph from './BarGraph';
import Alert from './Alert';
import PropTypes from 'prop-types';
import './App.css';

//add ability to render bar graph or column graph

class App extends Component {
  render() {  
    return (
      <div className="graph">
        <h1 className="title">{this.props.title}</h1>
        <BarGraph data={this.props.data}/>
        <Alert status={this.props.alert} statusString={this.props.alertMsg}/>
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  alert: PropTypes.string,
  alertMsg: PropTypes.string
};


export default App;

