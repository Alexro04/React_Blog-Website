import React from 'react'
import Logo from '../Logo.jsx'

function Footer() {
  return (
    <footer className='border-t border-solid border-gray-200 px-7'>
      <div className="h-20 flex justify-between items-center border-b border-solid border-gray-200">
        <Logo></Logo>

        <div className="py-0 px-12 text-xs font-thin">This is a platform that allows users to express their arts. feel free to go through other people's work, and express yourself too.</div>

        <div className="flex gap-2">
          <div className="opacity-70 grayscale flex justify-center items-center hover:grayscale-0"><img src="images/x-icon.svg" alt="x" /></div>
          <div className="opacity-70 grayscale flex justify-center items-center hover:grayscale-0"><img src="images/instagram-icon.svg" alt="instagram" /></div>
          <div className="opacity-70 grayscale flex justify-center items-center hover:grayscale-0"><img src="images/facebook-icon.svg" alt="facebook" /></div>
          <div className="opacity-70 grayscale flex justify-center items-center hover:grayscale-0"><img src="images/tiktok-icon.svg" alt="tiktok" /></div>
        </div>
      </div>

      <div className="text-xs pt-2 pb-2.5"> 2018 Copyright. All rights reserved</div>
    </footer>

  )
}

export default Footer