import React, { useRef } from 'react'
import Input from './Input'

function Searchbar({
  rounded
}) {
  const ref = useRef()
  return (
    <div class="w-2/5 flex">
      <form className={`${rounded} flex border border-gray-400 border-solid py-2 px-3 flex-1 justify-between`}>
        <Input
          type='text'
          ref={ref}
          className='border-none focus:outline-none placeholder:text-sm px-2 py-0.5'
          placeholder = 'Search...'
        />
        <button type="submit" className="bg-transparent border-none p-0">
          <img src="images/search-svgrepo-com.svg" alt="Search-icon" />
        </button>
      </form>
    </div>
  )
}

export default Searchbar