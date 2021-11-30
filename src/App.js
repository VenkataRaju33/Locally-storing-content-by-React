import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from './Form';
import Screen from './Screen';
function App() {
  
  return (
    <div>
      <Router>
          
            <Routes>
              
              
              <Route path="/screen" element={<Screen/>} component={Screen} />
              <Route exact path="/" element={<Form/>} component={Form} />
            </Routes>
          
        </Router>
    </div>
  );
}

export default App;
