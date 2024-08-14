import React from 'react';

const Testimonial = () => {
  return (
    <div className="flex flex-col">
      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-20">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0">
          <img
              src={`${import.meta.env.BASE_URL}images/bis.png`} 
              alt="Lead Generation"
            className="w-full max-w-md h-auto rounded-lg object-cover" // Add any additional styles
          />
        </div>
        <div className="w-full md:w-1/2 lg:pl-16">
        <h2 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-center sm:text-left">
              <span className="text-indigo-600 dark:text-indigo-600">AI ChatBot : </span>
              <span className="text-gray-900 dark:text-black">The AI support agent for growing businesses</span>
            </h2>
       
            <div className="font-light text-gray-500 lg:mb-8 sm:text-lg dark:text-gray-400 mt-4">
            <p className="mb-2">
              A conversational AI that talks to your audience. Solve up to 70% of customer problems - on any live channel, in dozens of languages - without extra hiring.
            </p>
            <p className="mb-2">
              Answers customers in 6 seconds using only your data and human-like language. Lyro AI also performs tasks, freeing your support agents to focus on high-value requests. Scale your operations with predictable customer service expenses - starting at $0.5/conversation.
            </p>
            <button className="w-full sm:w-auto px-4 py-3.5 rounded font-semibold text-sm bg-white text-indigo-600 border-2 border-indigo-600 mt-2">
              Discover our live chat
            </button>
          
          </div>
        </div>
      </div>

      {/* Section 2: Video on the right, text on the left */}

    </div>
  );
};

export default Testimonial;
