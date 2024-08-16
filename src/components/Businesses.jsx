import { useState } from 'react';

export default function Businesses() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Paths to the SVG icons
  const iconImages = [
    `${import.meta.env.BASE_URL}images/cos.svg`,
    `${import.meta.env.BASE_URL}images/cons2.svg`,
    `${import.meta.env.BASE_URL}images/cos3.png`,
    `${import.meta.env.BASE_URL}images/cos4.svg`,
    `${import.meta.env.BASE_URL}images/cos5.svg`
  ];

  return (
    <section className="py-12 px-6 lg:py-20 lg:px-8 relative sm:mt-8 md:mt-12 lg:mt-[-0rem] bg-gray-900 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-extrabold text-white">
            Supercharge Your <span className="text-indigo-600 dark:text-indigo-500">Business</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 font-normal mt-4">
            Elevate customer interactions with our advanced live chat solutions.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12 lg:gap-16 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-6">
              Engage Visitors with <span className="text-indigo-600 dark:text-indigo-500">Live Chat</span>
            </h3>
            <div className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              <p className="mb-4">
                Customers want quick answers. Our live chat connects them instantly to the right team members, making it easier to convert leads into sales.
              </p>
              <p className="mb-4">
                Tailor the chat experience to your brand with customizable widgets and targeted messages.
              </p>
              <p className="mb-6 font-semibold text-gray-400">
                Trusted by 205,000+ businesses in 135+ countries.
              </p>
              <button className="w-full sm:w-auto px-6 py-3 rounded-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition duration-200">
                Explore Live Chat
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img className="max-w-full rounded-lg transform hover:scale-105 transition duration-300" src={`${import.meta.env.BASE_URL}images/img.png`} alt="Live Chat" />
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="font-light text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Join 205,000+ customers worldwide who trust our ChatBot.
          </p>
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="flex flex-wrap gap-8 md:gap-12 lg:gap-16 items-center justify-center">
            {iconImages.map((src, index) => (
              <img key={index} src={src} alt={`Icon ${index + 1}`} className="w-16 h-16 md:w-16 md:h-16 lg:w-24 lg:h-24 transform hover:scale-110 transition duration-200" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
