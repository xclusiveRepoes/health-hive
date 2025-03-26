import React, { useState } from 'react'

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FaEye } from "react-icons/fa";

import { auth, db } from '../firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser, isLoadingFalse, logIn } from '../user/userSlice'
import { doc, getDoc } from 'firebase/firestore';
const login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isClick, setIsClick] = useState(false)

    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            dispatch(addUser(docSnap.data()));
          }
        }
        else{
          dispatch(isLoadingFalse())
        }
      });
    };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(logIn());
  
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
      fetchUserData();
      toast.success("User logged in successfully");
      navigate('/')
    } catch (error) {
      dispatch({ type: "user/logOut" });
      toast.error("Email or Password is incorrect");
    }
  };



  return (
    <div className='w-full h-screen flex items-center justify-center flex-col bg-[#0A0A16] text-[white]' >
      <form onSubmit={(e) => {
        handleSubmit(e)
      }} action="" className='px-[40px] py-[40px] border-[2px] border-[#797979] rounded-xl flex flex-col gap-[15px]'>
        <h1 className='text-center pb-[10px]'>Log in your account</h1>
        <div>
          <input
          value={user.email}
          onChange={(e) => setUser((prev) => ({...prev, email: e.target.value}))}
          type="text" className='bg-transparent border-b border-gray-500 py-[5px] outline-none text-[15px] w-[230px]' placeholder='E-mail' />
        </div>
        <div className='w-fit relative'>
          <input
          value={user.password}
          onChange={(e) => setUser((prev) => ({...prev, password: e.target.value}))}
          type={isClick ? 'text' : 'password'} className='bg-transparent border-b border-gray-500 py-[5px] outline-none text-[15px] w-[230px]' placeholder='Password' />
          <span onClick={() => {setIsClick(!isClick)}} className='absolute right-2 cursor-pointer top-1/2 -translate-y-1/2 text-[#d5d5d5]'>{isClick ? <AiOutlineEyeInvisible /> : <FaEye />}</span>
        </div>
        <button type='submit' className='w-full bg-[#555555a2] text-[#D5A121] py-[5px] rounded-md'>Log In</button>
        <h1 className='text-center '>Don't have an account? <br /><Link to={'/signUp'}><span className='underline cursor-pointer font-medium text-[#D5A121]'>Sign Up</span></Link></h1>
      </form>
    </div>
  )
}

export default login
