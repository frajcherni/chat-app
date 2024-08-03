import React from 'react';
import { AiOutlineBook, AiOutlineTeam, AiOutlineLink, AiOutlineClockCircle } from 'react-icons/ai';

const Card = ({ title, description, Icon }) => {
  return (
    <div className="w-72 h-60 rounded-lg overflow-hidden shadow-md bg-white m-4 transition-transform transform hover:scale-105 hover:shadow-lg border-2 border-indigo-600">
      <div className="flex justify-center py-4">
        <Icon className="text-3xl text-indigo-600" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-3 text-center">{title}</div>
        <p className="text-gray-700 text-base text-center">{description}</p>
      </div>
    </div>
  );
};

const CardSection = () => {
  const cardsData = [
    {
      title: 'Educational Resources',
      Icon: AiOutlineBook,
      description: 'Access ready-made templates, courses, articles, or contact us for additional support.'
    },
    {
      title: 'Bot-to-Human Hand-off\'s',
      Icon: AiOutlineTeam,
      description: 'Allow your bot to work alone, and/or handover to humans when needed.'
    },
    {
      title: 'Built-In Integrations',
      Icon: AiOutlineLink,
      description: 'Connect your bots to existing techstacks, so you have all the data, right where you want it.'
    },
    {
      title: 'Easy, Flexible Setup',
      Icon: AiOutlineClockCircle,
      description: 'Build and deploy versatile chatbots that impress and engage your customers in little time.'
    }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center py-12 sm:py-16 mt-8 sm:mt-16 bg-purple-200">
      <div className="text-center mb-12 max-w-3xl">
        <h2 className="mb-4 text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
          <span className="text-gray-900 dark:text-black">What makes our </span> <span className="text-indigo-600 dark:text-indigo-600">ChatBot different</span>
        </h2>
        <p className="mb-8 font-light text-gray-500 lg:mb-12 sm:text-lg dark:text-gray-400">
          Discover the unique features and advantages of Landbot for enhancing your chatbot experience.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {cardsData.map((card, idx) => (
          <Card key={idx} title={card.title} description={card.description} Icon={card.Icon} />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
