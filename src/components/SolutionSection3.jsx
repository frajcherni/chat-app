import React from 'react';

const CombinedSection = () => {
  return (
    <div className="flex flex-col">
      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-20 bg-purple-100 mt-32">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-start mt-8 md:mt-0">
          <div className="block md:hidden text-center mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
              Supercharge your lead <span className="text-indigo-600 dark:text-indigo-600">Generation</span>
            </h2>
          </div>
          <video
            src={`${import.meta.env.BASE_URL}images/vid4.webm`}
            autoPlay
            loop
            muted
            className="w-full max-w-md h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 lg:pl-16">
          <div className="hidden md:block">
            <h2 className="mb-4 text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
              Supercharge your lead <span className="text-indigo-600 dark:text-indigo-600">Generation</span>
            </h2>
          </div>
          <h3 className="mt-6 md:mt-8 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Attract and engage with customers where they are when they're ready. Capture the email addresses and phone numbers for up to 80% of your leads, and add them automatically to your database.
          </h3>
          
        </div>
      </div>

      {/* Section 2: Video on the right, text on the left */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center py-12 px-6 md:px-20">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-end mt-8 md:mt-0">
          <div className="block md:hidden text-center mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
              No tech experience? <span className="text-indigo-600 dark:text-indigo-600">No worries</span>
            </h2>
          </div>
          <video
            src={`${import.meta.env.BASE_URL}images/vid2.webm`}
            autoPlay
            loop
            muted
            className="w-full max-w-md h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 lg:pr-16">
          <div className="hidden md:block">
            <h2 className="mb-4 text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
              No tech experience? <span className="text-indigo-600 dark:text-indigo-600">No worries</span>
            </h2>
          </div>
          <h3 className="mt-6 md:mt-8 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Use our AI Assistant or our plug-and-play templates to build your first automation. Best of all, you can edit any done-for-you template or AI–generated conversation in just a few clicks.
          </h3>
          
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-20 bg-purple-100">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-start mt-8 md:mt-0">
          <div className="block md:hidden text-center mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
              Supercharge your lead <span className="text-indigo-600 dark:text-indigo-600">Generation</span>
            </h2>
          </div>
          <video
            src={`${import.meta.env.BASE_URL}images/vid1.webm`}
            autoPlay
            loop
            muted
            className="w-full max-w-md h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 lg:pl-16">
          <div className="hidden md:block">
            <h2 className="mb-4 text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
              Supercharge your lead <span className="text-indigo-600 dark:text-indigo-600">Generation</span>
            </h2>
          </div>
          <h3 className="mt-6 md:mt-8 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Attract and engage with customers where they are when they're ready. Capture the email addresses and phone numbers for up to 80% of your leads, and add them automatically to your database.
          </h3>
          
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-center py-12 px-6 md:px-20">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-end mt-8 md:mt-0">
          <div className="block md:hidden text-center mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
              No tech experience? <span className="text-indigo-600 dark:text-indigo-600">No worries</span>
            </h2>
          </div>
          <video
            src={`${import.meta.env.BASE_URL}images/vid3.webm`}
            autoPlay
            loop
            muted
            className="w-full max-w-md h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 lg:pr-16">
          <div className="hidden md:block">
            <h2 className="mb-4 text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
              No tech experience? <span className="text-indigo-600 dark:text-indigo-600">No worries</span>
            </h2>
          </div>
          <h3 className="mt-6 md:mt-8 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Use our AI Assistant or our plug-and-play templates to build your first automation. Best of all, you can edit any done-for-you template or AI–generated conversation in just a few clicks.
          </h3>
          
        </div>
      </div>

      
    </div>
  );
};

export default CombinedSection;
