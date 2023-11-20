
import './App.css';
import Brands from './Components/Brands/brands';
import HeroSection from './Components/Hero/hero';
import Navbar from './Components/Navbar/navbar';
import Service from './Components/Services/services';
import Statistics from './Components/Statistics/statistics';

import Footer from './Components/Footer/footer.jsx';

import {Analytics} from "@vercel/analytics/react"

function App() {

  return (
    <>
      <div >
        <Navbar />
        <HeroSection />
        <Statistics />
        <Service />
        <Brands />
        <Footer />
      </div>
    <Analytics />
    </>
  );
}

export default App;
