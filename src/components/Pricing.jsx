import PlanetImg from "/images/dark.png";
import PlanetTagImg01 from "/images/t.png";
import PlanetTagImg02 from "/images/t.png";
import PlanetTagImg03 from "/images/t.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

export default function Pricing() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: 'ease-in',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
          <h2 className="text-4xl text-white font-extrabold mx-auto md:text-4xl mt-16">
          We have multiple plans for your <span className="text-indigo-600">growth</span></h2>
                        <p className="max-w-2xl mx-auto text-gray-400 mt-8">
                        Flexible plans that adapt to your needs
                    </p>
          </div>

          {/* Grid for Pricing Plans */}
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
            <article className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-200" data-aos="fade-up">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                  <path d="M12 4a8 8 0 0 0-8 8v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a8 8 0 0 0-8-8Zm-1 13H8v-2h3v2Zm3-3H8v-2h6v2Zm0-3H8V9h6v2Z" />
                </svg>
                <h3 className="ml-4 text-2xl font-bold">Basic Plan</h3>
              </div>
              <p className="text-gray-400 mb-4">Perfect for small businesses looking to get started with basic chatbot functionality.</p>
              <div className="text-gray-200 font-semibold mb-4">$19/month</div>
              <ul className="text-gray-400 list-disc list-inside space-y-2">
                <li>Basic chatbot features</li>
                <li>Email support</li>
                <li>Limited integrations</li>
              </ul>
            </article>
            <article className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-200" data-aos="fade-up">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                  <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
                </svg>
                <h3 className="ml-4 text-2xl font-bold">Professional Plan</h3>
              </div>
              <p className="text-gray-400 mb-4">Ideal for growing businesses needing advanced features and enhanced support.</p>
              <div className="text-gray-200 font-semibold mb-4">$49/month</div>
              <ul className="text-gray-400 list-disc list-inside space-y-2">
                <li>Advanced chatbot features</li>
                <li>Priority support</li>
                <li>Extended integrations</li>
              </ul>
            </article>
            <article className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-200" data-aos="fade-up">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                  <path d="M12 4a8 8 0 0 0-8 8v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a8 8 0 0 0-8-8Zm-1 13H8v-2h3v2Zm3-3H8v-2h6v2Zm0-3H8V9h6v2Z" />
                </svg>
                <h3 className="ml-4 text-2xl font-bold">Enterprise Plan</h3>
              </div>
              <p className="text-gray-400 mb-4">Comprehensive solution for large businesses with custom needs and top-tier support.</p>
              <div className="text-gray-200 font-semibold mb-4">$99/month</div>
              <ul className="text-gray-400 list-disc list-inside space-y-2">
                <li>All features included</li>
                <li>Dedicated account manager</li>
                <li>Custom integrations</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
