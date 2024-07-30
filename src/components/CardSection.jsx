import React from 'react';
import { AiOutlineCheck, AiOutlineShoppingCart, AiOutlineMail, AiOutlineCustomerService } from 'react-icons/ai';

const Card = ({ title, points, Icon }) => {
  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white m-6 transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="flex justify-center py-4">
        <Icon className="text-4xl text-indigo-600" />
      </div>
      <div className="px-8 py-6">
        <div className="font-bold text-2xl mb-4 text-center">{title}</div>
        <ul className="text-gray-700 text-lg">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-center mb-3">
              <AiOutlineCheck className="text-green-500 mr-3" />
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
    <section className="min-h-screen flex flex-col items-center py-12 mt-32">
      <div className="text-center mb-12 max-w-3xl">
        <h2 className="mb-4 text-6xl tracking-tight font-extrabold">
          <span className="text-gray-900 dark:text-black">Cover all customer journey touchpoints</span> <span className="text-indigo-600 dark:text-indigo-600">automatically</span>
        </h2>
        <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          Now your customer relations can focus on optimization, scale up through automation, and manage top-tier clients.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {cardsData.map((card, idx) => (
          <Card key={idx} title={card.title} points={card.points} Icon={card.Icon} />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
