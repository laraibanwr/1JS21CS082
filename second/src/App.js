import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Login } from './pages/Login';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>

  );
}

export default App;