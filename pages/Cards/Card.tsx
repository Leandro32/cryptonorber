import React from 'react'
import Image from 'next/image'

function Card() {
  return (
    <div className='bg-slate-50 rounded-2xl card flex p-4 mx-4 border border-slate-200'>
      <div className='flex'>
        <Image
          src="/assets/btclogo.png"
          width={50}
          height={50}
          />
      </div>
      <div className='flex flex-col justify-around grow'>
        <h3>BTC</h3>
        <span className='text-slate-600'>$21.234</span>
      </div>
      <div className='flex text-green-700 items-end'>
        <span>+0,2%</span>
      </div>
    </div>
  )
}

export default Card