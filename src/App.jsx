import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css'
import Navbar from './Components/Navbar'
import Loader from './Components/Loader';
import HeaderSection from './Components/HeaderSection';
import Whatsapp from './Components/Whatsapp';

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<BrowserRouter>
<Routes>




          <Route path="/"
           element={
           <Loader />
           } />



            <Route path="/home"
            
            
            element={
              <>
              <Navbar/>
              <HeaderSection />
              <Whatsapp/>
              </>
            } />
            {/* Add other routes as needed */}




</Routes>
</BrowserRouter>
</>
  )
}

export default App
