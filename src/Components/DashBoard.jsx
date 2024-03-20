import React from "react";
import SideNav from "./SideNav";
import Widgets from "./Widgets";
import Header from "./Header";

const DashBoard = () => {
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <Widgets />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
