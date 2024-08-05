import { FaCheckCircle } from 'react-icons/fa';

export default function AutomationSection() {
  return (
    <section 
      className="py-8 px-4 lg:py-16 lg:px-6 relative mt-8 bg-purple-100 "  
    >
      {/*  Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight">
          <span className="text-gray-900 dark:text-black">
            With <span className="text-indigo-600 dark:text-indigo-600">intelligent </span> automation
          </span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center">
        {/* Image on the Left */}
        <div className="flex-1 lg:pr-8 mb-8 lg:mb-0 flex justify-center">
        <img 
  src={`${import.meta.env.BASE_URL}images/14.png`} 
  alt="Automation" 
  className="h-72 w-auto max-w-full rounded-lg sm:h-72 md:h-80 lg:h-96"
/>

        </div>

        {/* List of Items on the Right */}
        <div className="flex-1 flex flex-col justify-center items-start text-left">
          <div className="space-y-4 mb-8">
            <div className="text-lg sm:text-xl md:text-2xl flex items-center text-black">
              <FaCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 mr-4" />
              <span>Slash customer support costs</span>
            </div>
            <div className="text-lg sm:text-xl md:text-2xl flex items-center text-black">
              <FaCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 mr-4" />
              <span>Free your HR team from repetitive work</span>
            </div>
            <div className="text-lg sm:text-xl md:text-2xl flex items-center text-black">
              <FaCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 mr-4" />
              <span>Reduce IT resource burdens</span>
            </div>
          </div>
          <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-indigo-600 border-2 border-indigo-600">
              Watch a Demo
            </button>
        </div>
      </div>
    </section>
  );
}
