import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
 
   
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6"> <HeroSection/>
    
  </div>
 
  <div className="max-w-7xl mx-auto pt-20 px-6">  <FeatureSection/>
    
    </div>

    </>
  )
}

export default App
