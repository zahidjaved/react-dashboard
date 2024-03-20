import React from "react";
import Charts from "./Charts";
import Security from "./Security";
import History from "./History";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={Charts} />
        <Route exact path="/security" element={<Security />} />
        <Route exact path="/history" element={<History />}></Route>

        {/* <Route exact path="/*" element={<Page404 />} /> */}
      </Routes>
    </>
  );
};

export default Header;
