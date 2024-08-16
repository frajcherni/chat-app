import React from 'react';

const CombinedSection = () => {
  return (
    <div className="flex flex-col">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-20 bg-purple-100 mt-32">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-start mt-8 md:mt-0">
          <div className="block md:hidden text-center mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
              Supercharge your eCommerce <span className="text-indigo-600 dark:text-indigo-600">Growth</span>
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
              Supercharge your eCommerce <span className="text-indigo-600 dark:text-indigo-600">Growth</span>
            </h2>
          </div>
          <h3 className="mt-6 md:mt-8 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Drive your eCommerce success with targeted strategies to capture and convert leads. Enhance your sales process and boost customer engagement through seamless integrations and automation.
          </h3>
        </div>
      </div>

      {/* Section 2 */}
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
            Easily launch and manage your online store with our user-friendly tools and templates. No technical skills needed—just customize and start selling with our pre-built solutions and automation features.
          </h3>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-20 bg-purple-100">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-start mt-8 md:mt-0">
          <div className="block md:hidden text-center mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
              Boost your eCommerce <span className="text-indigo-600 dark:text-indigo-600">Sales</span>
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
              Boost your eCommerce <span className="text-indigo-600 dark:text-indigo-600">Sales</span>
            </h2>
          </div>
          <h3 className="mt-6 md:mt-8 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Optimize your sales funnel with our powerful eCommerce tools. Capture customer data, enhance engagement, and drive conversions with automation that streamlines your operations.
          </h3>
        </div>
      </div>

      {/* Section 4 */}
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
            Harness our intuitive tools and customizable templates to create your online store with ease. Effortlessly set up and manage your eCommerce site with no technical background required.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CombinedSection;
