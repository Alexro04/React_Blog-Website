import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import Container from '../Container/Container'
import Logo from '../Logo'
import LogoutBtn from './LogoutBtn'
import write from '../../assets/icons/write-icon-com.svg'

function Header() {
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
      image: write
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

          <ul className='list-none flex items-center gap-7'>
            {
              navItems.map((item) => item.status ? (
                <li key={item.name} className='flex gap-1 justify-center text-sm items-center opacity-60 hover:opacity-100 hover:scale-105 hover:transition-all'>
                  {
                    item.image && <img src={item.image} alt={item.name} className='w-5 h-5' />
                  }
                  <button
                  className='bg-transparent border-none flex items-center'
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