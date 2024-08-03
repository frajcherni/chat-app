import { useState } from 'react';

export default function Testimonial() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className=""    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16 ">
          <h2 className="mb-4 text-6xl tracking-tight font-extrabold">
            {/* Main Title */}
          </h2>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="items-center sm:flex">
            <h2 className="mb-52 text-4xl tracking-tight font-extrabold">
              <span className="text-indigo-600 dark:text-indigo-600">AI ChatBot :</span>
              <span className="text-gray-900 dark:text-black"> The AI support agent for growing businesses</span>
            </h2>
          </div>
          <div className="items-center rounded-lg sm:flex">
            <div className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              <p className="mb-4">
                A conversational AI that talks to your audience. Solve up to 70% of customer problems - on any live channel, in dozens of languages - without extra hiring.
              </p>
              <p className="mb-4">
               answers customers in 6 seconds using only your data and human-like language. Lyro AI also performs tasks, freeing your support agents to focus on high-value requests. Scale your operations with predictable customer service expenses - starting at $0.5/conversation.
              </p>
            <button className="w-full sm:mt-0 sm:ml-4 sm:w-40 px-2 py-4 rounded font-semibold text-sm bg-white text-indigo-600 border-2 border-indigo-600">
              Discover our live chat
            </button>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
}
