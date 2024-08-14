import React from 'react';

export default function TestimonialWatsap() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-black mb-8">
          What our happy customers say
        </h2>
        
        {/* Testimonial */}
        <figure className="max-w-screen-md mx-auto">
          <svg className="h-12 mx-auto mb-3 text-indigo-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
          <blockquote>
            <p className="text-xl sm:text-2xl font-medium text-gray-900">
              "Chatbot Instagram has revolutionized how we interact with our audience. The seamless integration and quick setup allowed us to boost engagement and drive sales effectively. A game-changer for our marketing strategy!"
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img className="w-10 h-10 rounded-full" src="/images/cherni.png" alt="profile picture"/>
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900">Micheal Gough</div>
              <div className="pl-3 text-sm font-light text-gray-600">CEO at Google</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
