import React from 'react'

export const Navbar = () => {
  return (
    <div className="md:flex justify-between w-full h-full mx-2" >
        <h1 className="text-3xl">Solar Andorra</h1>
        <ul className="md:flex justify-between text-2xl">
            <li className="pr-4">Inici</li>
            <li className="pr-4">Serveis</li>
            <li className="pr-4">Qui som?</li>
            <li className="pr-4">Contacte</li>
        </ul>
    </div>
  )
}
