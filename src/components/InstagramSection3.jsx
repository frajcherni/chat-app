import React from 'react';

const InstagramSection3 = () => {
  return (
    <div className="flex flex-col mt-32"> {/* Added top margin to move the section down */}

      {/* Title and Button */}

      {/* Section 1: Video on the left, text on the right */}
      <div className="flex flex-col md:flex-row items-center justify-center py-8 px-6 md:px-20 bg-purple-100">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0">
          <video className="w-full max-w-md h-auto" autoPlay loop muted>
            <source src={`${import.meta.env.BASE_URL}images/vid1.webm`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full md:w-1/2 lg:pl-16">
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
            No tech experience? No worries
          </h2>
          <h3 className="mt-6 md:mt-8 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Our intuitive AI Assistant can generate an Instagram chatbot conversation in minutes. Don’t like what’s generated? Don’t worry — you can regain control in just a few clicks.
          </h3>
        </div>
      </div>

      {/* Section 2: Video on the right, text on the left */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center py-12 px-6 md:px-20">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <video className="w-full max-w-md h-auto" autoPlay loop muted>
            <source src={`${import.meta.env.BASE_URL}images/vid2.webm`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full md:w-1/2 lg:pr-16">
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
            Build irresistible brand awareness
          </h2>
          <h3 className="mt-6 md:mt-8 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Build trust, create a bond with your audience, and add a personal touch to increase engagement, and drive higher conversions.
          </h3>
        </div>
      </div>

      {/* Section 3: Video on the left, text on the right */}
      <div className="flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-20 bg-purple-100">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0">
          <video className="w-full max-w-md h-auto" autoPlay loop muted>
            <source src={`${import.meta.env.BASE_URL}images/vid3.webm`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full md:w-1/2 lg:pl-16">
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
            Have more conversations that lead to sales
          </h2>
          <h3 className="mt-6 md:mt-8 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Launch limited-time special offers, and automate giveaways, challenges, and quizzes to increase revenue, and scale your brand faster than ever before!
          </h3>
        </div>
      </div>

    </div>
  );
};

export default InstagramSection3;
