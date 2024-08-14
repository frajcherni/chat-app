import React from "react";
import { FaRegCalendar, FaCamera, FaChartLine } from "react-icons/fa"; // Import icons

const WatsappSection2 = () => {
  const sections = [
    {
      bgColor: 'bg-purple-100',
      title: 'Automated responses, no delays. Ever.',
      description: 'Respond to leads without wasting precious time. Automate answers to repetitive questions, letting automation take the wheel before a human is even needed. Don’t worry - your human agents can step in at any time!',
      icon: <FaRegCalendar className="text-indigo-600 text-2xl mb-2" />,
      imageSrc: "/images/22.png",
      profileName: "Instagram User"
    },
    {
      bgColor: 'bg-purple-200',
      title: 'Convert more customers with WhatsApp Broadcasts ',
      description: 'Run high-converting remarketing campaigns on WhatsApp. Reengage your entire contacts list at once, and take advantage of 1,000 free business-initiated messages every month.',
      icon: <FaCamera className="text-indigo-600 text-2xl mb-2" />,
      imageSrc: "/images/22.png",
      profileName: "Instagram User"
    },
    {
      bgColor: 'bg-purple-300',
      title: 'Empower Your Sales: One Number, Complete Overview.',
      description: 'Create a system where every agent, every lead, every conversation is assigned and answered on a single phone number. Keep track of open conversations and interested leads for a 360-degree view of your sales process.',
      icon: <FaChartLine className="text-indigo-600 text-2xl mb-2" />,
      imageSrc: "/images/22.png",
      profileName: "Instagram User"
    },
  ];

  return (
    <div className="flex items-center justify-center mt-40">
      {sections.map((section, index) => (
        <div key={index} className={`w-full max-w-lg px-10 py-6 mx-auto ${section.bgColor}`}>
          <div className="max-w-md mx-auto space-y-4 my-16 px-8 text-center">
            <div className="flex flex-col items-center mb-2">
              {section.icon}
              <h3 className="font-bold text-xl mb-3 h-12 flex items-center justify-center">
                {section.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed h-20 flex items-center justify-center mb-3">
                {section.description}
              </p>
            </div>
            <div className="w-full h-full flex flex-col p-4 bg-black/40 rounded-lg">
              <img src={section.imageSrc} alt="Instagram" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WatsappSection2;
