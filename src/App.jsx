import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar';
import Loader from './Components/Loader';
import HeaderSection from './Components/HeaderSection';
import Whatsapp from './Components/Whatsapp';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/home" element={
          <>
            <Navbar />
            <HeaderSection />
            <AboutUs/>
            <Footer/>
            <Whatsapp />
          </>
        } />
        {/* Add other routes as needed */}
        <Route path="*" element={<NotFound />} /> {/* This will catch all unmatched routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

