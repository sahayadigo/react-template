import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Announcement from "../components/Announcement";

export default function Home() {
  return (
      <>
        <Navbar />
        <Announcement />
        <Products/>
      </>    
  );
};
