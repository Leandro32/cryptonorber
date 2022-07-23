import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div className='container py-20'>
      <h2 className='text-center text-slate-800 pb-7 text-2xl'>Acerca de mi</h2>
      <div className='flex'>
        <div>
          <p className='py-2'>Entusiasta de la tecnología y la innovación. Con formación en Ingeniería informática, y más de 20 años de experiencia en commerce, data centers, servicios de infraestructura y telecomunicaciones.</p>
          <p className='py-2'>Trabajé durante más de 13 años en una de las Big 4 configurando soluciones de Servicios de tecnología, procesos de negocios y como responsable de los proyectos Blockchain para Latinoamérica.</p>
          <p className='py-2'>A fines de 2013 incursioné de lleno en las Criptomonedas comenzando con Minería con ASIC y GPU para minar Bitcoin y Litecoin.</p>
        </div>
        <div className='h-80 w-auto'>
          <img src="/assets/NORBER1.png" className='h-full'/>
        </div>
      </div>
      <div>
        <div>
          <img src="/assets/NORBER2.png" className='h-full'/>
        </div>
        <div>
          <p className='py-2'>Desde el 2016 hasta la fecha me especialicé en fundamentals cripto, inversiones digitales, minería y trading, en paralelo con mi trabajo en relación de dependencia donde lidero gran cantidad de proyectos Blockchain para servicios financieros, identidad digital y supply chain.</p>
          <p className='py-2'>Participé de grandes conferencias internacionales de la industria y realicé varios artículos en diarios y programas de televisión.</p>
          <p className='py-2'>Soy un fiel creyente de la LIBERTAD como activo principal, pionero de los activos digitales, Bitcoin hodler y early adopter.</p>
        </div>
      </div>
    </div>
  )
}

export default About