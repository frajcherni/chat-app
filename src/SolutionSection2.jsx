import React, { useState } from "react";
import { motion } from "framer-motion";

const data = [
  {
    title: "Enhance the Shopping Experience",
    description:
      "Leverage AI to provide personalized product recommendations, making shopping more intuitive and increasing sales conversions.",
    image: "/images/vid5.png",
    iconImage: "/images/number-1.png",
  },
  {
    title: "Automate Order Tracking",
    description:
      "Allow customers to track their orders in real-time, improving transparency and customer satisfaction.",
    image: "/images/vid6.png",
    iconImage: "/images/number-2.png",
  },
  {
    title: "24/7 Customer Support",
    description:
      "Implement a chatbot to handle customer inquiries round-the-clock, ensuring that your customers always have the support they need.",
    image: "/images/vid4.png",
    iconImage: "/images/number-3.png",
  },
  {
    title: "Seamless Multi-Platform Integration",
    description:
      "Integrate your chatbot across web, mobile, and social media platforms to provide a consistent customer experience everywhere.",
    image: "/images/vid3.png",
    iconImage: "/images/number-4.png",
  },
];

const SolutionSection2 = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section 
      id="Solutions" 
      aria-label="Our Solutions" 
      className="py-2 sm:py-4 bg-purple-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 sm:mb-6 md:mb-8 text-5xl font-bold text-gray-900">
          Enhance the Shopping <br />
          <span className="text-indigo-600">Experience</span>
        </h2>
          <p className="mb-4 sm:mb-6 lg:mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">
            Explore our solutions designed to enhance your business and customer experience.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row w-full max-w-5xl mx-auto">
          {/* Description Section */}
          <div className="lg:w-1/2 space-y-8">
            {data.map((item, index) => (
              <div key={index}>
                <div
                  onClick={() => setSelectedIndex(index)}
                  className={`relative cursor-pointer p-4 border-l-4 transition-all duration-300 ${
                    selectedIndex === index
                      ? "bg-white border-indigo-600"
                      : "border-transparent hover:bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <img
                        src={item.iconImage}
                        alt={item.title}
                        className="w-12 h-12 mr-4"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      {selectedIndex === index && (
                        <p className="text-gray-700">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Mobile view only: Image below the corresponding use case block */}
                {selectedIndex === index && (
                  <div className="mt-4 block lg:hidden">
                    <motion.img
                      key={item.image}
                      src={item.image}
                      alt={item.title}
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
              key={data[selectedIndex].image}
              src={data[selectedIndex].image}
              alt={data[selectedIndex].title}
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

export default SolutionSection2;