// components/Courses.js
import React from 'react';
import CardHolder from './CardHolder';

const Courses = () => {
  return (
    <div className='Courses relative bg-cover bg-center ' style={{ backgroundImage: "url('https://media.istockphoto.com/id/104245151/photo/blue-abstract-star-nebula.jpg?s=612x612&w=0&k=20&c=MyIpVja8Bf5tfMisrfKd7MyW3KRvekgG6X4t13M3tlg=')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
      {/* Your content here */}
      <div className="relative z-10 text-white p-6">
        <h1 className="text-4xl">Courses</h1>
        <p>Explore our wide range of courses available for all levels.</p>

{/* courses seciton starts */}
<div className='w-full lg:flex'>
        <CardHolder/>
</div>
{/* courses seciton ends */}
      </div>
    </div>
  );
}

export default Courses;
