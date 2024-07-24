import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import ClientLayout from './layouts/ClientLayout';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/*" element={<ClientLayout />} />
          <Route path="/admin/*" element={<AdminLayout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
