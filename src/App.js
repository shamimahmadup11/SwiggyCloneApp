import React from 'react';
import './App.css';
// import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Data from './Data';
import Body from './Components/Body';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body data={Data}/>
       
    </div>
  );
}

export default App;
