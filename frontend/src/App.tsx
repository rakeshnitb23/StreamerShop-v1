import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<div className="p-8 text-center">Login Page - Coming Soon</div>} />
          <Route path="/streams" element={<div className="p-8 text-center">Streams Page - Coming Soon</div>} />
          <Route path="/seller/dashboard" element={<div className="p-8 text-center">Seller Dashboard - Coming Soon</div>} />
          <Route path="*" element={<div className="p-8 text-center">404 - Page Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
