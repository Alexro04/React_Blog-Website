import React, { forwardRef, useId } from 'react'

function Input({
  label,
  ref,
  type = 'type',
  className = '',
  placeholder,
  ...props
}) {
  const id = useId()
  return (
    <div>
      { label && (<label
        htmlFor={id}
      >{label}</label>)}

      <input 
      id={id}
      ref={ref}
      type={type}
      placeholder={placeholder}
      className={`w-full ${className}`} {...props}/>
    </div>
  )
}

export default forwardRef(Input);