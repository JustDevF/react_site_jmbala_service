import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import les composants de pages
import Home from './pages/Home'
/*
import About from './pages/About'
import Contact from './pages/Contact'
import Projet from './pages/Projets'
import Services from './components/Services'
import Error from './pages/Error'
import ContactSubmit from './pages/ContactSubmit'
import ProjetPro from './pages/projetPro'
*/
//import components
import Navbar from './components/Navbar'
//import Footer from './components/Footer'

//Component
function App() {
  //La structure de Navigation, présentation de page, composants et liens 
  return (
    <Router>
       <Navbar />
       <Routes>
         <Route exact path="/" element={<Home />}>
         </Route>
      </Routes> 
    </Router>
  )
}

export default App