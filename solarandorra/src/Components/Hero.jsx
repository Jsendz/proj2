import React from 'react'

export const Hero = () => {
  return (
    <div className="h-screen pt-24 md:pt-0 flex flex-col md:flex-row"  >
        
         <div className="w-full h-full my-auto text-center flex flex-col  items-center justify-center ">
        <h2 className="text-6xl font-extrabold text-slate-800 py-4">La tranquilidad de la energia verde en tu hogar.</h2>
        <p className="text-2xl text-slate-400 py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, a.</p>
        <button className="py-4 px-6 bg-slate-800 text-white rounded-lg  ">Como funciona?</button>
        </div>
        <div className="w-full flex justify-center items-center">
            <div className="p-3 ">
            <img className="rounded-lg" src="https://static.vecteezy.com/system/resources/previews/000/663/027/non_2x/vector-solar-panel-isometric-illustration.jpg" alt="" />
            </div>
          </div>
        
        

    </div>
  )
}
