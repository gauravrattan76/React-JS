import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name="Gaurav" heroName="superman">
        <h4>This is the super man kingdom</h4>
      </Greet>
      <Greet name="Jack" heroName="Batman">
        <button>Submit</button>
      </Greet>
      <Greet name="Danny" heroName="Ironman"></Greet>
      <Welcome name="Gaurav" heroName="superman"></Welcome>
      <Welcome name="Jack" heroName="Batman">
      <h4>This is the bat man kingdom</h4>
      </Welcome>
      <Hello></Hello>
    </div>
  );
}

export default App;
