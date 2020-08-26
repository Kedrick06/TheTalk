import React from 'react';
import './App.css';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="container-app">
      <Nav/>
      <div className="box-1">
      <h2 className="App-header">New Interview</h2>
      <h2 className="App-header2">Interview Directors</h2>
      <div className="item-one">
        <img src="https://the-talks.com/wp-content/uploads/2019/12/Matt-Damon-01.jpg"></img>
        <h2 className="sub-header">MATT DAMON: "THESE TYPES OF MOVIES ARE GOING AWAY"</h2>
      </div>
      <div className="item-two"></div>
      <div className="item-three"></div>
      <div className="item-four"></div>
      <div className="item-five"></div>
      <div className="item-six"></div>
      <div className="item-seven"></div>
      <div className="item-eight"></div>
      <footer class="orange">Footer</footer>
    </div>
  </div>
  );
}

export default App;
