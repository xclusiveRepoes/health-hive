import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { setDoc, doc } from "firebase/firestore";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FaEye } from "react-icons/fa";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../user/userSlice";

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    retypePass: "",
  });
  const navigate = useNavigate()

  const [isClick, setIsClick] = useState(false);
  const [isClickTwo, setIsClickTwo] = useState(false);
  const dispatch = useDispatch()


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (newUser.password === newUser.retypePass && newUser.password.length >= 6) {
      try {
        await createUserWithEmailAndPassword(auth, newUser.email, newUser.password);
        const user = auth.currentUser;
  
        if (user) {
          await setDoc(doc(db, "Users", user.uid), {
            name: newUser.name,
            email: user.email,
            age: newUser.age,
            uid: user.uid,
            weight: "",
            height: "",
            bloodPressure: "",
            sugarLevel: "",
            diabeticHistory: "",
            password: newUser.password
          });
          navigate('/logIn');
          dispatch(logOut())
        }
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong. Try again!", {
          position: "top-center",
          autoClose: 3000,
        });
      }
  
      toast.success("User created successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
  
      setNewUser({
        name: "",
        age: "",
        email: "",
        password: "",
        retypePass: "",
      });
    } else {
      toast.error("Password must be at least 6 characters long!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  
    if (newUser.password !== newUser.retypePass) {
      toast.error("Passwords did not match!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };
  

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#0A0A16] text-white">
      <form
        onSubmit={handleSubmit}
        className="px-[50px] py-[40px] w-[330px] border border-[#797979] rounded-xl flex flex-col gap-[15px] "
      >
        <h1 className="text-[#dbdbdb] text-center">Create your account</h1>
        <div className="flex">
          <input
            value={newUser.name}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, name: e.target.value }))
            }
            type="text"
            className="bg-transparent w-full border-b capitalize border-gray-500 py-[5px] outline-none "
            placeholder="Name"
          />
        </div>
        <div className="flex">
          <input
            value={newUser.age}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, age: e.target.value }))
            }
            type="text"
            className="bg-transparent w-full border-b border-gray-500 py-[5px] outline-none "
            placeholder="Age"
          />
        </div>
        <div>
          <input
            value={newUser.email}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, email: e.target.value }))
            }
            type="email"
            className="bg-transparent w-full border-b border-gray-500 py-[5px] outline-none"
            placeholder="Email"
            required
          />
        </div>
        <div className="relative">
          <input
            value={newUser.password}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, password: e.target.value }))
            }
            type={isClick ? 'text' : 'password'}
            className="bg-transparent w-full border-b border-gray-500 py-[5px] outline-none"
            placeholder="Create your password"
            required
          />
          <span
            onClick={() => {
              setIsClick(!isClick);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            {
              isClick ? <AiOutlineEyeInvisible /> : <FaEye />
            }
          </span>
        </div>
        <div className="relative">
          <input
            value={newUser.retypePass}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, retypePass: e.target.value }))
            }
            type={isClickTwo ? 'text' : 'password'}
            className="bg-transparent w-full border-b border-gray-500 py-[5px] outline-none"
            placeholder="Retype your password"
            required
          />
          <span
            onClick={() => {
              setIsClickTwo(!isClickTwo);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            {
              isClickTwo ? <AiOutlineEyeInvisible /> : <FaEye /> 
            }
          </span>
        </div>
        <button
          type="submit"
          className="w-full bg-[#3A3A3E] rounded-md text-[#D5A121] py-[7px] outline-none"
        >
          Sign up
        </button>
        <div>
          <h1 className="text-[14px] text-center">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="text-[#D5A121] cursor-pointer underline font-medium">
                Log in
              </span>
            </Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
