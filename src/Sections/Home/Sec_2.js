import React from "react";

import { NavLink } from "react-router-dom";
import { Route, Routes, Outlet } from "react-router-dom";

// Import nutrient images
import Nutrient from "../../Assets/home/nutrients/nutrient.png";
import Organic_Fertilizer from "../../Assets/home/nutrients/organic.png";
import Plant_Growth from "../../Assets/home/nutrients/plant.png";
import MicroBioal from "../../Assets/home/nutrients/probiotics.png";
import Protectant from "../../Assets/home/nutrients/protectant.png";
import Special_Product from "../../Assets/home/nutrients/special.png";

const nutrientData = [
  {
    name: "Microbial Solution",
    img: MicroBioal,
    path: "microbioal",
  },
  {
    name: "Plant Growth Regulators",
    img: Plant_Growth,
    path: "plant_growth",
  },
  {
    name: "Plant Protectants",
    img: Protectant,
    path: "protectant",
  },
  {
    name: "Nutrient Solution",
    img: Nutrient,
    path: "nutrient",
  },
  {
    name: "Organic Fertilizer",
    img: Organic_Fertilizer,
    path: "organic_fertilizer",
  },
  {
    name: "Special Products",
    img: Special_Product,
    path: "special_product",
  },
];

const TabNavigation = () => {
  return (
    <nav className="tab-navigation">
      <div className="nutrient-content">
        {nutrientData.map((val, i) => {
          return (
            <div className="single-nutrient">
              <NavLink
                exact
                to={`/${val.path}`}
                className="tab"
                activeClassName="active-tab">
                <img src={val.img} alt="" /> <br />
                <p>{val.name}</p>
              </NavLink>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

function Sec_2() {
  return (
    <>
      <div className="sec-2">
        <h1>Product Range</h1>
        <TabNavigation />
        <div>
          <Routes>
            <Route path="/microbioal" element={<>microBioal</>} />
            <Route path="/plant_growth" element={<>plant_growth</>} />
            <Route path="/protectant" element={<>protectant</>} />
            <Route path="/nutrient" element={<>nutrient</>} />
            <Route
              path="/organic_fertilizer"
              element={<>organic_fertilizer</>}
            />
            <Route path="/special_product" element={<>special_product</>} />
          </Routes>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Sec_2;
