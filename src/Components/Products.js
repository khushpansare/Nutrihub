import React from "react";

import Layout from "../Main Component/Layout";

//
import Product_1 from "../Assets/product/product-1.png";
import Product_2 from "../Assets/product/product-2.png";
import Product_3 from "../Assets/product/product-3.png";
import Product_4 from "../Assets/product/product-4.png";
import Product_5 from "../Assets/product/product-5.png";
import Product_6 from "../Assets/product/product-6.png";
import Product_7 from "../Assets/product/product-7.png";
import Product_8 from "../Assets/product/product-8.png";
import { Link } from "react-router-dom";

const product = [
  {
    src: Product_1,
    name: "Calcium Nitrate",
  },
  {
    src: Product_2,
    name: "Nitro-Cab",
  },
  {
    src: Product_3,
    name: "Potassium Schoenite",
  },
  {
    src: Product_4,
    name: "PRIMAFERT 13:00:45",
  },
  {
    src: Product_5,
    name: "PRIMAFERT 00:00:50",
  },
  {
    src: Product_6,
    name: "PRIMAFERT 13:40:13",
  },
  {
    src: Product_7,
    name: "PRIMAFERT 00:52:34",
  },
  {
    src: Product_8,
    name: "PRIMAFERT 12:61:00",
  },
  {
    src: Product_1,
    name: "PRIMAFERT 19:19:19",
  },
  {
    src: Product_2,
    name: "PRIMAFERT 00:44:29",
  },
];

function Products() {
  return (
    <>
      <Layout>
        <div className="product-content">
          <h1>Water Soluble Fertilizer</h1>

          <div className="product-container">
            {product.map((val, i) => {
              return (
                <div className="single-product">
                  <div className="img">
                    <img src={val.src} alt="" />
                  </div>
                  <h3>{val.name}</h3>
                  <Link
                    to={"/product-info"}
                    state={{ img: val.src, name: val.name }}>
                    View
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Products;
