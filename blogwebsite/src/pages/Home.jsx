import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import homeImage from '../assets/images/homepic.jpg'

function Home() {

  return (
    <section className="h-full w-full flex relative justify-between items-center mt-10">
      <div className="ml-10 flex flex-col gap-2">
        <div className='text-5xl m-0 whitespace-nowrap'>
          <h1>Echoes of Expression: </h1>
          <h1>A Platform for Poetic Souls</h1>
        </div>
        <p className=' text-2xl m-1'>"Every word is a brushstroke on the canvas of your story."</p>
        <Link to='/signup'>
          <Button className="w-fit rounded-3xl border-none whitespace-nowrap" bgColor='bg-gray-800' textColor='text-white'>Get Started</Button>
        </Link>
      </div>
      <div className="w-2/6 min-w-96 mr-10">
        <img src={homeImage} alt="Express your thoughts" />
      </div>
    </section>
  )
}

export default Home