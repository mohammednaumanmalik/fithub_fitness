import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Features from "./Features";
import Offer from "./Offer";
import Search from "./Search";
import About from "./About";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";

function Parent() {
  return (
    <>
      <div>
        <Navbar />

        <Header path="/header" element={<Header />} />
        <Features path="/features" element={<Features />} />
        <Offer path="/offer" element={<Offer />} />
        <Search path="/search" element={<Search />} />

        <About path="/about" element={<About />} />
        <Contact path="/contact" element={<Contact />} />
      </div>
    </>
  );
}
export default Parent;
