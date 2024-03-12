import './App.css';
import Brands from './Components/Brands/brands';
import HeroSection from './Components/Hero/hero';
import Navbar from './Components/Navbar/navbar';
import Service from './Components/Services/services';
import Statistics from './Components/Statistics/statistics';
import Footer from './Components/Footer/footer.jsx';
import { Analytics } from '@vercel/analytics/react';
import { Routes, Route } from 'react-router-dom';
import ResumeNew from './Components/Portfolio/3D.js';
import ServerDevelopment from './Components/Portfolio/ServerDevelopment.js';
import Datapack from './Components/Portfolio/Datapack.js';
import NotFoundPage from './Components/NotFoundPage/404.js';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/portfolio/3d' element={<ResumeNew />} />
          <Route path='/portfolio/server' element={<ServerDevelopment />} />
          <Route path='/products/datapack' element={<Datapack />} />
          {/* Agrega la ruta NotFoundPage */}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
