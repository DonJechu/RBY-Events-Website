import './App.css';
import Brands from './Components/Brands/brands';
import HeroSection from './Components/Hero/hero';
import Navbar from './Components/Navbar/navbar';
import Service from './Components/Services/services';
import Statistics from './Components/Statistics/statistics';
import Footer from './Components/Footer/footer.jsx';
import { Analytics } from '@vercel/analytics/react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './Components/Portfolio/portfolio.js';
import NotFoundPage from './Components/NotFoundPage/404.js';

import Products from './Components/Products/index.js';
import Products01 from './Components/Products/p01.js';
import Products02 from './Components/Products/p02.js';
import Products03 from './Components/Products/p03.js';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/portfolio/servers' element={<Portfolio />} />
          <Route path='/portfolio/server' element={<Portfolio />} />
          <Route path='/portfolio/3d' element={<Portfolio />} />

          <Route path='/products' element={<Products />} />
          <Route path='/product' element={<Products />} />

          <Route path='/products/01' element={<Products01 />} />
          <Route path='/products/1' element={<Products01 />} />

          <Route path='/products/02' element={<Products02 />} />
          <Route path='/products/2' element={<Products02 />} />

          <Route path='/products/03' element={<Products03 />} />
          <Route path='/products/3' element={<Products03 />} />

          {/* Agrega la ruta NotFoundPage */}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Analytics />
      </div>
    </>
  );
}

export default App;
