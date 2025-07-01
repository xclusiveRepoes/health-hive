import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import PersonalAssitantForm from "../components/PersonalAssitantForm";
import PersonalDetsShowcase from "../components/PersonalDetsShowcase";
import HealthAnalysis from "../components/HealthAnalysis";
import { useNavigate } from "react-router-dom";

const PersonalAssitance = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const navigate = useNavigate();

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
    setIsEditClicked(isEdit);
  };

  return (
    <div className="w-full min-h-screen bg-[#c8fcbe24] lg:flex items-center justify-center px-[10px] sm:px-[40px] pb-[50px] py-[20px] text-[#2C3E50] pt-[80px] text-[15px] sm:text-[17px]">
      <div className="w-full h-full lg:w-[80%]">
        <h1 className="capitalize hero text-[35px]">
          <span className="italic mr-[5px]">Hi</span>{" "}
          {userDetails && userDetails.name}
          <div className="hi origin-bottom-right inline-block text-[40px]">
            👋
          </div>
        </h1>
        <div className="pt-[30px] text-[15px] sm:text-[17px]">
          <h1>
            Let's Check Your <span className="italic">Health</span>
          </h1>
          <PersonalAssitantForm
            isEditClicked={isEditClicked}
            setIsEditClicked={setIsEditClicked}
          />
          <PersonalDetsShowcase handleEdit={handleEdit} />
          <HealthAnalysis />
          <div className="w-full flex flex-col gap-[10px] items-center justify-center py-[20px]">
            <button
              onClick={() => {
                navigate("/diet-chart");
              }}
              className="px-[20px] py-[8px] bg-green-600 text-gray-100 rounded-md cursor-pointer hover:bg-green-700 transition-colors duration-200 hover:drop-shadow-md"
            >
              Get Your Personalised Diet Chart!
            </button>
            <button
              onClick={() => {
                navigate("/personalized-workout");
              }}
              className="px-[20px] py-[8px] bg-blue-600 text-gray-100 rounded-md cursor-pointer hover:bg-blue-700 transition-colors duration-200 hover:drop-shadow-md"
            >
              Get Your Personalized Workout List!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalAssitance;
