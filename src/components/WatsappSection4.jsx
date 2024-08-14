import React from 'react';

export default function WatsappSection4() {
  const blogPosts = [
    {
      id: 1,
      imageUrl: "/images/w1.png",
      title: "Instant Help at Your Fingertips",
      description: "The essential WhatsApp template that helped La Repa generate 9,000% ROI"
    },
    {
      id: 2,
      imageUrl: "/images/w2.png",
      title: "Your Blog Post Title",
      description: "A Guide to Using Manychat for WhatsApp"
    },
    {
      id: 3,
      imageUrl: "/images/w3.png",
      title: "Another Exciting Post",
      description: "Manychat Launches WhatsApp Chat Marketing Automation "
    }
  ];

  return (
    <div className="relative pt-2 lg:pt-2 min-h-screen mt-16 bg-purple-100">
      <div
        className="bg-cover w-full flex justify-center items-center"
        style={{ backgroundImage: "url('/images/mybackground.jpeg')" }}
      >
        <div className="w-full p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
          <div className="w-full mx-auto rounded-2xl  p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
            {/* Title */}
            <h2 
  className="text-center mb-8 text-2xl sm:text-3xl lg:text-4xl font-extrabold"
>
  <span className="text-gray-900 dark:text-black">
    <span className="text-indigo-600 dark:text-indigo-600">Success</span> Stories From Brands Just Like Yours
  </span>
</h2>

            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto mt-24">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="relative bg-white p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border"
                >
                  <div className="relative mb-4 rounded-2xl overflow-hidden">
                    <img
                      className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:opacity-80"
                      src={post.imageUrl}
                      alt={post.title}
                    />
                    <a
                      href="/blog/slug"
                      className="absolute top-0 left-0 w-full h-full bg-opacity-60 flex items-center justify-center text-white rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
*                    </a>
                  </div>
                  <div className="flex flex-col items-center mt-4">
                    <h3 className="font-medium text-xl leading-8">
                      <a
                        href="/blog/slug"
                        className="relative group-hover:text-indigo-600 transition-colors duration-200"
                      >
                        {post.title}
                      </a>
                    </h3>
                    <p className="text-gray-500 mt-2">
                      {post.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
