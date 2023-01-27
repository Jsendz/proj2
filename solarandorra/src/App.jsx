

import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Info } from './components/Info';
import { Instalacion } from './components/Instalacion';
import { Contact } from './Components/Contact';

import { Chackra } from './Components/Chackra';



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      
      <Instalacion />
      <Chackra />
      <Info />
      <Contact />
     
    </div>
  );
}

export default App;