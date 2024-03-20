import { useRef, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function Service() {
  return (
    <>
      <h2> this is services</h2>

      <NavLink className="navs" to="comapny">
     company
   </NavLink>
   <Outlet/>
    </>
  );
}

export default Service;
