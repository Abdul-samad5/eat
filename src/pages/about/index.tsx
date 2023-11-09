import React from 'react'
import Header from '../HeaderAndFooter/Header'
import Footer from '../HeaderAndFooter/Footer'
import Hero from './Hero'
import About from './About'

function index() {
  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Footer/>
    </div>
  )
}

export default index