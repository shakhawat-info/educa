import { useState } from 'react';
import './App.css';

// components
import Nav from './components/Nav';
import Banner from './components/Banner';
import About from './components/About';
import Features from './components/Features';
import Service from './components/Service';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Banner/>
    <About/>
    <Features/>
    <Service/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default App
