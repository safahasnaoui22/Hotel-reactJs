import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Notice the changes here
import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Router> {/* Changed BrowserRouter to Router */}
        <Routes> {/* Added Routes component */}
          <Route exact path="/" element={<Home />} /> {/* Corrected usage of Route */}
          <Route path="/room/:id" element={<RoomDetails />} /> {/* Corrected usage of Route */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
