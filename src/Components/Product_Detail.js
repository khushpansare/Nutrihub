import React from "react";

import Layout from "../Main Component/Layout";
import Img from "../Assets/product/product-1.png";
import {
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

function Product_Detail() {
  const location = useLocation();
  const { state } = location;

  return (
    <>
      <Layout>
        <div className="product-detail">
          <div className="sec-1">
            <div className="img">
              <img src={state.img} alt="" />
            </div>
            <div className="detail">
              <h1>{state.name}</h1>
              <table className="content-table">
                <tbody>
                  <tr>
                    <td>Pricing</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Spray</td>
                    <td> 2.5 to 5 ml/Litre</td>
                  </tr>
                  <tr>
                    <td>Drip</td>
                    <td>1 to 2 Liter/Acre</td>
                  </tr>
                  <tr>
                    <td>Pack Size</td>
                    <td>250 Ml, 500 Ml, 1 Liter, 2 Liter</td>
                  </tr>
                  <tr>
                    <td>Stock Availability</td>
                    <td>AVAILABLE</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="sec-2">
            <nav className="tab-navigation">
              <NavLink
                exact
                to="/product-info/"
                className="tab"
                activeClassName="active-tab">
                Benifits
              </NavLink>
              <NavLink
                to="/product-info/analysis"
                className="tab"
                activeClassName="active-tab">
                Analysis
              </NavLink>
            </nav>

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <p>
                      Nitro-Cab increases uptake of other nutrients and provides
                      uniform shape and colour to crops. Nitro-Cab improves the
                      strength of cell wall plant growth & soil health.
                      Nitro-Cab improves crop's & product's luster quality &
                      storage longevity. Nitro-Cab improves tolerance to
                      diseases, pests & environmental stress such as drought,
                      flood, water logging, excessive heat, frost etc. Quick
                      Links Home About Blog Contact About Us The foundation for
                      Nutrihub India Pvt. Ltd. was laid in 2019 by passionate
                      directors with motive of uplifting farmers life by
                      doubling farmers income by providing innovative nutrition
                      products and technical services to growers for growing
                      healthy crop.. Contact us address Satyam Industrial
                      Estate, Block No.19, Gat no.591/1&529, Airport Road ,
                      Janori, Tal : Dindori, Dist : Nashik (MH)-422206 phone
                      18002108987(24/7 Support Line) Copyright ©2024
                      Flyctsofttech
                    </p>
                  </>
                }
              />
              <Route
                path="analysis"
                element={
                  <>
                    <table className="content-table">
                      <tbody>
                        <tr>
                          <td>Pricing</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Spray</td>
                          <td> 2.5 to 5 ml/Litre</td>
                        </tr>
                        <tr>
                          <td>Drip</td>
                          <td>1 to 2 Liter/Acre</td>
                        </tr>
                        <tr>
                          <td>Pack Size</td>
                          <td>250 Ml, 500 Ml, 1 Liter, 2 Liter</td>
                        </tr>
                        <tr>
                          <td>Stock Availability</td>
                          <td>AVAILABLE</td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                }
              />
            </Routes>
            <Outlet />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Product_Detail;
