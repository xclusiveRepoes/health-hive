import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase-config'
import { doc, getDoc } from 'firebase/firestore'
import PersonalAssitantForm from '../components/PersonalAssitantForm'
import PersonalDetsShowcase from '../components/PersonalDetsShowcase'

const PersonalAssitance = () => {
    const [userDetails, setUserDetails] = useState(null)
  
    const fetchUserData = async () => {
      auth.onAuthStateChanged(async(user) => {
        const docRef = doc(db, 'Users', user.uid);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
          setUserDetails(docSnap.data());
        }
      })
    }

    useEffect(() => {
        fetchUserData()
    }, [])


  return (
    <div className='w-full min-h-screen bg-[#c8fcbe24] px-[40px] py-[20px] text-[#2C3E50]'>
        <h1 className='capitalize hero text-[35px]'><span className='italic'>Hi</span> {userDetails && userDetails.name}<div className="hi origin-bottom-right inline-block text-[40px]">👋</div></h1>
        <div className='pt-[30px] text-[19px]'>
          <h1>Let's Check Your <span className='italic'>Health</span></h1>
          <PersonalAssitantForm />
          <PersonalDetsShowcase />
        </div>
    </div>
  )
}

export default PersonalAssitance