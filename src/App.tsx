import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';
import { Destinations } from './pages/Destinations';
import { Itineraries } from './pages/Itineraries';
import { Guides } from './pages/Guides';
import { Profile } from './pages/Profile';
import { useAuthStore } from './stores/authStore';

function App() {
  const initialize = useAuthStore(state => state.initialize);
  const loading = useAuthStore(state => state.loading);

  useEffect(() => {
    initialize();
  }, [initialize]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/itineraries" element={<Itineraries />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;