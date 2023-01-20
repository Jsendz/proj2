import React from 'react'

export const Serveis = () => {
  return (
    <div className="h-full min-h-screen w-full overflow-hidden flex flex-col md:flex-row justify-around items-center max-w-7xl mx-auto bg-slate-400" >
      <div className="relative w-full">
        <div className="absolute w-40 h-40 bg-teal-400 rounded-full -left-20 -top-20 -z-10"></div>
        <div className="absolute w-40 h-40 bg-teal-400 rounded-lg -right-10 -bottom-20"></div>
        <div className="w-[90%] mx-auto h-full z-10">
          <img className="rounded-xl shadow-md z-10" src="https://cdn.pixabay.com/photo/2017/11/11/17/05/solar-system-2939551_640.jpg" alt="" />
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-between items-center">
        <div className="w-full h-full flex flex-col justify-between">
        <h3 className="text-green-500 text-md md:text-2xl font-bold ">Sobre Nosaltres</h3>
        <h2 className="font-bold text-2xl md:text-4xl">La nostra empresa en numeros</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore atque tenetur officiis. Fuga odit, eaque rerum magni enim expedita facilis tenetur voluptatem debitis, explicabo esse consequatur asperiores tempore excepturi voluptates.</p>
        </div>
        <div className="w-full h-full flex flex-col md:flex-row justify-between items-center">
        <div>
          <div></div>
          <button>Projectes</button>

        </div>
        <div>
          <div></div>
          <button>Treballadors</button>

        </div>
        </div>

      </div>
  
    </div>
  )
}