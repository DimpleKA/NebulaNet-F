import React from 'react';
import { Link } from 'react-router-dom';
import whatsapp from '../assets/whatsapp.png'; // Adjust this path as necessary

const Whatsapp = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link 
        to="https://wa.me/8123573669?text=Hello%20NebulaNet,%20I%20need%20assistance%20with%20your%20services."
        className="block p-2 bg-green-500 rounded-full shadow-lg hover:bg-green-600"
        aria-label="Chat with us on WhatsApp"
      >
        <img src={whatsapp} alt="WhatsApp Icon" className="h-12 w-12" />
      </Link>
    </div>
  );
};

export default Whatsapp;
