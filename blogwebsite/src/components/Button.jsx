import React from 'react'

function Button({
  content,
  bgColor,
  textColor,
  className = '',
  ...props
}) {
  return (
    <button
    className={`w-fit px-4 py-3 ${bgColor} ${textColor} ${className}`} {...props}>
      {content}
    </button>
  )
}

export default Button