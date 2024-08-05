import React from 'react';
import HeroSection from './components/HeroSection';
import TestimonialsList from './components/TestimonialsList';
import CardSection from './components/CardSection';
import Testimonial from './components/Testimonial';
import UseCaseEntreprise from './components/UseCaseEntreprise';
import Businesses from './components/Businesses';
import AutomationSection from './components/Automation';
import Section3 from './components/section3';
import Features from './components/Features';
import Section4 from './components/Section4';
const App = () => {
  return (
    <div className=" min-h-screen w-full bg-costum">
      
      <HeroSection />
      <Businesses />

      <AutomationSection />

      <TestimonialsList />
      <CardSection />


      <Section3 />
      <Section4 />
      <UseCaseEntreprise />
      <Testimonial />
      
      <Features />
  
    </div>
  );
};

export default App;
