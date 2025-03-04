import React, { useEffect, useState } from "react";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Seasonal from "./pages/Seasonal";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
import NavBar from "./components/NavBar";
import { auth, db } from "./firebase-config";
import { doc, getDoc } from "firebase/firestore";
const App = () => {
  const [userDetails, setUserDetails] = useState(null)

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async(user) => {
      const docRef = doc(db, 'Users', user.uid);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
        setUserDetails(docSnap.data());
      }
    })
  }
  console.log(userDetails);

  useEffect(() => {
    fetchUserData()
  }, [])

  

  return (
    <div className="">
      {userDetails && <NavBar />}
      <SideNav />
      <Hero userDetails={userDetails} />
      {
        userDetails && (
          <div>
            <About />
            <Services />
            <Blog />
            <Seasonal />
            <Footer />
          </div>
        )
      }
    </div>
  );
};

export default App;
