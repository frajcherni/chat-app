import React from 'react';
import HeroSection from './components/HeroSection';
import TestimonialsList from './components/TestimonialsList';
import CardSection from './components/CardSection';
import Testimonial  from './components/Testimonial';
const App = () => {
  return (
    <div 
      style={{ 
        background: 'linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)', 
        minHeight: '1200', 
      }}
    >
      <HeroSection />
      <TestimonialsList />
      <CardSection />
      <Testimonial />

    </div>
  );
};

export default App;


