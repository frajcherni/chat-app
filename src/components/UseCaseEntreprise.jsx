import React, { useState } from "react";
import { motion } from "framer-motion";

const cases = [
  {
    title: "When you need a human touch",
    image: `${import.meta.env.BASE_URL}images/img6.png`,
    description:
      "No more wading through dense documents to find a single piece of information. Our AI chatbots sift through taxpayer data, promptly addressing refund statuses, deductible queries, and much more.",
    iconImage: `${import.meta.env.BASE_URL}images/human.png`,
  },
  {
    title: "Never miss a date with Us",
    image: `${import.meta.env.BASE_URL}images/img7.png`,
    description:
      "Sometimes, AI can't replace the assurance a human voice provides, especially when audits loom large. In such cases, Tars ensures a smooth handover to agents who can provide that personalized guidance every taxpayer seeks.",
    iconImage: `${import.meta.env.BASE_URL}images/calendar.png`,
  },
  {
    title: "Making the tax conversation easy",
    image: `${import.meta.env.BASE_URL}images/education-1-min.png`,
    description:
      "In the bustle of life, it's easy to forget deadlines. But with Tars on your side, taxpayers receive timely reminders and insightful tips, ensuring they stay on top of their tax game, straight on their preferred channels.",
    iconImage: `${import.meta.env.BASE_URL}images/chat.png`,
  },
];

const UseCaseEntreprise = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section 
      id="Testimonials" 
      aria-label="What our customers are saying" 
      className="py-2 sm:py-4 bg-purple-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 sm:mb-6 md:mb-8 text-4xl sm:text-4xl lg:text-4xl font-extrabold">
            <span className="text-gray-900 dark:text-black">
              Enterprise <span className="text-indigo-600 dark:text-indigo-600">Use Case</span> Templates
            </span>
          </h2>
          <p className="mb-4 sm:mb-6 lg:mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Your own generative AI Large Language Model framework, designed and launched in minutes without coding, based on your resources.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row w-full max-w-5xl mx-auto">
          {/* Description Section */}
          <div className="lg:w-1/2 space-y-8 m">
            {cases.map((caseItem, index) => (
              <div key={index}>
                <div
                  onClick={() => setSelectedIndex(index)}
                  className={`relative cursor-pointer p-4 border-l-4 transition-all duration-300 ${
                    selectedIndex === index
                      ? "bg-white border-indigo-600"
                      : "border-transparent hover:bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start ">
                    <div className="flex-shrink-0">
                      <img
                        src={caseItem.iconImage}
                        alt={caseItem.title}
                        className="w-12 h-12 mr-4"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {caseItem.title}
                      </h3>
                      <p className="text-gray-700">
                        {caseItem.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Mobile view only: Image below the corresponding use case block */}
                {selectedIndex === index && (
                  <div className="mt-4 block lg:hidden">
                    <motion.img
                      key={caseItem.image}
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full max-w-md rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Image Section */}
          <div className="lg:w-1/2 hidden lg:flex justify-center items-center">
            <motion.img
              key={cases[selectedIndex].image}
              src={cases[selectedIndex].image}
              alt={cases[selectedIndex].title}
              className="w-full max-w-md rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseEntreprise;
