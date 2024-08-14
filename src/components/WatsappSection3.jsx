import React from 'react';

const WatsappSection3 = () => {
  return (
    <div className="flex flex-col">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-20  mt-24">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-start mt-8 md:mt-0">
          <div className="block md:hidden text-center mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
              Drive more <span className="text-indigo-600 dark:text-indigo-600">sales</span> with WhatsApp
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
              Drive more <span className="text-indigo-600 dark:text-indigo-600">sales</span> with WhatsApp
            </h2>
          </div>
          <h3 className="mt-6 md:mt-8 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Launch exclusive offers, automate follow-ups, and engage your audience with personalized messages to boost sales and grow your business effectively.
          </h3>
        </div>
      </div>

      {/* Section 2: Video on the right, text on the left */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center py-12 px-6 md:px-20 bg-purple-100">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-end mt-8 md:mt-0">
          <div className="block md:hidden text-center mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
              No tech skills? <span className="text-indigo-600 dark:text-indigo-600">No problem</span>
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
              No tech skills? <span className="text-indigo-600 dark:text-indigo-600">No problem</span>
            </h2>
          </div>
          <h3 className="mt-6 md:mt-8 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Simplify your marketing with easy-to-use tools and templates designed to help you get started with WhatsApp marketing quickly and efficiently.
          </h3>
        </div>
      </div>

      {/* Section 3: Video on the left, text on the right */}
      <div className="flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-20 ">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-start mt-8 md:mt-0">
          <div className="block md:hidden text-center mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
              Boost your <span className="text-indigo-600 dark:text-indigo-600">lead generation</span>
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
              Boost your <span className="text-indigo-600 dark:text-indigo-600">lead generation</span>
            </h2>
          </div>
          <h3 className="mt-6 md:mt-8 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Engage with potential customers in real-time, collect valuable contact information, and grow your subscriber base effortlessly with WhatsApp.
          </h3>
        </div>
      </div>

      {/* Section 4: Video on the right, text on the left */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center py-12 px-6 md:px-20 bg-purple-100">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-end mt-8 md:mt-0">
          <div className="block md:hidden text-center mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
              Turn Conversations into <span className="text-indigo-600 dark:text-indigo-600">Revenue</span>
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
              Turn Conversations into <span className="text-indigo-600 dark:text-indigo-600">Revenue</span>
            </h2>
          </div>
          <h3 className="mt-6 md:mt-8 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Utilize WhatsApp’s features to create personalized messages, automate responses, and convert interactions into sales with minimal effort.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WatsappSection3;
