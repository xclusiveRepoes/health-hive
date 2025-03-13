import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { isLoadingClicked, updateUser } from "../user/userSlice";

const PersonalAssitantForm = ({ isEditClicked, setIsEditClicked }) => {
  const dispatch = useDispatch();

  const [userDets, setUserDets] = useState({
    weight: "",
    height: "",
    sugarLevel: "",
    diabeticHistory: "",
  });
  const userDetails = useSelector((state) => state.userSlice.user);

  useEffect(() => {
    if (isEditClicked) {
      setUserDets({
        weight: userDetails.weight,
        height: userDetails.height,
        sugarLevel: userDetails.sugarLevel,
        diabeticHistory: userDetails.diabeticHistory,
      });
    }
  }, [isEditClicked]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(isLoadingClicked())
    try {
      const userRef = doc(db, "Users", userDetails.uid);
      await updateDoc(userRef, { ...userDets });
      dispatch(updateUser(userDets));
      setIsEditClicked(false);
      toast.success("Your health data has been updated!", {
        position: "top-center",
        autoClose: 3000,
      });
      setUserDets({
        weight: "",
        height: "",
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
        type="number"
        required
        value={userDets.weight}
        onChange={(e) =>
          setUserDets((prev) => ({ ...prev, weight: e.target.value }))
        }
        placeholder="Weight (kg)"
        className="bg-transparent border-b-[2px] border-gray-500 outline-none py-[4px] w-[100%] md:text-center"
      />
      <input
        type="number"
        required
        value={userDets.height}
        onChange={(e) =>
          setUserDets((prev) => ({ ...prev, height: e.target.value }))
        }
        placeholder="Height (feet)"
        className="bg-transparent border-b-[2px] border-gray-500 outline-none py-[4px] w-[100%] md:text-center"
      />
      <input
        type="number"
        value={userDets.sugarLevel}
        onChange={(e) =>
          setUserDets((prev) => ({ ...prev, sugarLevel: e.target.value }))
        }
        placeholder="Sugar Level (2 hours after meal) (optional)"
        className="bg-transparent border-b-[2px] border-gray-500 outline-none py-[4px] w-[100%] md:text-center"
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
