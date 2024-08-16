import React from 'react';

const Description = () => {
  return (
    <div className="flex flex-col bg-gray-900 text-gray-200"> {/* Apply bg and text color */}
      {/* Section 1: Responsive Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-20">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <div className="block md:hidden text-center mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
            What is Chatbot ? <span className="text-indigo-600 dark:text-indigo-600"></span>
            </h2>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}images/videoframe_6934.png`}
            alt="Lead Generation"
            className="w-full max-w-md h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 lg:pl-16 mt-8 md:mt-0">
          <div className="hidden md:block mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold text-gray-200">
            What is Chatbot ?
            </h2>
          </div>
          <h3 className="text-md lg:text-xl text-center md:text-left text-gray-400 font-light tracking-wider leading-relaxed">
            A AI-powered customer platform with all the software, integrations, and resources you need to connect your marketing, sales, and customer service. HubSpot's connected platform enables you to grow your business faster by focusing on what matters most: your customers.
            <br />
            Get a demo to learn about our premium software, or get started with our full suite of free tools and upgrade as you grow.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Description;
