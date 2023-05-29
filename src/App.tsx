import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="login" element={<>Login</>} />
    </Routes>
  );
}

export default App;
