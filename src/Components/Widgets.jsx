import React from "react";
import Topbar from "./Topbar";
import Charts from "./Charts";
import Security from "./Security";
import History from "./History";
import Toggle from "./Toggle";
import Overview from "./Overview"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Widgets = () => {


  return (
    <div className="col-lg-10 bg-light">
      <div className="sidebar">
        <Topbar />

        <Routes>
          <Route exact path="/" element={<Charts />} />
          <Route exact path="/security" element={<Security />} />
          <Route exact path="/toggle" element={<Toggle />} />
          <Route exact path="/withdraw" element={<History />} />
          <Route exact path="/overview" element={<Overview />} />
          <Route exact path="/history" element={<History />}>

          </Route>

          {/* <Route exact path="/*" element={<Page404 />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Widgets;
