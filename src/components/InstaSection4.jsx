import React from 'react';

const Card = ({ step, imageSrc, description }) => {
  return (
    <div className="w-full sm:w-72 md:w-80 h-auto rounded-lg overflow-hidden shadow-md bg-white m-4 border-2 border-indigo-600">
      <div className="relative p-6">
        {/* Step Number */}
        <div className="absolute top-4 left-4 text-2xl font-extrabold text-black">{step}</div>
        
        {/* Image */}
        <div className="flex justify-center items-center mt-8">
          <img src={imageSrc} alt="Step Icon" className="w-16 h-16 md:w-20 md:h-20 text-indigo-600" />
        </div>
        
        {/* Line Separator */}
        <div className="border-t-2 border-indigo-600 my-4"></div>
        
        {/* Description */}
        <div className="text-center px-4 md:px-6">
          <p className="text-gray-700 text-sm md:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

const InstaSection4 = () => {
  const cardsData = [
    {
      step: 'Step 1.',
      imageSrc: '/images/1.svg',
      description: 'Leverage Instagram to generate more conversions, sales, and revenue.'
    },
    {
      step: 'Step 2.',
      imageSrc: '/images/2.svg',
      description: 'Use our template gallery to create a customized Instagram DM Marketing campaign in as little as 15 minutes.'
    },
    {
      step: 'Step 3.',
      imageSrc: '/images/3.svg',
      description: 'Join 1 million+ smart brands and sign up for a risk-free trial.'
    }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center py-12 sm:py-16 mt-8 sm:mt-16 bg-purple-200">
      <div className="text-center mb-12 max-w-3xl">
        <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl tracking-tight font-extrabold">
          <span className="text-gray-900">How to get started with </span>
          <span className="text-indigo-600">DM Marketing</span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {cardsData.map((card, idx) => (
          <Card key={idx} step={card.step} imageSrc={card.imageSrc} description={card.description} />
        ))}
      </div>
      <div className="mt-12">
        <button className="px-6 py-3 rounded-full font-semibold text-md bg-indigo-600 text-white border-2 border-indigo-600">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default InstaSection4;
