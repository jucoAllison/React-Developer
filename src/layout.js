import React from "react";
import { Route, Routes, Navigate } from "react-router";
import Home from "./pages/home/home";
import Classes from "./layout.module.css";
import SideDrawer from "./component/sideDrawer/sideDrawer";

const Layout = () => {
  return (
    <div className={Classes.layoutCover}>
      <SideDrawer />
      <div className={Classes.pageLayout}>
        <Routes>
          {/* <Navigate from="/" exact to="" /> */}
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
