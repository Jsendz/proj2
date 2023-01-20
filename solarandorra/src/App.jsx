

import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Serveis } from './components/Serveis';
import { Instalacion } from './components/Instalacion';
import { Contact } from './Components/Contact';



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      
      <Instalacion />
      <Serveis />
      <Contact />
     
    </div>
  );
}

export default App;