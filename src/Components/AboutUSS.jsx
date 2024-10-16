import React from 'react';
import 'animate.css';
import '../App.css'; // Make sure you import your Tailwind setup and custom CSS

const AboutUSS = () => {
  return (
    <div className="bg-gradient-to-r from-violet via-lightviolet to-darkviolet min-h-screen py-10">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center cssanimation leFadeIn sequence">
          About Us
        </h1>
        <p className="mt-4 text-center text-whit cssanimation leFadeIn sequence">
          Welcome to NebulaNet! We specialize in modern web design and development, offering a wide range of services including hosting, development, content writing, social media marketing, logo design, and support.
        </p>

        <div className="flex flex-wrap justify-center mt-10">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-whit rounded-lg shadow-lg p-6 animate__animated animate__fadeIn">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5474/5474438.png"
                alt="Service"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold text-darkviolet">Our Services</h2>
              <p className="text-gray-700 mt-2">
                We provide hosting, development, support, content writing, social media marketing, and logo design.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-whit rounded-lg shadow-lg p-6 animate__animated animate__zoomIn">
              <img
                src="https://static.thenounproject.com/png/1094223-200.png"
                alt="Team"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold text-darkviolet">Our Team</h2>
              <p className="text-gray-700 mt-2">
                Our dedicated team works tirelessly to provide you with the best services and support for your projects.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-whit rounded-lg shadow-lg p-6 animate__animated animate__slideInUp">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3ht0USVf1kjiXkTkPpOxeAFVwfUMiRipeg&s"
                alt="Clients"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold text-darkviolet">Our Clients</h2>
              <p className="text-gray-700 mt-2">
                We have collaborated with numerous clients, delivering high-quality web solutions tailored to their needs.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-whit cssanimation typing">Let’s Get Started!</h2>
          <p className="mt-4 text-whit cssanimation leWaterWave">
            Contact us today to bring your ideas to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUSS;
