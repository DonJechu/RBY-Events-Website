import './App.css';
import Brands from './Components/Brands/brands';
import HeroSection from './Components/Hero/hero';
import Navbar from './Components/Navbar/navbar';
import Service from './Components/Services/services';
import Statistics from './Components/Statistics/statistics';
import Footer from './Components/Footer/footer.jsx';
import { Helmet } from 'react-helmet';
import { Analytics } from '@vercel/analytics/react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Agrega Navigate
import Portfolio from './Components/Portfolio/portfolio.js';
import NotFoundPage from './Components/NotFoundPage/404.js';

import Logo from './assests/logo.png'
import Products from './Components/Products/index.js';
import Products01 from './Components/Products/p01.js';
import Products02 from './Components/Products/p02.js';
import Products03 from './Components/Products/p03.js';

function App() {
  return (
    <>
      <div>
      <Helmet>
          <meta property="og:title" content="Título de la Página Principal" />
          <meta property="og:description" content="Descripción de la Página Principal" />
          <meta property="og:image" content={Logo} /> {/* Utiliza la variable Logo como contenido de la metaetiqueta */}
          {/* Agrega otras metaetiquetas que desees para la página principal */}
        </Helmet>
        <Navbar />
        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/portfolio/*' element={<Portfolio />} />
          <Route path='/portfolio/servers' element={<Portfolio />} />
          <Route path='/portfolio/server' element={<Portfolio />} />
          <Route path='/portfolio/3d' element={<Portfolio />} />

          {/* Cambia '/product' a '/products' */}
          <Route path='/products' element={<Products />} />
          <Route path='/products/*' element={<Navigate to="/products" />} /> {/* Redirige cualquier número no registrado a /products */}

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
