import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/auth/login';
import ForgotPassword from './pages/auth/forgot-password';

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
