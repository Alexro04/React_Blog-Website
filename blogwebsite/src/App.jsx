import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Categories from './components/Categories'
import Searchbar from './components/Searchbar'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
