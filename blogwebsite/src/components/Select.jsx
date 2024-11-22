import React, { forwardRef, useId } from 'react'

function Select({
  label,
  ref,
  options = [],
  className = '',
  ...props
}) {
  const id = useId()
  return (
    <div>
      { label && (<label
        htmlFor={id}
      >{label}</label>)}

      <select 
      name=""
      ref={ref}
      className={`${className}`} {...props} 
      id={id}>
        {
          options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))
        }
      </select>
    </div>
  )
}

export default forwardRef(Select);