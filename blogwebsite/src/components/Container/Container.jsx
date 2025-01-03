import React from 'react'

export default function Container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto px-2'>{children}</div>
  )
}