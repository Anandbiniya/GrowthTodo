import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import WorkFlow from './components/WorkFlow'
import Pricing from './components/Pricing'
import Testimonals from './components/Testimonals'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import ReactGA from 'react-ga4';

// import { Workflow } from 'lucide-react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0);
  ReactGA.initialize('Your-Measurement-ID');


  return (
    <>
     
 
   
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6"> 
    <HeroSection/>
    <FeatureSection/>
    {/* <Workflow/> */}
    <WorkFlow/>
    <Pricing/>
    <Testimonals/>
    <ContactUs/>
    <Footer/>
    </div>

    </>
  )
}

export default App
