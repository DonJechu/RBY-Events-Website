
import './App.css';
import Brands from './Components/Brands/brands';
import HeroSection from './Components/Hero/hero';
import Navbar from './Components/Navbar/navbar';
import Service from './Components/Services/services';
import Statistics from './Components/Statistics/statistics';

import Footer from './Components/Footer/footer.jsx';
import { Analytics } from '@vercel/analytics/react';
import { Routes, Route } from 'react-router-dom';
import ResumeNew from './Components/Resume/ResumeNew.js';

function App() {

  return (
    <>
      <div >

        <Navbar />


        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/resume' element={<ResumeNew />} />

          {/* <Route path='/' element={<Statistics />} />

          <Route path='/' element={<Service />} />

          <Route path='/' element={<Analytics />} />


          <Route path='/' element={<Brands />} /> */}



          {/* </Route> */}
        </Routes>




      </div>

    </>
  );
}

export default App;
