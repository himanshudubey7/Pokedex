import React from "react";
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer";
import "./HomeLayout.css";

function HomeLayout({ children }) {
  return (
    <div className="home-layout">
     <h1 className="layout-title">POKÉDEX</h1>
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export default HomeLayout;
