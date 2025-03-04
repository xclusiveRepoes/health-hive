import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to="/login">
      <div className="logIn px-[25px] border py-[4px] cursor-pointer text-white rounded-xl relative">
        <h1 className="text-[19px] z-10 ">Log in</h1>
      </div>
    </Link>
  );
};

export default Button;
