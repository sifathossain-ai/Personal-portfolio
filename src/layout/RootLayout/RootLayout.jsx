import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="container mx-auto lg:px-24">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
