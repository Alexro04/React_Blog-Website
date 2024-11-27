import React, {useState} from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Button from './Button'
import Input from './Input'
import { useForm } from 'react-hook-form'
import { login as authLogin } from '../store/authSlice'


function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const {register, handleSubmit} = useForm()

  const login = async (data) => {
    setError("")
    try {
      const session = await authService.login(data)
      if (session) {
        const userData = await authService.getCurrentUser()
        if (userData) dispatch(authLogin({userData}))
        navigate('/all-posts')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="">
      <div className="w-fit p-12">
        <div className='mb-5'>
          <h3 className='text-base'>WELCOME BACK</h3>
          <h1 className='text-4xl m-0 whitespace-nowrap'>Log into your account<span className='text-6xl'>.</span></h1>
          <div className="flex gap-2">
            <p className='m-0'>Not a member yet?</p>
            <Link to='/signup' className=''>Sign up</Link>
          </div>
        </div>
        { error && <p className='text-sm text-red-800'>{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email : "
              placeholder="Email Address"
              type="email"
              {...register("email", {
                  required: true,
                  
              })}
            />
            <Input
              label="Password : "
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <Button type='submit' className="w-full hover:bg-blue-700">
                Log in{" "}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login