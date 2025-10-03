import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Details } from './components/Details';
import { Resources } from './components/Resources';
import { Teams } from './components/Teams';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Details />
      <Resources />
      <Teams />
      <Footer />
    </div>
  );
}

export default App;
