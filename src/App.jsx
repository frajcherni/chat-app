import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import TestimonialsList from './components/TestimonialsList';
import CardSection from './components/CardSection';
import Testimonial from './components/Testimonial';
import UseCaseEntreprise from './components/UseCaseEntreprise';
import Businesses from './components/Businesses';
import AutomationSection from './components/Automation';
import Section3 from './components/section3';
import Features from './components/Features';
import InstagramComponent from './components/InstagramComponent'; 
import Header from './components/Header';
import InstagramSection from './components/Intagramsection';
import HoverImageLinks from './components/InstagramSection2';
import InstagramSection3 from './components/InstagramSection3';
import InstaSection4 from './components/InstaSection4';
import Instatestimonial from './components/Instatestimonial';
import WatsapSection1 from './components/WatsapSection1';
import WatsappSection2 from './components/WatsappSection2';
import WatsappSection3 from './components/WatsappSection3';
import TestimonialWatsap from './components/TestimonialWatsap';

import WatsappSection4 from './components/WatsappSection4';
import Solution from './components/Solution';
import WatsappSection5 from './components/WatsappSection5';
import SolutionSection2 from './SolutionSection2';
import SolutionSection3 from './components/SolutionSection3';

import WhyUs from './components/WhyUs';
import ChatbotBenefits from './components/ChatbotBenefits';
import Description from './components/Description';

import Feature from './components/Feature'
import EarthSection from './components/Earthsection'

import Pricing from './components/Pricing'
import PricingSection2 from './components/PricingSection2';
import Footer from './components/Footer';


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



<Route path="/whyus" element={
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
