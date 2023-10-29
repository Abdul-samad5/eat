import React from 'react'
import Header from '../HeaderAndFooter/Header'
import Footer from '../HeaderAndFooter/Footer'
import Hero from './Hero'
import Card from './Card'

function index() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default index