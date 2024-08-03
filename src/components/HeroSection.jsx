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
  PopoverPanel,
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

const products = [
  { name: 'Pricing', description: 'New description for Pricing', href: '#', icon: ChartPieIcon },
  { name: 'Product', description: 'New description for Product', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Integrations', description: 'New description for Integrations', href: '#', icon: SquaresPlusIcon },
  { name: 'Resources', description: 'New description for Resources', href: '#', icon: ArrowPathIcon },
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white ">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              LOGO
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                Product
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
              </Popover.Button>
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition">
                <div className="p-4">
                  {products.map((product) => (
                    <a key={product.name} href={product.href} className="flex items-center gap-x-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">
                      <product.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                      {product.name}
                    </a>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((action) => (
                    <a key={action.name} href={action.href} className="flex items-center gap-x-2 p-4 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">
                      <action.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                      {action.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Popover>
            {products.map((product) => (
              <a key={product.name} href={product.href} className="text-sm font-semibold leading-6 text-gray-900">{product.name}</a>
            ))}
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className="w-1/2 sm:w-32 py-2.5 rounded font-semibold text-md bg-indigo-600 text-white border-2 border-indigo-600">
        Get started
    </button>
    <button className="w-1/2 mt-4 sm:mt-0 sm:ml-4 sm:w-32 py-2.5 rounded font-semibold text-md bg-white text-indigo-600 border-2 border-indigo-600">
Try Free    </button>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                LOGO
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <Disclosure.Button className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Product
                      <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      {products.map((product) => (
                        <a key={product.name} href={product.href} className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          {product.name}
                        </a>
                      ))}
                    </Disclosure.Panel>
                  </Disclosure>
                  {products.map((product) => (
                    <a key={product.name} href={product.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      {product.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-50">
                    Log in
                  </a>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-50">
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
        <div className="sm:py-32 lg:pb-40">
          <div className="mt-24 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-x-4">
              
                </div>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"> Win up to 70% of your team’s time back with AI Chatbot</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                ChatBot scans your website, help center, or other designated resource to provide quick and accurate AI-generated answers to customer questions.
                </p>
                <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-3">
    <button className="w-1/2 sm:w-32 py-2.5 rounded font-semibold text-md bg-indigo-600 text-white border-2 border-indigo-600">
        Get started
    </button>
    <button className="w-1/2 mt-4 sm:mt-0 sm:ml-4 sm:w-32 py-2.5 rounded font-semibold text-md bg-white text-indigo-600 border-2 border-indigo-600">
        Watch a Demo
    </button>
</div>


              </div>
              <div className="mt-10 lg:mt-0 flex justify-center lg:justify-end">
                <img src="src/assets/img.webp" alt="Your Image Description" className="rounded-lg" />
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className=""
           
            />
          </div>
        </div>
      </div>
      <div className="fixed bottom-5 right-5">
         <button className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-500 focus:outline-none">
          <IoChatbubblesSharp className="h-10 w-10" />
         </button>
      </div>
    </div>
  );
}
