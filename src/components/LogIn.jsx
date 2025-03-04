import React, { useState } from 'react'

import { auth } from '../firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
const login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await  signInWithEmailAndPassword(auth, user.email, user.password)
      window.location.href = '/'
      toast.success('User logged in Sucessfully')
    }catch(error) {
      toast.error('Email or Password is incorrect')
    }
  }
  return (
    <div className='w-full h-screen flex items-center justify-center bg-[#181818]'>
      <form onSubmit={(e) => {
        handleSubmit(e)
      }} action="" className='px-[40px] py-[40px] border border-[#797979] rounded-xl flex flex-col gap-[15px]'>
        <div>
          <input
          value={user.email}
          onChange={(e) => setUser((prev) => ({...prev, email: e.target.value}))}
          type="text" className='bg-transparent border border-gray-500 px-[10px] py-[5px] rounded-md text-white outline-none text-[15px] w-[230px]' placeholder='E-mail' />
        </div>
        <div>
          <input
          value={user.password}
          onChange={(e) => setUser((prev) => ({...prev, password: e.target.value}))}
          type="password" className='bg-transparent border border-gray-500 px-[10px] py-[5px] rounded-md text-white outline-none text-[15px] w-[230px]' placeholder='Password' />
        </div>
        <button type='submit' className='w-full bg-green-600 text-white py-[7px] rounded-md'>Log In</button>
        <h1 className='text-white text-center '>Don't have an account? <br /><Link to={'/signUp'}><span className='underline cursor-pointer'>Sign Up</span></Link></h1>
      </form>
    </div>
  )
}

export default login
