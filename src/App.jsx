import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/Landing/HeroSection';
import TestimonialsList from './components/Landing/TestimonialsList';
import CardSection from './components/Landing/CardSection';
import Testimonial from './components/Testimonial'; // need to improve
import UseCaseEntreprise from './components/Landing/UseCaseEntreprise';
import Businesses from './components/Landing/Businesses';
import AutomationSection from './components/Landing/Automation';
import Section3 from './components/Landing/section3';
import Features from './components/Landing/Features';
import InstagramComponent from './components/Instagram/InstagramComponent'; 
import Header from './components/Header/Header';
import InstagramSection from './components/Instagram/Intagramsection';
import HoverImageLinks from './components/Instagram/InstagramSection2';
import InstagramSection3 from './components/Instagram/InstagramSection3';
import InstaSection4 from './components/Instagram/InstaSection4';
import Instatestimonial from './components/Instagram/Instatestimonial';
import WatsapSection1 from './components/WatsApp/WatsapSection1';
import WatsappSection2 from './components/WatsApp/WatsappSection2';
import WatsappSection3 from './components/WatsApp/WatsappSection3';
import TestimonialWatsap from './components/WatsApp/TestimonialWatsap';

import WatsappSection4 from './components/WatsApp/WatsappSection4';
import WatsappSection5 from './components/WatsApp/WatsappSection5'
import SolutionSection3 from './components/Solutions/SolutionSection3';
import SolutionSection2 from './components/Solutions/SolutionSection2';
import Solution from './components/Solutions/Solution';



import WhyUs from './components/Features/WhyUs';
import ChatbotBenefits from './components/Features/ChatbotBenefits';
import Description from './components/Features/Description';
import Feature from './components/Features/Feature'


import EarthSection from './components/Earthsection' // need to improve

import Pricing from './components/Pricing/Pricing'
import PricingSection2 from './components/Pricing/PricingSection2';

import Footer from './components/Footer'; // needs to be improved


const App = () => {
  return (
    <Router>
      <div className=''>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <AutomationSection />

              <TestimonialsList />
              <CardSection />
              <Businesses />

              <Section3 />
              <UseCaseEntreprise />
              <Features />
            </>
          } />
          <Route path="/product/instagram" element={
            <>
              <InstagramComponent />
              <InstagramSection />
              <HoverImageLinks />
                            <InstagramSection3 />
                            <Instatestimonial />
                            <InstaSection4 />


            </>
            
          } />

<Route path="/solution" element={
            <>
              <Solution />
              <SolutionSection2 />
              <SolutionSection3 />
      


            </>
            
          } />



<Route path="/Features" element={
            <>
              <WhyUs />
              <ChatbotBenefits />
              <Feature />

              <Description />
           
      


            </>
            
          } />

<Route path="/pricing" element={
            <>
              <Pricing />
              <PricingSection2 />

        
           
      


            </>
            
          } />


           <Route path="/product/watsapp" element={
            <>
              <WatsapSection1 />
              <WatsappSection2 />
              <WatsappSection3 />
              <TestimonialWatsap />

              <WatsappSection4 />
              <WatsappSection5 />

            </>
            
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
