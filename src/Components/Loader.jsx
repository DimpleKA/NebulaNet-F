import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLoader } from 'react-spinners'; // Import DotLoader

const Loader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); // Redirect to /home after 4 seconds
    }, 4000);

    return () => clearTimeout(timer); // Cleanup the timer if component unmounts
  }, [navigate]);

  return (
    <div className='flex items-center justify-center h-screen bg-whit'>
      {/* Use DotLoader with contrasting color */}
      <DotLoader color="#7c3aed" size={80} /> 
    </div>
  );
};

export default Loader;
