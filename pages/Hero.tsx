import React from 'react'

export default function Hero() {
  return (
    <div className='container flex py-20'>
      <div className='flex flex-col justify-center'>
        <h1 className='text-orange-400 font-semibold text-2xl pb-3'>Aprende a invertir</h1>
        <p className='pb-3'>Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
        <div>
          <button className='border p-2 rounded mr-3 border-orange-300 bg-orange-50'>
            <span className='text-orange-400 '>Informate</span>
            </button>
          <button className='border p-2 rounded border-orange-300 bg-orange-50'>
            <span className='text-orange-400 '>Aprendé</span>
          </button>
        </div>
      </div>
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KEdNtmzDROw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  )
}