

import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Info } from './components/Info';
import { Instalacion } from './components/Instalacion';
import { Contact } from './Components/Contact';
import { Serveis } from './Components/Serveis';



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      
      <Instalacion />
      <Serveis />
      <Info />
      <Contact />
     
    </div>
  );
}

export default App;