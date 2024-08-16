import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRegHandPointer, FaRegCalendarAlt, FaRegComments } from "react-icons/fa"; // Importing new icons

const cases = [
  {
    title: "When you need a human touch",
    image: `${import.meta.env.BASE_URL}images/img6.png`,
    description:
      "No more wading through dense documents to find a single piece of information. Our AI chatbots sift through taxpayer data, promptly addressing refund statuses, deductible queries, and much more.",
    icon: <FaRegHandPointer className="text-indigo-600 w-6 h-6 md:w-6 md:h-6" />,
  },
  {
    title: "Never miss a date with Us",
    image: `${import.meta.env.BASE_URL}images/img7.png`,
    description:
      "Sometimes, AI can't replace the assurance a human voice provides, especially when audits loom large. In such cases, Tars ensures a smooth handover to agents who can provide that personalized guidance every taxpayer seeks.",
    icon: <FaRegCalendarAlt className="text-indigo-600 w-6 h-6 md:w-6 md:h-6" />,
  },
  {
    title: "Making the tax conversation easy",
    image: `${import.meta.env.BASE_URL}images/education-1-min.png`,
    description:
      "In the bustle of life, it's easy to forget deadlines. But with Tars on your side, taxpayers receive timely reminders and insightful tips, ensuring they stay on top of their tax game, straight on their preferred channels.",
    icon: <FaRegComments className="text-indigo-600 w-6 h-6 md:w-6 md:h-6" />,
  },
];

const UseCaseEntreprise = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      id="Testimonials"
      aria-label="Enterprise Use Cases"
      className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900 py-8 min-h-screen"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-200 sm:text-4xl lg:text-4xl mb-6">
            <span className="text-indigo-600">Enterprise</span> Use Case <br /> Templates
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            Explore how our AI solutions can revolutionize your workflow and enhance efficiency across various domains.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Description Section */}
          <div className="lg:w-1/2 space-y-6">
            {cases.map((caseItem, index) => (
              <div key={index}>
                <div
                  onClick={() => setSelectedIndex(index)}
                  className={`relative cursor-pointer p-3 sm:p-4 border-l-4 transition-all duration-300 ${
                    selectedIndex === index
                      ? "bg-gray-800 border-indigo-600 shadow-lg"
                      : "border-transparent hover:bg-gray-800 hover:border-gray-600"
                  } rounded-lg`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {caseItem.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-base font-semibold text-gray-200 mb-1">
                        {caseItem.title}
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base">
                        {caseItem.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile view only: Image below the corresponding use case block */}
                {selectedIndex === index && (
                  <motion.div
                    className="mt-4 block lg:hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }} // Smooth exit transition
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full rounded-lg"
                    />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Image Section */}
          <div className="lg:w-1/2 hidden lg:flex justify-center items-center lg:pl-8 m-4">
            <motion.div
              key={cases[selectedIndex].image}
              className="w-full max-w-sm"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }} // Smooth exit transition
              transition={{ duration: 0.5 }}
              style={{ minHeight: "300px" }} // Minimum height to avoid height changes during animation
            >
              <img
                src={cases[selectedIndex].image}
                alt={cases[selectedIndex].title}
                className="w-full rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseEntreprise;
