import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { FaCog, FaChartLine, FaSmile, FaCommentDots, FaArrowUp, FaClock } from 'react-icons/fa';

export default function PricingSection2() {

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
        <div className="py-12 md:py-8">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl mt-8">
            One platform. Far too many <span className="text-indigo-600">Benefits</span>
            </h2>
            <p className="mt-6 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            </p>
          </div>

          {/* Grid for Chatbot Benefits */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaCog className="text-blue-500" />
                <span>Improve Team Efficiency</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Get your whole team working together on a chat manager equipped with routing rules, chat tools & quick shortcuts.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaChartLine className="text-blue-500" />
                <span>Succeed with Data</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Monitor and analyze conversations to improve overall performance using exportable chat metrics, reports & flow analytics.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaSmile className="text-blue-500" />
                <span>Increased Customer Delight</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Don’t lose customers to long wait times. Instead, self serve with automated FAQs or solve inquiries with human assistance.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaCommentDots className="text-blue-500" />
                <span>10x Engagement</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Replace long boring forms with interactive conversational bots and watch your response rates soar.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaArrowUp className="text-blue-500" />
                <span>Quick Boost to Revenue</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Engage visitors, convert leads, and retain more customers with personalized conversations throughout the customer journey.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaClock className="text-blue-500" />
                <span>Save Time with Minimal Effort</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Slash chatbot creation time & go live within minutes using a visual chatbot builder designed for non-technical people.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
