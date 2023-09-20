import React from 'react'
import { Hero } from './Hero'
import { About } from './About'
import { Contact } from './Contact'
import { Testimonials } from './Testimonials'
import { Intro } from './Intro'

export const Home = () => {
  return (
    <div>
      <Intro />
      <Hero />
      <About />
      <Testimonials />
      <Contact />
    </div>
  )
}