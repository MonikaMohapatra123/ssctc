
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './Pages/Navbar/NavBar';
import Footer from './Pages/Footer/Footer';
import Experience from './components/Experience/Experience';
import About from './Pages/About/About';
import Equipments from './Pages/Equipments/Equipments';
import Certificates from './Pages/Service/ServiceCertificates';

const Home = lazy(() => import('./Pages/Home/Home'));

const PublicLayout = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
);

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About/></PublicLayout>} />
        <Route path="/leadership" element={<PublicLayout><Experience /></PublicLayout>} /> 
        <Route path="/equipments" element={<Equipments />} />
         <Route path="/Certificates" element={<Certificates/>} />
       
      </Routes>
    </Suspense>
  );
};

export default App;
