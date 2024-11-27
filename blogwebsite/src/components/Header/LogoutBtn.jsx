import React from 'react'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useDispatch } from 'react-redux'

function LogoutBtn() {
  const dispatch = useDispatch()

  const handleLogout = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })
  } 
  return (
    <button
    className='py-1.5 px-3 text-red-800 rounded-md border border-solid border-red-300 hover:bg-red-800 hover:border-none hover:text-white transition-all'
    onClick={handleLogout}
    >Logout</button>
  )
}

export default LogoutBtn