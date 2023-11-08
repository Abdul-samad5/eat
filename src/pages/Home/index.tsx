import React from 'react'
import Hero from './Hero'
import Affordable from './Affordable'
import Ready from './Ready'
import Unique from './Unique'
import Testimony from './Testimony'
import Counter from './Counter'
import Header from '../HeaderAndFooter/Header'
import Footer from '../HeaderAndFooter/Footer'
import TrendingSlider from '@/components/Slider/TrendingSlider'
import Download from '@/components/Download'

function index() {
  return (
    <div>
        <Header />
        <Hero/>
        <Affordable/>
        <Ready/>
        <Unique/>
        <Testimony/>
        <Counter/>
        <TrendingSlider/>
        <Download/>
        <Footer/>
    </div>
  )
}

export default index