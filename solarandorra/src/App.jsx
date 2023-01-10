

import { Hero } from './components/Hero';

import { Navbar } from './components/Navbar';
import { Serveis } from './components/Serveis';
import { Instalacion } from './components/Instalacion';



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      
      <Serveis />
      <Instalacion />
     
    </div>
  );
}

export default App;