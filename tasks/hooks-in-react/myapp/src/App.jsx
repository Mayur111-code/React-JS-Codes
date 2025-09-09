// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Usenavigate from "./Hooks-react-router-dom/Usenavigate";
import Uselocation from "./Hooks-react-router-dom/Uselocation";
import Useparams from "./Hooks-react-router-dom/Useparams";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Usestate from "./Hooks-React/Usestate";
import Useref from "./Hooks-React/Useref";
import Createcontext from "./Contextapi/Createcontext";
import UseReducer from "./Hooks-React/UseReducer";
import Usememo from "./Hooks-React/Usememo";
import Accescostomhook from "./Hooks-React/Accescostomhook";


const App = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/about/:name/:id" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>



      <Usenavigate/>
      <Uselocation/>
      <Useparams/>
      <Usestate/>
      <Useref/>
      <Createcontext/>
      <UseReducer/>
     <Usememo/>
     <Accescostomhook/>
    </>
  );
};

export default App; // ✅ Default export
