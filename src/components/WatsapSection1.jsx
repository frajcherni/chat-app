import React from 'react';

const WatsapSection1 = () => {
  return (
    <div className="flex flex-col mt-20">
      <div className="flex pt-12 px-6 md:px-20 items-center justify-center">
        <div className="flex flex-col md:flex-row items-center max-w-8xl">
          <div className="w-full md:w-1/2 lg:pr-16 mt-8">
            <h2 className="mb-4 text-3xl sm:text-4xl lg:text-6xl tracking-tight font-extrabold">
              <span className="text-gray-900 dark:text-black">Automate & sell on <span className="text-indigo-600 dark:text-indigo-600">WhatsApp </span>
 like never before </span>
            </h2>
            <h3 className="mt-6 md:mt-8 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Boost sales, automate answers, and reengage your contacts with ease.            </h3>
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
            <img 
              src={`${import.meta.env.BASE_URL}images/watsap.png`} 
              alt="Instagram DM Marketing" 
              className="w-full max-w-lg h-auto mt-8"  // Adjusted margin-top
            />
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default WatsapSection1;
