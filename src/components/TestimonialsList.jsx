import { FaCommentDots } from 'react-icons/fa'; // Modern chat-like icon

const TestimonialsList = () => {
  return (
    <section id="Testimonials" aria-label="What our customers are saying" className="py-8 sm:py-16 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-6">
            <FaCommentDots size={60} className="text-indigo-600 dark:text-indigo-600" />
          </div>
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-4xl tracking-tight font-extrabold">
            <span className="text-indigo-600 dark:text-indigo-600">ChatBot</span> <span className="text-gray-900 dark:text-black">AI Assist</span>
          </h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-12 sm:text-lg dark:text-gray-400">
            Your own generative AI Large Language Model framework, designed and launched in minutes without coding, based on your resources.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Card */}
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="flex-1 flex flex-col text-center rounded-lg shadow-lg bg-gray-100">
              <img className="w-full h-64 object-cover rounded-t-lg" src="src/assets/img1.png" alt="Standalone AI" />
              <div className="p-4 sm:p-8 flex-1 flex flex-col justify-between">
                <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">Standalone AI</h2>
                <p className="text-gray-500 text-sm sm:text-base">No dependencies on third-party providers like OpenAI, Google Bard, or Bing AI.</p>
              </div>
            </div>
          </div>
          {/* Right Card */}
          <div className="w-full md:w-2/3 flex flex-col">
            <div className="flex-1 flex flex-col bg-gray-100 text-center rounded-lg shadow-lg">
              <img className="w-full h-64 object-cover rounded-t-lg" src="src/assets/img2.png" alt="The right answers in a flash" />
              <div className="p-4 sm:p-8 flex-1 flex flex-col justify-between">
                <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">The right answers in a flash</h2>
                <p className="text-gray-500 text-sm sm:text-base">A seamless integration of state-of-the-art AI technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsList;
