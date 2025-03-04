import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to={"/signUp"}>
      <div className="logIn relative px-[25px] border py-[4px] cursor-pointer text-white rounded-xl">
        <h1 className="text-[19px]">Sign up</h1>
      </div>
    </Link>
  );
};

export default Button;
