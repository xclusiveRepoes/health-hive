import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ImmunityBoost from "./Subpages/ImmunityBoost";
import Mindful from "./Subpages/Mindful";
import MindfulActivities from "./Subpages/MindfulActivities";
import MindfulnessAudiences from "./Subpages/MindfulnessAudiences";
import NutriGuide from "./Subpages/NutriGuide";
import SleepAndRelaxation from "./Subpages/SleepAndRelaxation";
import SubMindful from "./Subpages/SubMindful";
import SubPositive from "./Subpages/SubPositive";
import SubStress from "./Subpages/SubStress";
import WellnessCheck from "./Subpages/WellnessCheck";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./components/Contact";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import PersonalAssitance from "./Subpages/PersonalAssitance";
import { useDispatch, useSelector } from "react-redux";
import { auth, db } from "./firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { addUser, isLoadingFalse } from "./user/userSlice";
import ScrollToTop from "./ScrollToTop";
import NavBar from "./components/NavBar";
import SideNav from "./components/SideNav";
import DeleteAccount from "./components/DeleteAccountPage";
import Loading from "./components/Loading";

const Pagination = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userSlice.user);
  const { isLoading } = useSelector((state) => state.userSlice);
  console.log(isLoading);

  const fetchUserData = async () => {
    try {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          try {
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              dispatch(addUser(docSnap.data()));
            }
            dispatch(isLoadingFalse()); // call even if user exists
          } catch (error) {
            console.error("Error fetching user data:", error);
            dispatch(isLoadingFalse());
          }
        } else {
          dispatch(isLoadingFalse());
        }
      });
    } catch (error) {
      console.error("Auth state change error:", error);
      dispatch(isLoadingFalse());
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {isLoading && <Loading />}
      <BrowserRouter>
        {user?.uid && <NavBar />}
        {user?.uid && <SideNav />}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/immunity-boost" element={<ImmunityBoost />} />
          <Route path="/mindful" element={<Mindful />} />
          <Route path="/mindful-activities" element={<MindfulActivities />} />
          <Route
            path="/mindfullness-audience"
            element={<MindfulnessAudiences />}
          />
          <Route path="/nutriguide" element={<NutriGuide />} />
          <Route
            path="/sleep-and-relaxation"
            element={<SleepAndRelaxation />}
          />
          <Route path="/submindful" element={<SubMindful />} />
          <Route path="/subpositive" element={<SubPositive />} />
          <Route path="/sub-stress" element={<SubStress />} />
          <Route path="/wellness-check" element={<WellnessCheck />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/personalAssitant" element={<PersonalAssitance />} />
          <Route path="/deleteAccount" element={<DeleteAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Pagination;
