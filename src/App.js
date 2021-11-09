import React, { useState } from 'react';
import './App.css';
import { CreateBox } from './components/CreateBox';
import { DisplayBox } from './components/DisplayBox';

function App() {
  const [style, setStyle] = useState([{
    width: '',
    height: '',
    backgroundColor: ''
}]);

  return (
    <div className="App">
      <CreateBox setstyle={setStyle} style={style}/>
      <DisplayBox style={style}/>
    </div>
  );
}

export default App;
