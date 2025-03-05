import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const PersonalAssitantForm = () => {
  const [userDets, setUserDets] = useState({
    weight: "",
    height: "",
    bloodPressure: "",
    sugarLevel: "",
    diabeticHistory: "",
  });

  const [userDetails, setUserDetails] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userRef = doc(db, "Users", userDetails.uid);
      await updateDoc(userRef, { ...userDets });
      toast.success("Your health data has been updated!", {
        position: "top-center",
        autoClose: 3000,
      });
      setUserDets({
        weight: "",
        height: "",
        bloodPressure: "",
        sugarLevel: "",
        diabeticHistory: "",
      })
    } catch (error) {
      toast.success("Failed to update health data!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      action=""
      className="py-[15px] flex flex-col gap-[8px]"
    >
      <input
        type="text"
        value={userDets.weight}
        onChange={(e) =>
          setUserDets((prev) => ({ ...prev, weight: e.target.value }))
        }
        placeholder="Weight (kg)"
        className="border-b-[2px] border-gray-500 outline-none py-[4px] w-[100%]"
      />
      <input
        type="text"
        value={userDets.height}
        onChange={(e) =>
          setUserDets((prev) => ({ ...prev, height: e.target.value }))
        }
        placeholder="Height (meter)"
        className="border-b-[2px] border-gray-500 outline-none py-[4px] w-[100%]"
      />
      <input
        type="text"
        value={userDets.bloodPressure}
        onChange={(e) =>
          setUserDets((prev) => ({ ...prev, bloodPressure: e.target.value }))
        }
        placeholder="Blood Pressure (optional)"
        className="border-b-[2px] border-gray-500 outline-none py-[4px] w-[100%]"
      />
      <input
        type="text"
        value={userDets.sugarLevel}
        onChange={(e) =>
          setUserDets((prev) => ({ ...prev, sugarLevel: e.target.value }))
        }
        placeholder="Sugar Level (optional)"
        className="border-b-[2px] border-gray-500 outline-none py-[4px] w-[100%]"
      />
      <div className="mt-[10px]">
        <label htmlFor="">Family Diabetic History</label>
        <div>
          <input
            type="radio"
            className=""
            id="yes"
            name="diabetic_history"
            value="yes"
            onChange={(e) =>
              setUserDets((prev) => ({
                ...prev,
                diabeticHistory: e.target.value,
              }))
            }
          />
          <label htmlFor="yes" className="">
            Yes
          </label>
          <input
            type="radio"
            className="ml-[15px]"
            id="no"
            name="diabetic_history"
            value="no"
            onChange={(e) =>
              setUserDets((prev) => ({
                ...prev,
                diabeticHistory: e.target.value,
              }))
            }
          />
          <label htmlFor="no" className="">
            No
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-700 text-[white] py-[5px] rounded-md mt-[10px] font-medium"
      >
        Submit
      </button>
    </form>
  );
};

export default PersonalAssitantForm;
