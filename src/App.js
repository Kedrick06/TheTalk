import React from 'react';
import './App.css';
import Nav from './Components/Nav';

function App() {
  return (
  <div className='container'>
    <div className='blue'>
      <Nav/>
    </div>
    <div className='red'>
      <img src="https://the-talks.com/wp-content/uploads/2019/12/Matt-Damon-01.jpg"></img>
    </div>
    <div className='green'>
        <div className='greenchild'>
            <div className='one'>1</div>
            <div className='two'>2</div>
            <div className='three'>3</div>
            <div className='four'>4</div>
            <div className='five'>5</div>
            <div className='six'>6</div>
            <div className='seven'>7</div>
            <div className='eight'>8</div>
        </div>
    </div>
    <footer className='footer-class'>Footer</footer>
</div>
  );
}

export default App;
