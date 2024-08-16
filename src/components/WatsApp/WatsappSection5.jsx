import React from 'react';

const Card = ({ step, imageSrc, description }) => {
  return (
    <div className="w-full sm:w-80 h-auto rounded-lg overflow-hidden shadow-md bg-white m-4 border-2 border-indigo-600">
      <div className="relative p-4 sm:p-6">
        {/* Step Number */}
        <div className="absolute top-4 left-4 text-lg sm:text-2xl font-extrabold text-black">{step}</div>
        
        {/* Image */}
        <div className="flex justify-center items-center mt-6 sm:mt-8">
          <img src={imageSrc} alt="Step Icon" className="w-16 h-16 sm:w-20 sm:h-20 text-indigo-600" />
        </div>
        
        {/* Line Separator */}
        <div className="border-t-2 border-indigo-600 my-4"></div>
        
        {/* Description */}
        <div className="text-center px-4 sm:px-6">
          <p className="text-gray-700 text-sm sm:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

const WatsappSection5 = () => {
  const cardsData = [
    {
      step: 'Step 1.',
      imageSrc: '/images/1.svg',
      description: 'Use our template gallery to create a customized WhatsApp Marketing campaign in as little as 15 minutes'
    },
    {
      step: 'Step 2.',
      imageSrc: '/images/2.svg',
      description: 'Leverage WhatsApp to generate more conversions, sales, and revenue'
    },
    {
      step: 'Step 3.',
      imageSrc: '/images/3.svg',
      description: 'Join 1 million+ smart brands and sign up for a risk-free trial'
    }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center py-6 mt-4 sm:mt-16">
      <div className="text-center mb-12 max-w-3xl px-4">
        <h2 className="mb-4 text-xl sm:text-3xl lg:text-4xl tracking-tight font-extrabold">
          <span className="text-gray-900 dark:text-black">How to get started with </span>
          <span className="text-indigo-600 dark:text-indigo-600">WatsApp</span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {cardsData.map((card, idx) => (
          <Card key={idx} step={card.step} imageSrc={card.imageSrc} description={card.description} />
        ))}
      </div>
      <div className="mt-8 sm:mt-12">
        <button className="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-md bg-indigo-600 text-white border-2 border-indigo-600">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default WatsappSection5;
