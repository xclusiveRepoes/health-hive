import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import { doc, getDoc } from "firebase/firestore";

const PersonalDetsShowcase = () => {

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

    let bmi = () => {
        if(userDetails && userDetails.weight && userDetails.height){
            return Number(userDetails.weight) / (Number(userDetails.height) * Number(userDetails.height))
        }
    }

    useEffect(() => {
        fetchUserData()
    }, [])

  return (
    <div className="">
        <h1 className="py-[20px]">Your Health Metrics</h1>
        <table className="w-full">
            <tr className="border-gray-600 border-[2px] text-center">
                <td className="border-r-[2px] border-gray-600 w-1/2">Weight</td>
                <td>{userDetails && userDetails.weight}kg</td>
            </tr>
            <tr className="border-gray-600 border-[2px] text-center">
                <td className="border-r-[2px] border-gray-600 w-1/2">height</td>
                <td>{userDetails && userDetails.height} meter</td>
            </tr>
            <tr className="border-gray-600 border-[2px] text-center">
                <td className="border-r-[2px] border-gray-600 w-1/2">BMI</td>
                <td>{userDetails && bmi().toFixed(2)} kg/m<sup>2</sup></td>
            </tr>
            <tr className="border-gray-600 border-[2px] text-center">
                <td className="border-r-[2px] border-gray-600 w-1/2">Sugar Level</td>
                <td>{userDetails && userDetails.sugarLevel}</td>
            </tr>
            <tr className="border-gray-600 border-[2px] text-center">
                <td className="border-r-[2px] border-gray-600 w-1/2">Family Diabetic History</td>
                <td>{userDetails && userDetails.diabeticHistory}</td>
            </tr>
        </table>
    </div>
  );
};

export default PersonalDetsShowcase;
