import { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IoChatbubblesSharp } from 'react-icons/io5';
import { Dialog, Popover } from '@headlessui/react';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaSms } from 'react-icons/fa';

const socialMedia = [
  { name: 'WhatsApp', description: 'Connect with customers instantly', href: '/product/watsapp', icon: FaWhatsapp },
  { name: 'Instagram', description: 'Automate your Instagram marketing', href: '/product/instagram', icon: FaInstagram },
  { name: 'Facebook', description: 'Facebook Messenger Chatbot', href: '/product/facebook', icon: FaFacebookF },
  { name: 'SMS', description: 'Text with customers', href: '/product/sms', icon: FaSms },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* Replace this with your logo */}
              <svg className="h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path
                  d="M11 1a10 10 0 00-10 10c0 4.5 2.4 8.4 5.9 10.3-.2-.8-.3-1.7-.3-2.6v-2.7a7.6 7.6 0 01-3.6-1V16c0-1.7.7-3.3 1.8-4.4v-.1c-1.5-.7-2.6-2.2-2.6-4.1 0-2.4 1.9-4.4 4.3-4.4s4.3 2 4.3 4.4c0 1.9-1.1 3.4-2.6 4.1v.1c1.1 1.1 1.8 2.7 1.8 4.4v1.3c-.7.4-1.5.7-2.3.9V18c0 .9-.1 1.8-.3 2.6C18.6 19.4 21 15.5 21 11a10 10 0 00-10-10zM12 4a3.5 3.5 0 00-3.5 3.5c0 1.5.9 2.8 2.2 3.3l.8.3.8-.3c1.3-.5 2.2-1.8 2.2-3.3A3.5 3.5 0 0012 4zm-1.7 7.8l-1.6-.8c-.4-.2-.6-.7-.6-1.1s.2-.9.6-1.1l1.6-.8c.4-.2.9-.2 1.3 0l1.6.8c.4.2.6.7.6 1.1s-.2.9-.6 1.1l-1.6.8c-.4.2-.9.2-1.3 0z"
                />
              </svg>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Resources</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Pricing</a>
            <a href="/solution" className="text-sm font-semibold leading-6 text-gray-900">E-commerce Solution</a>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                Product
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
              </Popover.Button>
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {socialMedia.map((item) => (
                    <a key={item.name} href={item.href} className="flex items-start gap-x-4 p-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">
                      <item.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                      <div>
                        <div>{item.name}</div>
                        <p className="text-xs text-gray-500">{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Popover>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button className="w-1/2 sm:w-32 py-2.5 rounded font-semibold text-md bg-indigo-600 text-white border-2 border-indigo-600">
              Get started
            </button>
            <button className="w-1/2 mt-4 sm:mt-0 sm:ml-4 sm:w-32 py-2.5 rounded font-semibold text-md bg-white text-indigo-600 border-2 border-indigo-600">
              Try Free
            </button>
          </div>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
          <div className="fixed inset-0 z-10 bg-black/30" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                {/* Replace this with your logo */}
                <svg
                  className="h-8 w-8 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M11 1a10 10 0 00-10 10c0 4.5 2.4 8.4 5.9 10.3-.2-.8-.3-1.7-.3-2.6v-2.7a7.6 7.6 0 01-3.6-1V16c0-1.7.7-3.3 1.8-4.4v-.1c-1.5-.7-2.6-2.2-2.6-4.1 0-2.4 1.9-4.4 4.3-4.4s4.3 2 4.3 4.4c0 1.9-1.1 3.4-2.6 4.1v.1c1.1 1.1 1.8 2.7 1.8 4.4v1.3c-.7.4-1.5.7-2.3.9V18c0 .9-.1 1.8-.3 2.6C18.6 19.4 21 15.5 21 11a10 10 0 00-10-10zM12 4a3.5 3.5 0 00-3.5 3.5c0 1.5.9 2.8 2.2 3.3l.8.3.8-.3c1.3-.5 2.2-1.8 2.2-3.3A3.5 3.5 0 0012 4zm-1.7 7.8l-1.6-.8c-.4-.2-.6-.7-.6-1.1s.2-.9.6-1.1l1.6-.8c.4-.2.9-.2 1.3 0l1.6.8c.4.2.6.7.6 1.1s-.2.9-.6 1.1l-1.6.8c-.4.2-.9.2-1.3 0z"
                  />
                </svg>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Resources
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    E-commerce Solution
                  </a>
                  <div className="relative">
                    <button
                      className="flex justify-between w-full items-center -mx-3 py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      Product
                      <ChevronDownIcon aria-hidden="true" className={`h-5 w-5 text-gray-400 transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute left-0 w-full bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 mt-2">
                        <div className="p-4">
                          {socialMedia.map((item) => (
                            <a key={item.name} href={item.href} className="flex items-start gap-x-4 p-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">
                              <item.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                              <div>
                                <div>{item.name}</div>
                                <p className="text-xs text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="py-6">
                  <button className="w-full py-2.5 rounded font-semibold text-md bg-indigo-600 text-white">
                    Get started
                  </button>
                  <button className="w-full mt-4 py-2.5 rounded font-semibold text-md bg-white text-indigo-600 border-2 border-indigo-600">
                    Try Free
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
