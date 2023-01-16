import React from 'react'

export const Hero = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-green-400 to-white flex"  >
        
         <div className="h-full my-auto text-center md:flex-col  items-center justify-center ">
        <h2 className="text-6xl font-extrabold text-slate-800">La tranquilidad de la energia verde en tu hogar.</h2>
        <p className="text-2xl text-slate-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, a.</p>
        <button>info</button>
        </div>
        <div>
          <div className="flex-col">
            <div className="flex">
            <img src="https://cdn.pixabay.com/photo/2017/09/29/18/18/photovoltaic-2799982_960_720.jpg" alt="" /><img src="https://cdn.pixabay.com/photo/2015/09/17/12/06/solar-panels-944002_960_720.jpg" alt="" />
            </div>
            <div className="flex">
            <img src="https://cdn.pixabay.com/photo/2017/09/29/18/18/photovoltaic-2799982_960_720.jpg" alt="" /><img src="https://cdn.pixabay.com/photo/2015/09/17/12/06/solar-panels-944002_960_720.jpg" alt="" />
            </div>
          </div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2021/07/20/21/53/house-6481809_960_720.png" alt="" />
          </div>
        </div>
        

    </div>
  )
}
