import React from 'react';

const CourseId = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center relative bg-gray-100">
      {/* Text Overlay */}
      <div className="absolute top-35 left-25 z-10 bg-white p-2 rounded-lg shadow-md">
        <h1 className="text-lg font-bold">Course: Learn React Basics</h1>
      </div>

      {/* Video Embed */}
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/NW6Dgax2d6I?si=7mAsTl63sgB2wM34"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default CourseId;
