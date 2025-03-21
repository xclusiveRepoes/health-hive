import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import PersonalAssitantForm from "../components/PersonalAssitantForm";
import PersonalDetsShowcase from "../components/PersonalDetsShowcase";
import HealthAnalysis from "../components/HealthAnalysis";
import DietChart from "../components/DietChart";

const PersonalAssitance = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [isEditClicked, setIsEditClicked] = useState(false);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleEdit = (isEdit) => {
    setIsEditClicked(isEdit)
  };

  return (
    <div className="w-full min-h-screen bg-[#c8fcbe24] px-[40px] py-[20px] text-[#2C3E50] pt-[80px]">
      <h1 className="capitalize hero text-[35px]">
        <span className="italic mr-[5px]">Hi</span>{" "}
        {userDetails && userDetails.name}
        <div className="hi origin-bottom-right inline-block text-[40px]">
          👋
        </div>
      </h1>
      <div className="pt-[30px] text-[19px]">
        <h1>
          Let's Check Your <span className="italic">Health</span>
        </h1>
        <PersonalAssitantForm isEditClicked={isEditClicked} setIsEditClicked={setIsEditClicked} />
        <PersonalDetsShowcase handleEdit={handleEdit} />
        <HealthAnalysis />
        <DietChart />
      </div>
    </div>
  );
};

export default PersonalAssitance;
