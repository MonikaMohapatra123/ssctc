
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Pages/Navbar/NavBar';
import Footer from './Pages/Footer/Footer';
import About from './Pages/About/About';
import Equipments from './Pages/Equipments/Equipments';
import Certificates from './Pages/Service/ServiceCertificates';
import Contact from './Pages/Contact/Contact';

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
        <Route path="/equipments" element={<PublicLayout><Equipments /></PublicLayout>} />
         <Route path="/Certificates" element={<PublicLayout><Certificates/></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout> <Contact/></PublicLayout>} />
      
      </Routes>
    </Suspense>
  );
};

export default App;
