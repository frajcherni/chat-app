import { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IoChatbubblesSharp } from 'react-icons/io5';
import {
  Dialog,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
} from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaSms } from 'react-icons/fa'; // Add necessary icons

const socialMedia = [
  { name: 'Facebook', description: 'Facebook messanger Chatbot', href: '#', icon: FaFacebookF },
  { name: 'Instagram', description: 'Automate your instagram marketing', href: '/product/instagram', icon: FaInstagram },
  { name: 'WhatsApp', description: 'Connect with customers instantly', href: '#', icon: FaWhatsapp },
  { name: 'SMS', description: 'Text with customers', href: '#', icon: FaSms },
];

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="absolute inset-0 blur-xl h-[580px]" />
      <div className="relative">
  


<div className="sm:py-12 lg:pb-40">
  <div className="mt-24 mx-auto max-w-7xl px-6 lg:px-8">
    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
      
      {/* Mobile View */}
      <div className="flex flex-col items-center lg:hidden">
        <img src={`${import.meta.env.BASE_URL}images/img.webp`} alt="Your Image Description" className="rounded-lg mb-6" />
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center">
          Win up to <span className="text-indigo-600 dark:text-indigo-600">70%</span> of your team’s time back with AI Chatbot
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
          ChatBot scans your website, help center, or other designated resource to provide quick and accurate AI-generated answers to customer questions.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full">
          <button className="w-full sm:w-32 py-2.5 rounded font-semibold text-md bg-indigo-600 text-white border-2 border-indigo-600">
            Get started
          </button>
          <button className="w-full sm:w-32 py-2.5 rounded font-semibold text-md bg-white text-indigo-600 border-2 border-indigo-600">
            Watch a Demo
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex lg:flex-col lg:items-start lg:text-left">
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Win up to <span className="text-indigo-600 dark:text-indigo-600">70%</span> of your team’s time back with AI Chatbot
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          ChatBot scans your website, help center, or other designated resource to provide quick and accurate AI-generated answers to customer questions.
        </p>
        <div className="mt-10 flex items-center gap-x-3">
          <button className="w-1/2 sm:w-32 py-2.5 rounded font-semibold text-md bg-indigo-600 text-white border-2 border-indigo-600">
            Get started
          </button>
          <button className="w-1/2 mt-4 sm:mt-0 sm:ml-4 sm:w-32 py-2.5 rounded font-semibold text-md bg-white text-indigo-600 border-2 border-indigo-600">
            Watch a Demo
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex lg:justify-center lg:mt-10">
        <img src={`${import.meta.env.BASE_URL}images/img.webp`} alt="Your Image Description" className="rounded-lg" />
      </div>
      
    </div>
  </div>
  <div
    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    aria-hidden="true"
  >
    <div className="relative"></div>
  </div>
</div>

      </div>
      <div className="fixed bottom-5 right-5 z-50">
    <button className="bg-indigo-600 text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-indigo-500 focus:outline-none">
      <IoChatbubblesSharp className="h-7 w-7 md:h-10 md:w-10" />
    </button>
  </div>
    </div>
  );
}