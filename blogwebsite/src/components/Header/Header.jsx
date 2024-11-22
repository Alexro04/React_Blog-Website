import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Container from '../Container/Container'
import Logo from '../Logo'
import LogoutBtn from './LogoutBtn'
import Searchbar from '../Searchbar'

function Header({
  page
}) {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const navItems = [
    {
      name: 'Home',
      slug: {
        inactive: '/',
        active: 'all-posts'
      },
      status: true,
    },
    {
      name: 'Write',
      slug: '/add-post',
      status: authStatus,
      image: ''
    },
    {
      name: 'Login',
      slug: '/login',
      status: !authStatus
    },
    {
      name: 'Get Started',
      slug: '/signup',
      status: !authStatus
    },
  ]

  return (
    <header className='shadow'>
      <Container>
        <nav className='flex items-center justify-between px-5 h-16 border-b border-solid border-gray-200'>
          <Link to={authStatus ? '/all-posts' : '/'}>
            <Logo />
          </Link>

          { page==='all-posts' && (
            <Searchbar />
          )}

          <ul className='list-none flex items-center'>
            {
              navItems.map((item) => item.status ? (
                <li key={item.name}>
                  {
                    item.image && <img src={item.image} alt={item.name} className='w-5 h-5' />
                  }
                  <button
                  className='bg-transparent border-none text-sm flex items-center opacity-60 ml-7 hover:opacity-100 hover:scale-105 hover:transition-all'
                  onClick={() => navigate(authStatus ? item.slug.active || item.slug : item.slug.inactive || item.slug)}
                  >{item.name}</button>
                </li>
              ) : null)
            }
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>

        </nav>
      </Container>
  </header>
  )
}

export default Header