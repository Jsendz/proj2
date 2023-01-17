import React from 'react';
import { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll';

export const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
    <div>
      <img src="https://cdn.pixabay.com/photo/2013/07/13/11/46/panel-158630_960_720.png" alt='Logo Image' style={{ width: '100px' }} />
    </div>

    {/* menu */}
    <ul className='hidden md:flex'>
      <li className="pr-2">
        <Link to='home' smooth={true} duration={500}>
          Inici
        </Link>
      </li>
      <li className="pr-2">
        <Link to='about' smooth={true} duration={500}>
          Qui Som?
        </Link>
      </li>
      <li className="pr-2">
        <Link to='skills' smooth={true} duration={500}>
          Serveis
        </Link>
      </li>
      <li className="pr-2">
        <Link to='work' smooth={true} duration={500}>
          Instalacio
        </Link>
      </li>
      <li className="pr-2">
        <Link to='contact' smooth={true} duration={500}>
          Contacte
        </Link>
      </li>
    </ul>

    {/* Hamburger */}
    <div onClick={handleClick} className='md:hidden z-10'>
      {!nav ? <FaBars /> : <FaTimes />}
    </div>

    {/* Mobile menu */}
    <ul
      className={
        !nav
          ? 'hidden'
          : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-white flex flex-col justify-center items-center'
      }
    >
      <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to='home' smooth={true} duration={500}>
          Inici
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        {' '}
        <Link onClick={handleClick} to='about' smooth={true} duration={500}>
          Qui Som?
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        {' '}
        <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
          Serveis
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        {' '}
        <Link onClick={handleClick} to='work' smooth={true} duration={500}>
          Instalacio
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        {' '}
        <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
          Contacte
        </Link>
      </li>
    </ul>

  </div>
  )
}
