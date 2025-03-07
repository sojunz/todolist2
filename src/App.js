import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoItem from './components/TodoItem'; // named export
import TodoForm from './components/TodoForm'; // named export
import TodoList from './components/TodoList'; // default export
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PrivateTodos from './components/PrivateTodos';
import PublicTodos from './components/PublicTodos';
import Footer from './components/Footer';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />
          {isAuthenticated && (
            <>
              <Route path="/privatetodos" element={<PrivateTodos />} />
              <Route path="/publictodos" element={<PublicTodos />} />
            </>
          )}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;