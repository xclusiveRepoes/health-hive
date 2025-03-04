import React from "react";
import Img from "../assets/pexels-pixabay-208518.webp";
import Button from "../components/Button";
import Button2 from "../components/Button2";
import LogOut from "../components/LogOut";
import { auth } from "../firebase-config";
import Img2 from './bg.webp'

const Hero = ({ userDetails }) => {
  const { age, email, name } = userDetails || {};

  const handleLogOut = async() => {
    try{
      await auth.signOut();
      window.location.href = '/login';
    } catch(error) {
      console.log(error);
    }
  }

  const component = () => {
    if (userDetails) {
      return (
        <div className="mt-[130px] flex flex-col items-end sm:px-[20px]">
          <div className="z-10 hero px-[20px] md:px-[30px] text-end">
            <h1 className="text-[white] text-[50px] sm:text-[60px] font-bold flex items-center justify-end leading-[.8]"><span className="italic mr-6">Hi</span> <span className="capitalize">{name}</span><div className="hi origin-bottom-right inline-block text-[50px]">👋</div></h1>
            <h1 className="diet text-[white] text-[50px] tracking-tight leading-[.98] capitalize mt-[30px]">Find the best diet for you</h1>
          </div>
          <div className="z-10 px-[20px] py-[20px] flex gap-[1vw]">
            <span onClick={handleLogOut}><LogOut /></span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="mt-[130px] flex flex-col items-end">
          <div className="z-10 hero px-[20px] md:px-[30px]">
            <h1 className="text-[12.5vw] font-medium leading-[.9] uppercase text-end text-white md:text-[70px] lg:text-[90px]">
              {" "}
              <span className="md:tracking-[-7px] tracking-tighter mr-2">
                Empower
              </span>{" "}
              <br />
              Your
              <br />
              <span className="tracking-wider">Health</span>
            </h1>
          </div>
          <div className="z-10 px-[20px] sm:px-[40px] py-[20px] flex gap-[1vw]">
            <Button />
            <Button2 />
          </div>
        </div>
      );
    }
  };
  return (
    <div className="relative w-full h-screen bg-black flex items-end justify-center flex-col">
      <img
        src={userDetails ? Img2 : Img}
        className={`absolute top-0 w-full h-full object-cover opacity-[.7]  ${userDetails ? 'blur-[5px]' : 'blur-[2px]'}`}
        alt=""
      />
      {component()}
    </div>
  );
};

export default Hero;
