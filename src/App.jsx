import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import WorkingProcess from './components/WorkingProcess';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif", background: '#fff', color: '#191A23', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <WorkingProcess />
      <Testimonials />
      <Footer />
    </div>
  );
}