import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import ImmunityBoost from './Subpages/ImmunityBoost'
import Mindful from './Subpages/Mindful'
import MindfulActivities from './Subpages/MindfulActivities'
import MindfulnessAudiences from './Subpages/MindfulnessAudiences'
import NutriGuide from './Subpages/NutriGuide'
import SleepAndRelaxation from './Subpages/SleepAndRelaxation'
import SubMindful from './Subpages/SubMindful'
import SubPositive from './Subpages/SubPositive'
import SubStress from './Subpages/SubStress'
import WellnessCheck from './Subpages/WellnessCheck'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './components/Contact'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'

const Pagination = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/immunity-boost' element={<ImmunityBoost />} />
          <Route path='/mindful' element={<Mindful />} />
          <Route path='/mindful-activities' element={<MindfulActivities />} />
          <Route path='/mindfullness-audience' element={<MindfulnessAudiences />} />
          <Route path='/nutriguide' element={<NutriGuide />} />
          <Route path='/sleep-and-relaxation' element={<SleepAndRelaxation />} />
          <Route path='/submindful' element={<SubMindful />} />
          <Route path='/subpositive' element={<SubPositive />} />
          <Route path='/sub-stress' element={<SubStress />} />
          <Route path='/wellness-check' element={<WellnessCheck />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Pagination