import React, {useState} from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Button from './Button'
import Input from './Input'
import { useForm } from 'react-hook-form'
import { login as authLogin } from '../store/authSlice'


function createAccount() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const {register, handleSubmit} = useForm()

  const create = async (data) => {
    setError("")
    try {
      const session = await authService.createAccount(data)
      if (session) {
        const userData = await authService.getCurrentUser()
        if (userData) dispatch(authLogin({userData}))
        navigate("/all-posts")
      }
    } catch (error) {
        setError(error.message)
    }
  }

  return (
    <div className="">
      <div className="w-fit p-12">
        <div className='mb-5'>
          <h3 className='text-base'>START FOR FREE</h3>
          <h1 className='text-4xl m-0 whitespace-nowrap'>Create an account<span className='text-6xl'>.</span></h1>
          <div className="flex gap-2 mt-1">
            <p className='m-0 text-sm'>Already a member?</p>
            <Link to='/login' className='text-cyan-500 hover:underline text-sm'>Log in</Link>
          </div>
        </div>
        { error && <p className='text-sm text-red-800'>{error}</p>}
        <form onSubmit={handleSubmit(create)} className="mt-8">
          <div className="space-y-5">
            <div className="flex gap-5">
            <Input
              label="First Name"
              placeholder="First Name"
              {...register("firstName", {
                  required: true,
                  
              })}
            />
            <Input
              label="Last Name"
              placeholder="Last Name"
              {...register("lastName", {
                  required: true,
                  
              })}
            />
            </div>
            <Input
              label="Email"
              placeholder="Email Address"
              type="email"
              {...register("email", {
                  required: true,
                  
              })}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <Button type='submit' className="hover:bg-cyan-700 py-3 px-6 rounded-full bg-cyan-300 w-1/3">
                Create Account{" "}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default createAccount