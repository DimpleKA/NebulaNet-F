import React from 'react';
import 'animate.css';
import '../App.css'; // Ensure your Tailwind setup and custom CSS are imported here

const jobListings = [
  {
    title: 'Frontend Developer Intern',
    location: 'Remote',
    type: 'Internship',
    description: 'We are looking for a passionate frontend developer intern proficient in React and Tailwind CSS.',
    applyLink: 'http://localhost:5173/career/1234'
  },
  {
    title: 'Backend Developer',
    location: 'Mumbai, India',
    type: 'Full-time',
    description: 'Join our team as a backend developer working with Node.js, Express, and MongoDB.',
    applyLink: 'http://localhost:5173/career/2345'
  },
  {
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Contract',
    description: 'We need a creative UI/UX designer with experience in Figma and Adobe XD.',
    applyLink: 'http://localhost:5173/career/5678'
  }
];

const Careers = () => {
  return (
    <div className="bg-gradient-to-r from-violet via-lightviolet to-darkviolet min-h-screen py-10">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-whit cssanimation leFadeIn sequence">
          Careers
        </h1>
        <p className="text-center text-whit mt-4 text-lg animate__animated animate__fadeIn">
          Join our team and be part of our mission. Explore the opportunities below!
        </p>
        <div className="flex flex-wrap justify-center mt-10">
          {jobListings.map((job, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 p-4 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="bg-whit rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-darkviolet">{job.title}</h2>
                <p className="text-gray-700 mt-2">{job.location} - {job.type}</p>
                <p className="text-gray-600 mt-2">{job.description}</p>
                <a
                  href={job.applyLink}
                  className="text-lightviolet mt-4 block underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
