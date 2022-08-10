import './App.css';
import React from 'react';
import Search from './Components/Search/search';
import pix from './images_canon_camera_1746.png'

function App() {
  return (
    <div className="container">
      <div className='topic'>
      <img src={pix} alt='img'/>
      <h1 className="title">Movie Search</h1>
      </div>
      <Search/>
    </div>
  );
}

export default App;
