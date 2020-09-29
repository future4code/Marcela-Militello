import React, { useState } from 'react';
import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  const token = localStorage.getItem('token')
  const [buttonName, setButtonName] = useState(token ? 'Logout' : 'Login')
  
  return (

    <BrowserRouter>
      <Header buttonName={buttonName} setButtonName={setButtonName}/>
        <Router setButtonName={setButtonName}/>
    </BrowserRouter>
  );
}

export default App;
