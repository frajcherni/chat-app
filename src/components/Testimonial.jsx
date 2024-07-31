import { useState } from 'react';

export default function Testimonial() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
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
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Discover our AI chatbot
              </a>
            </div>
          </div>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
          <div className="md:col-span-2 items-center bg-gray-100 rounded-lg shadow flex justify-center items-center h-full w-full">
            <img className="h-full w-80" src="src/assets/img5.png" alt="Chatbot" />
          </div>
          <div className="md:col-span-1 flex flex-col gap-8">
            <div className="items-center bg-white border border-gray-200 rounded-lg shadow p-5">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-indigo-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <h3 className="text-4xl font-extrabold text-gray-900 mb-2">70%</h3>
                  <p className="text-lg text-gray-500">Lyro resolution rate</p>
                </div>
              </div>
              <hr className="border-gray-100 my-4" />
              <div className="flex items-center">
                <svg className="w-8 h-8 text-indigo-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <h3 className="text-4xl font-extrabold text-gray-900 mb-2">76%</h3>
                  <p className="text-lg text-gray-500">of visitors don’t request transfer to a human agent</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-6 sm:gap-y-8">
              <div>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                    <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                  </svg>
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-slate-900">“I’m so much happier because we can trust that the customer service is being taken care of by Lyro. The AI gives customers 24-hour support and helps visitors go through the website.”</p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-base text-slate-900">Cherni Fraj</div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img alt="" className="h-14 w-14 object-cover" style={{ color: 'transparent' }} src="src/assets/cherni.png" />
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
