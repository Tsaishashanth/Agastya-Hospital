import React from 'react';
import './App.css';

function App() {
  return (

    <>
    <div style={{ textAlign: 'center', maxWidth: '100%',margin: '0 auto',display: 'flex',justifyContent: 'center',
alignItems: 'center' }}>
      <div className="leftbar">
        <a href= "#" className="nav-item">Home</a>
        <a href= "#" className="nav-item">About Us</a>
        <a href= "#" className="nav-item">Services</a>
      </div>

      <img
        src="/agastya hospital image.png"
        alt="Agastya Hospital Logo"
        style={{ width: '170px', height: 'auto', borderRadius: '50%' }}
      />

      <div className= "rightbar">
        <a href = "#"className ="nav-item">Appointment</a>
        <a href = "#"className ="nav-item">Contact Us</a>
        <a href = "#"className ="nav-item" style={{color:'red', fontWeight: 'bold'}}>Emergency</a>
      </div> 
    </div>
    </>
  );
}

export default App;
 
