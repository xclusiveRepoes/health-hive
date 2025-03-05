import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { setDoc, doc } from "firebase/firestore"; 

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    retypePass: "",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (newUser.password === newUser.retypePass && newUser.password.length >= 6) {
      try{
        await createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
        const user = auth.currentUser;
        if(user){
          await setDoc(doc(db, 'Users', user.uid), {
            name: newUser.name,
            email: user.email,
            age: newUser.age,
            uid: user.uid, 
            password: newUser.password,
            weight: '',
            height: '',
            bloodPressure: '',
            sugarLevel: '',
            diabeticHistory: '',
          })
        }
      }
      catch(err) {
        console.error(err)
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
      })
    } else {
      toast.error("Password must be at least 6 characters long!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
    if(newUser.password !== newUser.retypePass){
      toast.error("Passwords did not match!", {
        position: "top-center",
        autoClose: 3000,
      });
    } 
  };


  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#181818]">
      <form
        onSubmit={handleSubmit}
        className="px-[80px] py-[40px] border border-[#797979] rounded-xl flex flex-col gap-[15px]  text-white"
      >
        <div>
          <input
            value={newUser.name}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, name: e.target.value }))
            }
            type="text"
            className="bg-transparent border capitalize border-gray-500 px-[10px] py-[5px] rounded-md  text-white"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            value={newUser.age}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, age: e.target.value }))
            }
            type="text"
            className="bg-transparent border border-gray-500 px-[10px] py-[5px] rounded-md  text-white"
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
            className="bg-transparent border border-gray-500 px-[10px] py-[5px] rounded-md text-white"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            value={newUser.password}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, password: e.target.value }))
            }
            type="password"
            className="bg-transparent border border-gray-500 px-[10px] py-[5px] rounded-md text-white"
            placeholder="Create your password"
            required
          />
        </div>
        <div>
          <input
            value={newUser.retypePass}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, retypePass: e.target.value }))
            }
            type="password"
            className="bg-transparent border border-gray-500 px-[10px] py-[5px] rounded-md text-white"
            placeholder="Retype your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-[7px] rounded-md"
        >
          Sign up
        </button>
        <div>
          <h1 className="text-[14px] text-center">Already have an account? <Link to={'/login'}><span className="text-green-500 cursor-pointer underline font-medium">Log in</span></Link></h1>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
