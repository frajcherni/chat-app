import React from 'react';
import { AiOutlineCheck, AiOutlineShoppingCart, AiOutlineMail, AiOutlineCustomerService } from 'react-icons/ai';

const Card = ({ title, points, Icon }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white m-4 transition-transform transform hover:scale-105 hover:shadow-lg border-2 border-indigo-600 ">
      <div className="flex justify-center py-4">
        <Icon className="text-3xl text-indigo-600" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-3 text-center">{title}</div>
        <ul className="text-gray-700 text-base">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-center mb-2">
              <AiOutlineCheck className="text-indigo-600 mr-2 font-bold text-2xl" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const CardSection = () => {
  const cardsData = [
    {
      title: 'Sales',
      Icon: AiOutlineShoppingCart,
      points: [
        'Qualify and segment leads',
        'Create personalized sales offers',
        'Pass leads to CRM',
        'Transfer qualified chats to sales representatives',
        'Schedule meetings',
        'Hire ChatBot as Sales Rep'
      ]
    },
    {
      title: 'Marketing',
      Icon: AiOutlineMail,
      points: [
        'Initiate conversations proactively with greetings',
        'Educate about products and services',
        'Collect leads and pass them to email marketing lists',
        'Launch AI bots on landing pages to boost conversion',
        'Hire ChatBot as Marketer'
      ]
    },
    {
      title: 'Support',
      Icon: AiOutlineCustomerService,
      points: [
        'Answer common questions with a virtual agent',
        'Resolve customers\' problems',
        'Create support tickets',
        'Send links to help center articles or other educational content',
        'Transfer to live agents',
        'Hire ChatBot as Support Agent'
      ]
    }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center py-12 sm:py-16 mt-8 sm:mt-16">
      <div className="text-center mb-12 max-w-3xl">
        <h2 className="mb-4 text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
          <span className="text-gray-900 dark:text-black">Cover all customer journey touchpoints</span> <span className="text-indigo-600 dark:text-indigo-600">automatically</span>
        </h2>
        <p className="mb-8 font-light text-gray-500 lg:mb-12 sm:text-lg dark:text-gray-400">
          Now your customer relations can focus on optimization, scale up through automation, and manage top-tier clients.
        </p>
      </div>
      <div className="flex flex-wrap justify-center ">
        {cardsData.map((card, idx) => (
          <Card key={idx} title={card.title} points={card.points} Icon={card.Icon} />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
