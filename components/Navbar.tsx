import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
   <nav className='container flex content-center justify-center bg-slate-50 py-5' >
      <Image 
        className='bg-slate-500 w-1/2'
        src="/assets/logo.png"
        width={390}
        height={56} 
      />
      <div className='w-1/2'>
        <ul className='flex flex-row justify-center content-center'>
          <li className='px-5 py-3 font-medium'>Redes</li>
          <li className='px-5 py-3 font-medium'>Quién soy</li>
          <li className='px-5 py-3 font-medium'>Notas</li>
          <li className='px-5 py-3 font-medium'>Material</li>
        </ul>
      </div>
   </nav> 
  )
}

export default Navbar