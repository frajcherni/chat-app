import React from "react";
import { FaRegCalendar, FaCamera, FaChartLine } from "react-icons/fa"; // Import icons

const InstagramSection = () => {
  const sections = [
    {
      bgColor: 'bg-purple-100',
      title: 'Convert More Followers',
      description: 'Build a contact list, generate and collect leads, and re-engage prospects, so you only speak with those who are interested.',
      icon: <FaRegCalendar className="text-indigo-600 text-2xl mb-2" />,
      imageSrc: "/images/22.png",
      profileName: "Instagram User"
    },
    {
      bgColor: 'bg-purple-200',
      title: 'Automate Your IG Funnel',
      description: 'Shave down the time it takes to get a prospect on a call, launch new collections, gather reviews, and share partner products!',
      icon: <FaCamera className="text-indigo-600 text-2xl mb-2" />,
      imageSrc: "/images/22.png",
      profileName: "Instagram User"
    },
    {
      bgColor: 'bg-purple-300',
      title: 'Answer Every FAQ',
      description: 'Deliver fast responses 24/7 using Instagram DM Marketing. It costs less than a virtual assistant and never forgets to respond.',
      icon: <FaChartLine className="text-indigo-600 text-2xl mb-2" />,
      imageSrc: "/images/22.png",
      profileName: "Instagram User"
    },
  ];

  return (
    <div className="flex flex-wrap items-stretch justify-center mt-24">
      {sections.map((section, index) => (
        <div key={index} className={`w-full sm:w-1/2 lg:w-1/3 px-4 py-6 ${section.bgColor} flex flex-col justify-between`}>
          <div className="flex flex-col justify-between h-full space-y-4 px-8 text-center">
            <div className="flex flex-col items-center mb-2">
              {section.icon}
              <h3 className="font-bold text-xl mb-1">{section.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{section.description}</p>
            </div>
            <div className="w-full h-full flex flex-col p-4 bg-black/40 rounded-lg flex-grow">
              <img src={section.imageSrc} alt="Instagram" className="object-cover h-full w-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstagramSection;
