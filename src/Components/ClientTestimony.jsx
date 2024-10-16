import React from 'react';
import 'animate.css';
import '../App.css'; // Ensure your Tailwind setup and custom CSS are imported here

const testimonies = [
  {
    name: 'Nishant Kumar',
    image: 'https://pulsecare.netlify.app/assets/PulseCare-Cibtm_3m.png',
    testimony: 'NebulaNet transformed our online presence with a stunning website that increased our engagement by 200%.',
    projectLink: 'https://pulsecare.netlify.app/',
    position: 'Founder & CEO',
    company: 'PulseCare'
  },
  {
    name: 'PRASHANT SONAM',
    image: 'https://prgrowinsight.com/assets/prgrow-DteJk6St.jpeg',
    testimony: 'The team provided exceptional support and innovative solutions for our Banking and Loan platform.',
    projectLink: 'https://prgrowinsight.com/',
    position: 'Director',
    company: 'Loan'
  }
 
];

const ClientTestimony = () => {
  return (
    <div className="bg-gradient-to-r from-violet via-lightviolet to-darkviolet min-h-screen py-10">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-whit cssanimation leFadeIn sequence">
          Client Testimonials
        </h1>
        <div className="flex flex-wrap justify-center mt-10">
          {testimonies.map((client, index) => (
            <figure
              key={index}
              className="max-w-screen-md mx-auto text-center w-full sm:w-1/2 lg:w-1/3 p-4 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <svg
                className="w-10 h-10 mx-auto mb-3 text-whit"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
              </svg>
              <blockquote>
                <p className="text-2xl italic font-medium text-whit">
                  "{client.testimony}"
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-12 h-12 rounded-full"
                  src={client.image}
                  alt={`${client.name}'s profile`}
                />
                <div className="flex items-center divide-x-2 divide-lightviolet">
                  <cite className="pr-3 font-medium text-whit">{client.name}</cite>
                  <cite className="pl-3 text-sm text-lightviolet">{client.position} at {client.company}</cite>
                </div>
              </figcaption>
              <a
                href={client.projectLink}
                className="text-whit mt-4 block underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientTestimony;
