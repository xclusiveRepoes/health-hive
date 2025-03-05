import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../user/userSlice";

const PersonalAssitantForm = ({isEditClicked}) => {
  const dispatch = useDispatch();

  const [userDets, setUserDets] = useState({
    weight: "",
    height: "",
    bloodPressure: "",
    sugarLevel: "",
    diabeticHistory: "",
  });
  const userDetails = useSelector((state) => state.userSlice.user);

  useEffect(() => {
    if (isEditClicked) {
      setUserDets({
        weight: userDetails.weight,
        height: userDetails.height,
        bloodPressure: userDetails.bloodPressure,
        sugarLevel: userDetails.sugarLevel,
        diabeticHistory: userDetails.diabeticHistory,
      });
    }
  }, [isEditClicked])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userRef = doc(db, "Users", userDetails.uid);
      await updateDoc(userRef, { ...userDets });
      dispatch(updateUser(userDets));
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
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to update health data!", {
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
        required
        value={userDets.weight}
        onChange={(e) =>
          setUserDets((prev) => ({ ...prev, weight: e.target.value }))
        }
        placeholder="Weight (kg)"
        className="border-b-[2px] border-gray-500 outline-none py-[4px] w-[100%] md:text-center"
      />
      <input
        type="text"
        required
        value={userDets.height}
        onChange={(e) =>
          setUserDets((prev) => ({ ...prev, height: e.target.value }))
        }
        placeholder="Height (m)"
        className="border-b-[2px] border-gray-500 outline-none py-[4px] w-[100%] md:text-center"
      />
      <input
        type="text"
        value={userDets.bloodPressure}
        onChange={(e) =>
          setUserDets((prev) => ({ ...prev, bloodPressure: e.target.value }))
        }
        placeholder="Blood Pressure (optional)"
        className="border-b-[2px] border-gray-500 outline-none py-[4px] w-[100%] md:text-center"
      />
      <input
        type="text"
        value={userDets.sugarLevel}
        onChange={(e) =>
          setUserDets((prev) => ({ ...prev, sugarLevel: e.target.value }))
        }
        placeholder="Sugar Level (optional)"
        className="border-b-[2px] border-gray-500 outline-none py-[4px] w-[100%] md:text-center"
      />
      <div className="mt-[10px]">
        <label htmlFor="">Family Diabetic History</label>
        <div>
          <input
            required
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
            required
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
