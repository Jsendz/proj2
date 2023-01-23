import React from 'react'

export const Serveis = () => {
  return (
    <div className="w-full h-full lg:h-screen bg-slate-600 text-center py-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white p-10">Els nostres serveis</h2>
        <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-around lg:justify-around lg:mx-auto ">
            <div className="w-[90%]  flex flex-col justify-center mx-auto bg-white rounded-xl shadow-md text-2xl md:text-4xl font-bold my-5">
                <img className="rounded-t-xl w-full h-full" src="https://cdn.pixabay.com/photo/2015/10/09/09/55/insulation-978999_960_720.jpg" alt="" />
                <h3 className="py-2">Aillament</h3>
            </div>
            <div className="w-[90%] flex flex-col justify-center mx-auto bg-white rounded-xl shadow-md text-2xl md:text-4xl font-bold my-5">
                <img className="rounded-t-xl w-full h-full" src="https://cdn.pixabay.com/photo/2021/04/26/19/01/heat-pump-6209793_960_720.jpg" alt="" />
                <h3 className="py-2">Bomba de Calor</h3>
            </div>
            <div className="w-[90%]  flex flex-col justify-center mx-auto bg-white rounded-xl shadow-md text-2xl md:text-4xl  font-bold my-5">
                <img className="rounded-t-xl w-full h-full" src="https://cdn.pixabay.com/photo/2012/03/03/23/11/alternative-21581_960_720.jpg" alt="" />
                <h3 className="py-2">Plaques Solars</h3>
            </div>
        </div>

    </div>
  )
}
