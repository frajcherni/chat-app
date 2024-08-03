import React from 'react';

const Section3 = () => {
  return (
    <div className="flex pt-12 px-6 md:px-20 items-center justify-center md:h-screen overflow-hidden bg-purple-200">
      <div className="flex flex-col md:flex-row items-center max-w-8xl">
          
        <div className="w-full md:w-1/2 lg:pr-16"> {/* Adjusted padding-right to bring closer */}
        
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
              <span className="text-gray-900 dark:text-black">Supercharge your lead </span> 
              <span className="text-indigo-600 dark:text-indigo-600">generation</span>
            </h2>
          <h3 className="mt-6 md:mt-8 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
          Attract and engage with customers where they are when they're ready. Capture the email addresses and phone numbers for up to 80% of your leads, and add them automatically to your database
          </h3>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start">
            <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-indigo-600 text-white border-2 border-indigo-600">
              Get started
            </button>
            <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-indigo-600 border-2 border-indigo-600">
              Watch a Demo
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <video className="w-full max-w-md h-auto" autoPlay loop muted>
            <source src="src/assets/vid1.webm" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Section3;
