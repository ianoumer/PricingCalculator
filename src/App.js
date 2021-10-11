import React, { Component } from 'react';
import "./components/RoiCalculator/Styles.css";
import './App.css';
import {Container} from 'reactstrap';
import RoiSlider from './components/RoiCalculator/RoiSlider';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Container>
                  <RoiSlider />
          </Container>
      </div>
    );
  }
}

export default App;
