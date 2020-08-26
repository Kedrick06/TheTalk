import React from 'react';
import './App.css';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="container-app">
      <Nav/>
      <div className="box-1"></div>
      <h2 className="App-header">New Interview</h2>
      <h2 className="App-header2">Interview Directors</h2>
      <div className="item item1">
        <img src="https://the-talks.com/wp-content/uploads/2019/12/Matt-Damon-01.jpg" ></img>
      </div>
      <div className="item item2"></div>
      <div className="item item3"></div>
      <div className="item item4"></div>
      <div className="item item5"></div>
      <div className="item item6"></div>
      <div className="item item7"></div>
      <div className="item item8"></div>
      <h2 className="sub-header">MATT DAMON: "THESE TYPES OF MOVIES ARE GOING AWAY"</h2>
   </div>
  );
}

export default App;
