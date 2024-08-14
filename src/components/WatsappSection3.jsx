import React from 'react';

const WatsappSection3 = () => {
  return (
    <div className="flex flex-col">
      {/* Section 1: Title and first content */}
      <div className="bg-gray-50">
        {/* Title */}


        {/* Section 1: Image on the left, text on the right */}
        <div className="flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-20">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0">
            <img src={`${import.meta.env.BASE_URL}images/wats1.jpg`} alt="Top-tier security" className="w-full max-w-md h-auto" />
          </div>
          <div className="w-full md:w-1/2 lg:pl-16">
            <h2 className="mb-4 text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
              Top-tier security that gives you peace of mind
            </h2>
            <h3 className="mt-6 md:mt-8 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
              Feel confident knowing your sensitive data is safe thanks to robust security protocols. Plus, you're in control with roles management, ensuring the right people have the right permissions - no more, no less.
            </h3>
          </div>
        </div>
      </div>

      {/* Section 2: Image on the right, text on the left */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center py-12 px-6 md:px-20 bg-purple-100">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img src={`${import.meta.env.BASE_URL}images/wats2.png`} alt="Drive leads from ads" className="w-full max-w-md h-auto" />
        </div>
        <div className="w-full md:w-1/2 lg:pr-16">
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
            Drive leads from ads directly to WhatsApp, day and night
          </h2>
          <h3 className="mt-6 md:mt-8 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            No more pausing your campaigns during busy times! With automation, not only can you automatically qualify leads from ads when your human agents are offline, but they can also pick up the conversation at any time.
          </h3>
        </div>
      </div>

      {/* Section 3: Image on the left, text on the right */}
      <div className="flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-20">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0">
          <img src={`${import.meta.env.BASE_URL}images/wats3.png`} alt="Qualify leads automatically" className="w-full max-w-md h-auto" />
        </div>
        <div className="w-full md:w-1/2 lg:pl-16">
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
            Qualify leads automatically
          </h2>
          <h3 className="mt-6 md:mt-8 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Qualify leads and assign them to your sales team instantly. Give priority to high-potential buyers, ensuring you never miss an opportunity.
          </h3>
        </div>
      </div>

      {/* Section 4: Text on the left, video on the right */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center py-12 px-6 md:px-20 bg-purple-100">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <video className="w-full max-w-md h-auto" autoPlay loop muted>
            <source src={`${import.meta.env.BASE_URL}images/vid3.webm`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full md:w-1/2 lg:pr-16">
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

export default WatsappSection3;
