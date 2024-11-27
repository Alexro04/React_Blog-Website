import React from 'react'
import logo from '../assets/images/logo.png'

function Logo() {
  return (
    <div className="w-fit">
      <img src={logo} alt="WriteBrew" className="min-w-32 w-32" />
    </div>
  )
}

export default Logo