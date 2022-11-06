import Head from 'next/head'
import Image from 'next/image'
import ClientListSection from '../components/ClientListSection/ClientListSection'
import Footer from '../components/HeaderFooter/Footer'
import Header from '../components/HeaderFooter/Header'
import LeadSection from '../components/LeadSection/LeadSection'
import ServiceSlider from '../components/Slider/ServiceSlider.js/ServiceSlider'
import SocialMediaSection from '../components/SocialMedia/SocialMediaSection'

export default function Home() {
  return (
    <>
    
      <div className="bg-orange-300/30 bg-[url('../public/images/bg.jpg')] bg-no-repeat bg-cover">
        <Header />
        <LeadSection />
      </div>
      <ServiceSlider />
      <div className=''>
        <SocialMediaSection/>
      </div>
      <ClientListSection/>
      <Footer/>

    </>
  )
}
