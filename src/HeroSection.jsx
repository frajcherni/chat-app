import { useEffect, useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IoChatbubblesSharp } from 'react-icons/io5';

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Replace # paths with your paths
  const navigation = [
    { title: 'Product', path: '#' },
    { title: 'Pricing', path: '#' },
    { title: 'Resources', path: '#' },
    { title: 'Contact', path: '#' }
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.menu-btn')) setMenuOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <a href="#" className="text-gray-500 hover:text-gray-800">
        {/* Replace with your brand logo or text */}
      </a>
      <div className="md:hidden">
        <button
          className="menu-btn text-gray-500 hover:text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <MdClose className="text-2xl" />
          ) : (
            <MdMenu className="text-2xl" />
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <div
        className="absolute inset-0 blur-xl h-[580px]"
        style={{
          background: 'linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)',
        }}
      ></div>
      <div className="relative">
        <header>
          <div className={`md:hidden ${menuOpen ? 'fixed top-0 left-0 right-0 mx-2 pb-5' : 'hidden'}`}>
            <Brand />
          </div>
          <nav
            className={`pb-5 md:text-sm ${
              menuOpen
                ? 'absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent'
                : ''
            }`}
          >
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
              <Brand />
              <div
                className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                  menuOpen ? 'block' : 'hidden'
                }`}
              >
                <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                  {navigation.map((item, idx) => (
                    <li key={idx} className="text-gray-700 hover:text-gray-900">
                      <a href={item.path} className="block">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                  >
                    Sign in
                    <AiOutlineArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <section>
          <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
            <div className="flex-none space-y-5 max-w-xl">
              <a
                href="#"
                className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white"
              >
                {/* Placeholder for additional content */}
              </a>
              <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                Win up to 70% of your team’s time back with AI Chatbot
              </h1>
              <p>
                Automatically answer common questions and perform recurring tasks so your team can focus on growing your business.
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <a
                  href="#"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                >
                  Get started
                  <AiOutlineArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex"
                >
                  Contact sales
                  <AiOutlineArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative flex-1 max-w-lg hidden sm:block">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 blur-lg -z-10 h-[580px]" style={{
                background: 'linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)',
              }}></div>
              <img
                src="src/assets/img.webp"
                className="w-full rounded-3xl object-cover shadow-xl"
                alt="Hero section"
              />
            </div>
          </div>
        </section>
      </div>
      <a
        href="#"
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
        aria-label="Chat with us"
      >
        <IoChatbubblesSharp className="w-6 h-6" />
      </a>
    </div>
  );
}
