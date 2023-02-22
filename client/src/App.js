import { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BookNow from "./Components/Booknow/BookNow";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/VideoBanner/Banner";
import AuthContext from "./context/Authcontext";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Login from "./Pages/Login/Login";
import Project from "./Pages/projects/Project";
import Services from "./Pages/Services/Services";
import Backyard from "./Pages/ServicesPages/Backyard";
import Concrete from "./Pages/ServicesPages/Concrete";
import Patio from "./Pages/ServicesPages/Patio";
import Pavers from "./Pages/ServicesPages/Pavers";
import Pool from "./Pages/ServicesPages/Pool";
import Turf from "./Pages/ServicesPages/Turf";
import Virtual from "./Pages/VirtualTour/Virtual";
// import { useContext } from "react";
// import AuthContext from "./context/Authcontext";

// import axios from "axios";
// import { useState } from "react";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  // const [role, setRole] = useState();
  if (isLoggedIn) {
    console.log(`you are logged in`);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          {!isLoggedIn && <Route path="/login" element={<Login />} />}
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tours" element={<Virtual />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<BookNow />} />
          {/*  */}
          <Route path="/services/pool" element={<Pool />} />
          <Route path="/services/turf" element={<Turf />} />
          <Route path="/services/backyard" element={<Backyard />} />
          <Route path="/services/patio" element={<Patio />} />
          <Route path="/services/pavers" element={<Pavers />} />
          <Route path="/services/concrete" element={<Concrete />} />
          <Route path="*" element={<h1>Error 404 Page</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
