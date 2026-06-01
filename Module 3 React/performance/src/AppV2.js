import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { lazy, Suspense, useEffect, useState } from "react";

//Lazy load the components
const HomePage = lazy(() => import("./components/Homepage"));
const AboutPage = lazy(() => import("./components/Aboutpage"));
const ContactPage = lazy(() => import("./components/Contactpage"));

function AppV2() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default AppV2;
