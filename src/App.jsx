import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Register from './pages/Register.jsx';
import UserProfile from './pages/UserProfile';

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="*" element={<Signin />} />
         </Routes>
      </Router>
   );
}

export default App;
