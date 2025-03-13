import React from "react";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Seasonal from "./pages/Seasonal";
import Footer from "./components/Footer";
import PersonalSession from "./pages/PersonalSession";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";

const App = () => {
  const {user, isLoading} = useSelector((state) => state.userSlice);
  return (
    <div className="bg-[#c8fcbe24] text-[#2C3E50] relative">
      {/* {
        isLoading && <Loading />
      } */}
      <Hero />
      {user.uid && (
        <div className="">
          <About />
          <Services />
          <PersonalSession />
          <Blog />
          <Seasonal />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
