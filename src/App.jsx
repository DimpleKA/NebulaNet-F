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
import AboutUSS from './Components/AboutUSS';
import ClientTestimony from './Components/ClientTestimony';
import Careers from './Components/Careers';
import Courses from './Components/Courses/Courses';
import CourseId from './Components/Courses/CourseId';
import SpecificJob from './Components/SpecificJob';
import FirstClass from './ClassCom/FirstClass';
import ChatBotVatsal from './Components/chatbotkit/ChatBotVatsal';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/home" element={
          <>
            {/* <Navbar />
            <HeaderSection />
            <AboutUs/>
            <Footer/>
            <Whatsapp /> */}
            <ChatBotVatsal/>
          </>
        } />




<Route path="/aboutus" element={
          <>
            <Navbar />
           <AboutUSS/>
            <Footer/>
            <Whatsapp />
          </>
        } />

<Route path="/class" element={
          <>
        <FirstClass/>
          </>
        } />




<Route path="/projects" element={
          <>
            <Navbar />
           <ClientTestimony/>
            <Footer/>
            <Whatsapp />
          </>
        } />


<Route path="/career" element={
          <>
            <Navbar />
           <Careers/>
            <Footer/>
            <Whatsapp />
          </>
        } />


<Route path="/career/:jobId" element={
          <>
            <Navbar />
           <SpecificJob/>
            <Footer/>
            <Whatsapp />
          </>
        } />



<Route path="/contact-us" element={
          <>
            <Navbar />
           <ClientTestimony/>
            <Footer/>
            <Whatsapp />
          </>
        } />


<Route path="/courses" element={
          <>
            <Navbar />
       <Courses/>
            <Footer/>
            <Whatsapp />
          </>
        } />

<Route
  path="/courses/:courseId"
  element={
    <>
      <Navbar />
      <CourseId />
      <Footer />
      <Whatsapp />
    </>
  }
/>








        {/* Add other routes as needed */}
        <Route path="*" element={<NotFound />} /> {/* This will catch all unmatched routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
