import React from 'react'

const scrollRight = () => {
  // suodo
}

const scrollLeft = () => {
  // suodo
}

function Categories({categories = []}) {
  return (
    <div className="w-full flex relative border-b py-4 mb-5 border-gray-100 border-solid">
      <button className="border-none absolute left-0 z-10 text-lg bg-white px-2 border-white" onclick={scrollLeft()}>&lt;</button>
      <div className="flex justify-start overflow-x-hidden whitespace-nowrap">
        <ul className=".custon-scrollbar flex items-center list-none p-0 m-0 overflow-y-scroll gap-2">
          <li><button className="text-xl border-none bg-transparent opacity-60 hover:opacity-100 hover:bg-gray-100 rounded-full px-1.5 py-0">+</button></li>
          {
            categories.map((category) => (
              <li><a href="" className='no-underline px-3 whitespace-nowrap opacity-50 text-black hover:opacity-100'>{category}</a></li>
            ))
          }        
        </ul>
      </div>
      <button className="border-none absolute right-0 z-10 text-lg bg-white px-2" onclick={scrollRight()}>&gt;</button>
    </div>
  )
}

export default Categories