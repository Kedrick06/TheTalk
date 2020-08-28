import React from 'react';
import './App.css';
import Nav from './Components/Nav';

function App() {
  return (
  <div className='container'>
    <div className='blue'>
      <Nav/>
    </div>
    <div className='matt-damon'>
      <img src="https://the-talks.com/wp-content/uploads/2019/12/Matt-Damon-01.jpg"></img>
      <div>
      <h2 className='header-class'>MATT DAMON: “THESE TYPES OF MOVIES ARE GOING AWAY”</h2></div>
    </div>
    <div className='side-section'>
        <div className='greenchild'>
            <div className='architecture-class'>ARCHITECTURE</div>
            
            <div className='art-class'>ART</div>
            <div className='fashion-class'>FASHION</div>
            <div className='film-class'>FILM</div>
            <div className='food-class'>FOOD</div>
            <div className='literature-class'>LITERATURE</div>
            <div className='music-class'>MUSIC</div>
            <div className='sports-class'>SPORTS</div>
        </div>
    </div>
</div>
  );
}

export default App;
