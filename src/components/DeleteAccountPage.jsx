import React, { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, deleteUser, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { logOut } from "../user/userSlice";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const DeleteAccount = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const db = getFirestore();

  const [isClick, setIsClick] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, password, uid } = useSelector((state) => state.userSlice.user);
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleDelete = async (e) => {
    e.preventDefault();

    if (email === userData.email && password === userData.password) {
      if (!user) return;

      const credential = EmailAuthProvider.credential(user.email, userData.password);

      try {
        await reauthenticateWithCredential(user, credential);
        await deleteDoc(doc(db, "Users", uid));
        await deleteUser(user);
        dispatch(logOut());
        navigate("/");
        toast.success("Account deleted successfully!");

      } catch (error) {
        console.error("Error deleting user:", error);
        toast.error("Failed to delete account. Please try again.");
      }
    } else {
      toast.error("Incorrect email or password!");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col bg-[#0A0A16] text-[white]">
      <form className="px-[40px] py-[40px] border-[2px] border-[#797979] rounded-xl flex flex-col gap-[15px]">
        <h1 className="text-center pb-[10px]">
          Are you sure? <br /> This action is irreversible
        </h1>
        <div className="w-fit relative">
          <input
            type="email"
            className="bg-transparent border-b border-gray-500 py-[5px] outline-none text-[15px] w-[230px]"
            placeholder="E-mail"
            onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
          />
        </div>
        <div className="w-fit relative">
          <input
            type={isClick ? "text" : "password"}
            className="bg-transparent border-b border-gray-500 py-[5px] outline-none text-[15px] w-[230px]"
            placeholder="Password"
            onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))}
          />
          <span
            onClick={() => setIsClick(!isClick)}
            className="absolute right-2 cursor-pointer top-1/2 -translate-y-1/2 text-[#d5d5d5]"
          >
            {isClick ? <AiOutlineEyeInvisible /> : <FaEye />}
          </span>
        </div>
        <button
          onClick={handleDelete}
          type="button"
          className="w-full bg-[#909090a2] text-[red] py-[5px] rounded-md"
        >
          Delete Account
        </button>
      </form>
    </div>
  );
};

export default DeleteAccount;
