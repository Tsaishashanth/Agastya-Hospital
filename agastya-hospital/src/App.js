import React from 'react';

function App() {
  return (
    // just styling

    <>
    <div style={{ textAlign: 'center', maxWidth: '100%',margin: '0 auto',display: 'flex',justifyContent: 'center',
alignItems: 'center', height: '13rem' }}>
      <div style = {{
      width:'100%',
      height: '3rem',
      backgroundColor: 'gray',
      borderTopRightRadius: '2px',
      borderBottomRightRadius: '2px',
      borderRadius: '0%',
      border :'4px solid gray',
      zIndex:2
    }}></div>
      <img
        src="/agastya hospital image.png"
        alt="Agastya Hospital Logo"
        style={{ width: '170px', height: 'auto', borderRadius: '50%' }}
      />
      <div style = {{
      width:'100%',
      height: '3rem',
      backgroundColor: 'gray',
      borderTopRightRadius: '2px',
      borderBottomRightRadius: '2px',
      borderRadius: '0%',
      border :'4px solid gray',
      zIndex:2
    }}></div>
    </div>
    </>
  );
}

export default App;
 
