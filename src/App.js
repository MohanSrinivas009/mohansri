import React from "react";
import "./App.css";
import { bodyContext as Body } from "./components/bodyContext";
import { navbar as Navigation } from './components/navbar';
import { bodyBackground as Background } from "./components/bodyBackground";
// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AboutPage as About } from "./components/pages/AboutPage";
import { ProjectsPage as Projects } from "./components/pages/ProjectsPage";
import { HirePage as Hire } from "./components/pages/HirePage"
import { ContactsPage as Contacts } from "./components/pages/ContactsPage";
function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="AboutPage" element={<About />} />
            <Route path="HirePage" element={<Hire/>}/>
            <Route path="ProjectsPage" element={<Projects/>}/>
            <Route path="mohansri/" element={<Body/>}/>
            <Route path="ContactsPage" element={<Contacts/>}/>
          </Routes>
        </BrowserRouter>
        <Background />
      </div>
    </>
  );
}

export default App;
