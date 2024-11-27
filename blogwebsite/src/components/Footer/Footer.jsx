import React from 'react'
import Logo from '../Logo.jsx'
import X from '../../assets/icons/x-icon.svg'
import tiktok from '../../assets/icons/tiktok-icon.svg'
import instagram from '../../assets/icons/instagram-icon.svg'
import facebook from '../../assets/icons/facebook-icon.svg'

function Footer() {
  return (
    <footer className='border-t border-solid border-gray-200 px-7'>
      <div className="h-20 flex justify-between items-center border-b border-solid border-gray-200">
        <Logo></Logo>

        <div className="py-0 px-12 text-xs font-thin">"From heart to page, where poetry lives."</div>

        <div className="flex gap-2 justify-center items-center">
          <div className="opacity-70 grayscale hover:grayscale-0 hover:opacity-100">
            <img src={X} alt="X" className='w-6 min-w-6'/>
          </div>
          <div className="opacity-70 grayscale hover:grayscale-0 hover:opacity-100">
            <img src={tiktok} alt="X" className='w-6 min-w-6'/>
          </div>
          <div className="opacity-70 grayscale hover:grayscale-0 hover:opacity-100">
            <img src={instagram} alt="X" className='w-6 min-w-6'/>
          </div>
          <div className="opacity-70 grayscale hover:grayscale-0 hover:opacity-100">
            <img src={facebook} alt="X" className='w-6 min-w-6'/>
          </div>
        </div>
      </div>

      <div className="text-xs pt-2 pb-2.5"> 2018 Copyright. All rights reserved</div>
    </footer>

  )
}

export default Footer