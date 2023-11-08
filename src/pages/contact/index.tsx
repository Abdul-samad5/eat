import React from 'react'
import Header from '../HeaderAndFooter/Header'
import Footer from '../HeaderAndFooter/Footer'
import Hero from './Hero'
import Form from './Form'
import Download from '@/components/Download'

function index() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Form/> 
        <Download/>
        <Footer/>
    </div>
  )
}

export default index