import { useState } from 'react';
import { FaReddit, FaCalendarAlt, FaPaw, FaCarrot, FaSmileBeam } from 'react-icons/fa';

export default function Businesses() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="py-8 px-4 lg:py-16 lg:px-6 relative mt-14 sm:mt-8 md:mt-12 lg:mt-[-4rem]">
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl md:text-6xl tracking-tight font-extrabold">
            {/* Main Title */}
          </h2>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl md:text-4xl tracking-tight font-extrabold">
              <span className="text-gray-900 dark:text-black">Engage website visitors on their terms with </span> 
              <span className="text-indigo-600 dark:text-indigo-600">live chat.</span>
            </h2>
            <div className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              <p className="mb-4">
                Today’s buyers want information—and they want it now. Use live chat to automatically connect chatters to the right people on your team, route customer inquiries to your services team, and pass leads to the sales team.
              </p>
              <p className="mb-4">
                Easily customize your live chat widget to match the look and feel of your brand, and create targeted welcome messages for different web pages or segments of your audience.
              </p>
              <p className="mb-4">
                Inbox and Chat Settings<br />
                205,000+ customers in over 135 countries grow their businesses with HubSpot
              </p>
              <button className="w-full sm:w-auto px-4 py-3.5 rounded font-semibold text-sm bg-white text-indigo-600 border-2 border-indigo-600">
                Discover our live chat
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img className="h-full w-full md:h-auto md:w-auto max-w-full max-h-full" src={`${import.meta.env.BASE_URL}images/img.png`} alt="Live Chat"/>
          </div>
        </div>
        <div className="text-center mb-4">
        <p className="font-light text-black sm:text-xl" style={{ fontFamily: 'Roboto, sans-serif' }}>
  205,000+ customers in over 135 countries grow their businesses with our ChatBot
</p>

        </div>
        <div className="flex justify-center mt-8">
          <div className="flex space-x-8 md:space-x-16 items-center border-2 border-indigo-600 rounded-full bg-white px-4 py-2 md:px-8 md:py-4">
            <FaReddit className="w-6 h-6 text-indigo-600" />
            <FaCalendarAlt className="w-6 h-6 text-indigo-600" />
            <FaPaw className="w-6 h-6 text-indigo-600" />
            <FaCarrot className="w-6 h-6 text-indigo-600" />
            <FaSmileBeam className="w-6 h-6 text-indigo-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
