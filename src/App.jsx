import './App.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import Login from './views/Login';
import Register from './views/Register';
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
