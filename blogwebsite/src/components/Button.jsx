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
    className={`w-fit ${bgColor} ${textColor} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button