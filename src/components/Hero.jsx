import React from 'react'
import Typed from 'react-typed'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init({
  duration: 1200,
}); 

export const Hero = () => {
  return (
    <div className="text-cream">      
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center" >
          <p className="text-goldenrod font-bold p-2">LEVEL UP YOUR BUSINESS</p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with me.</h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold">DEI means</p>
            <Typed className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
            strings={['support', 'community', 'legacy']} typeSpeed={120} backSpeed={140} loop/>
          </div>
          <p className="md:text-2xl text-xl font-bold text-teal py-4">I am a business elevation specialist, and I want to help you level up your business.</p>
          <button className="text-xl bg-goldenrod w-[200px] rounded-md font-bold my-6 mx-auto py-3">Get Started</button>
        </div>

      <div className="item" data-aos="fade-up">1</div>
      <div className="item" data-aos="fade-down">2</div>
      <div className="item" data-aos="fade-right">3</div>
      <div className="item" data-aos="fade-left">4</div>
      
      <div className="item" data-aos="zoom-in">5</div>
      <div className="item" data-aos="zoom-out">6</div>
      
      <div className="item" data-aos="slide-up">7</div>
      
      <div className="item" data-aos="flip-up">8</div>
      <div className="item" data-aos="flip-down">9</div>
      <div className="item" data-aos="flip-right">10</div>
      <div className="item" data-aos="flip-left">11</div>
    </div>
  )
}
