import React from 'react'

export const Instalacion = () => {
  return (
    <div >
        <h3 className="text-5xl font-extrabold">¿Cómo es una instalación de placas solares en una vivienda?</h3>
     <div className="md:flex justify-between h-full w-full bg-slate-500 text-center">
      <div className="w-4/5 p-4 border-r-indigo-300">
        <img  className="w-full"  src="https://sud.es/wp-content/uploads/2022/05/icono-paneles-solares-1.svg" alt="" />
        <h3 className="text-3xl p-4 underline underline-offset-8">Instalacion</h3>
        <p>Los paneles son el primer eslabón de la cadena. Los rayos solares que inciden en ellos crean una corriente eléctrica, que es la que recuperamos para llevar a tu vivienda.</p>
      </div>
      <div className="w-4/5 p-4 border-r-indigo-300">
        <img  className="w-full" src="https://sud.es/wp-content/uploads/2022/05/icono-inversor-1.svg" alt="" />
        <h3 className="text-3xl p-4 underline underline-offset-8">Inversor</h3>
        <p>El Inversor tiene dos tareas principales. La primera es ser el director de orquesta que armoniza y reúne el trabajo de todas la placas. La segunda es hacer que esa electricidad se adapte a la realidad de nuestros hogares, transformando la electricidad continua de los paneles en electricidad alterna a 220V, la de nuestros enchufes, electrodomésticos, etc.</p>
      </div>
      <div className="w-4/5 p-4 border-r-indigo-300">
        <img  className="w-full" src="https://sud.es/wp-content/uploads/2022/05/icono-bateria-1.svg" alt="" />
        <h3 className="text-3xl p-4 underline underline-offset-8">Baterias</h3>
        <p>Las baterías no son obligatorias, pero si quieres puedes almacenar en ellas la energía que no hayas utilizado durante el día -momento en que generas la electricidad gracias al sol- para aprovecharla por la noche. Así, tu consumo de electricidad externa será aún menor.</p>
      </div>
      <div className="w-4/5 p-4">
        <img  className="w-full" src="https://sud.es/wp-content/uploads/2022/05/icono-contador-digital-1.svg" alt="" />
        <h3 className="text-3xl p-4 underline underline-offset-8">Contador digital</h3>
        <p>¿Recuerdas que hace poco cambiaron el contador de nuestras casas por uno digital? Una de sus características es que es bidireccional: mide la electricidad que entra, y también la que sale. Gracias a esto tu comercializadora te podrá remunerar la energía solar que viertas a la red porque no la has utilizado. Es esencial si no tienes baterías.</p>
      </div>
     </div>
    </div>
  )
}
