import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/auth/login';
import ForgotPassword from './pages/auth/forgot-password';
import ResetPassword from './pages/auth/reset-password';

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
