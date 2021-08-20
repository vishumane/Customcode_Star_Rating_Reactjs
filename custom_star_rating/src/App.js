
import React from 'react';
import './App.css';
import StarRating from'./components/StarRating';
import OtpGeneration from './components/OtpGeneration';
const App=()=> {
  return (
    <div className="App">
      <StarRating/>
      <OtpGeneration/>
    </div>
  );
}

export default App;
