// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom_bg': 'linear-gradient(143.6deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 0.2) 40%, rgba(255, 255, 255, 0) 50%, rgba(192, 132, 252, 0) 50.01%, rgba(232, 121, 249, 0.26) 70%, rgba(204, 171, 238, 0) 90%, rgba(204, 171, 238, 0) 100%), linear-gradient(to right, rgba(203, 156, 242, 0.2) 0%, rgba(251, 159, 226, 0.2) 100%)'
      },
    },
  },
  plugins: [],
}
