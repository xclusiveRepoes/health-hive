import React from "react";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Seasonal from "./pages/Seasonal";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
import NavBar from "./components/NavBar";
import PersonalSession from "./pages/PersonalSession";

const App = () => {
  
  return (
    <div className="bg-[#c8fcbe24] text-[#2C3E50]">
      <NavBar />
      <SideNav />
      <Hero />
      <div className="">
        <About />
        <Services />
        <PersonalSession />
        <Blog />
        <Seasonal />
        <Footer />
      </div>
    </div>
  );
};

export default App;
