import React from 'react'

function Button({
  children,
  bgColor,
  textColor,
  type,
  className = '',
  ...props
}) {
  return (
    <button
    type={type}
    className={`w-fit px-4 py-3 ${bgColor} ${textColor} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button