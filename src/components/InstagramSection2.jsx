import React, { useState } from "react";
import { motion } from "framer-motion";

const data = [
  {
    title: "Story Replies & Reactions",
    description:
      "Engage with your audience through story replies and reactions, enhancing your interaction and building stronger connections.",
    image: "/images/instaa.png",
    iconImage: "/images/instagram-stories.png",
  },
  {
    title: "Feed Posts",
    description:
      "Share captivating feed posts to boost visibility and encourage engagement, turning your content into a conversation starter.",
    image: "/images/41.webp",
    iconImage: "/images/post.png",
  },
  {
    title: "Reels",
    description:
      "Create and share dynamic reels to captivate your audience with short, engaging videos that highlight your brand’s unique aspects.",
    image: "/images/42.webp",
    iconImage: "/images/camera.png",
  },
  {
    title: "Instagram Live",
    description:
      "Go live on Instagram to connect with your audience in real-time, offering them a chance to engage directly and ask questions.",
    image: "/images/43.webp",
    iconImage: "/images/instagram-live.png",
  },
];

const SolutionSection2 = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section 
      id="Solutions" 
      aria-label="Our Solutions" 
      className="py-2 sm:py-4 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 sm:mb-6 md:mb-8 text-4xl sm:text-4xl lg:text-4xl font-extrabold">
            <span className="text-gray-900 dark:text-black">
              Drive higher conversions and sales with{" "}
              <span className="text-indigo-600 dark:text-indigo-600">
                Instagram DM Marketing
              </span>
            </span>
          </h2>
          <p className="mb-4 sm:mb-6 lg:mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Your own generative AI Large Language Model framework, designed and
            launched in minutes without coding, based on your resources.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row w-full max-w-5xl mx-auto">
          {/* Description Section */}
          <div className="lg:w-1/2 space-y-8">
            {data.map((item, index) => (
              <div key={index} className="relative">
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
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection2;
