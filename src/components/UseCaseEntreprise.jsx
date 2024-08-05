import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './animations.css'; // Ensure you have the necessary CSS for animations

export default function UseCaseEntreprise() {
  const [dropdownOpen, setDropdownOpen] = useState([true, false, false]);
  const [selectedCase, setSelectedCase] = useState(0);

  const toggleDropdown = (index) => {
    if (window.innerWidth >= 768) {
      if (selectedCase !== index) {
        setDropdownOpen((prev) => {
          const newState = [false, false, false];
          newState[index] = true;
          setSelectedCase(index);
          return newState;
        });
      }
    } else {
      setDropdownOpen((prev) => {
        const newState = [false, false, false];
        newState[index] = !prev[index];
        setSelectedCase(index);
        return newState;
      });
    }
  };

  const cases = [
    {
      title: "When you need a human touch",
      image: "src/assets/img6.png",
      description:
        "No more wading through dense documents to find a single piece of information. Our AI chatbots sift through taxpayer data, promptly addressing refund statuses, deductible queries, and much more.",
    },
    {
      title: "Never miss a date with Us",
      image: "src/assets/img7.png",
      description:
        "Sometimes, AI can't replace the assurance a human voice provides, especially when audits loom large. In such cases, Tars ensures a smooth handover to agents who can provide that personalized guidance every taxpayer seeks.",
    },
    {
      title: "Making the tax conversation easy",
      image: "src/assets/education-1-min.png",
      description:
        "In the bustle of life, it's easy to forget deadlines. But with Tars on your side, taxpayers receive timely reminders and insightful tips, ensuring they stay on top of their tax game, straight on their preferred channels.",
    },
  ];

  return (
    <section 
      id="Testimonials" 
      aria-label="What our customers are saying" 
      className="py-8 sm:py-16 bg-purple-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 sm:mb-6 md:mb-8 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            <span className="text-gray-900 dark:text-black">
              Enterprise <span className="text-indigo-600 dark:text-indigo-600">Use Case</span> Templates
            </span>
          </h2>
          <p className="mb-4 sm:mb-6 lg:mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Your own generative AI Large Language Model framework, designed and launched in minutes without coding, based on your resources.
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-32 md:grid-cols-2">
          <div className="flex justify-center items-center hidden md:block">
            <CSSTransition
              in={dropdownOpen[selectedCase]}
              timeout={500}
              classNames="fade"
              unmountOnExit
            >
              <img
                className="w-full max-w-md h-auto rounded-lg object-cover"
                src={cases[selectedCase].image}
                alt="Use Case"
              />
            </CSSTransition>
          </div>
          <div className="flex flex-col gap-6 mt-6 md:mt-24">
            {cases.map((caseItem, index) => (
              <div key={index} className="transition-colors">
                <div
                  className={`cursor-pointer flex justify-between items-center p-2 ${
                    dropdownOpen[index] ? 'text-indigo-600' : ''
                  }`}
                  onClick={() => toggleDropdown(index)}
                >
                  <h3 className="font-semibold text-lg sm:text-xl md:text-2xl">{caseItem.title}</h3>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      dropdownOpen[index] ? 'rotate-180 text-indigo-600' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
                <CSSTransition
                  in={dropdownOpen[index]}
                  timeout={300}
                  classNames="dropdown"
                  unmountOnExit
                >
                  <div className="mt-4">
                    <CSSTransition
                      in={dropdownOpen[index]}
                      timeout={500}
                      classNames="fade"
                      unmountOnExit
                    >
                      <img
                        className="w-full max-w-md h-auto rounded-lg object-cover mb-4 block md:hidden"
                        src={caseItem.image}
                        alt="Use Case"
                      />
                    </CSSTransition>
                    <p className="text-gray-500">
                      {caseItem.description}
                    </p>
                  </div>
                </CSSTransition>
                {index !== cases.length - 1 && (
                  <hr className="border-t border-gray-300 mt-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
