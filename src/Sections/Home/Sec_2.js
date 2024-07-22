import React from "react";

import { NavLink } from "react-router-dom";
import { Route, Routes, Outlet } from "react-router-dom";

// Import nutrient images

import MicroBioal from "./Sec_1/MicroBioal";
import Protectant from "./Sec_1/Protectant";
import Nutrient from "./Sec_1/Nutrient";
import Organic_Fertilizer from "./Sec_1/Organic_Fertilizer";
import Special_Product from "./Sec_1/Special_Product";
import Plant_Growth from "./Sec_1/Plant_Growth";

function Sec_2() {
  return (
    <>
      <div className="sec-2">
        <h1>Product Categories</h1>

        <div className="card-container">
          <MicroBioal />
          <Organic_Fertilizer />
          <Nutrient />
          <Plant_Growth />
          <Protectant />
        </div>
      </div>
    </>
  );
}

export default Sec_2;
