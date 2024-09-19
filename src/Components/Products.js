import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

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
import axios from "axios";

function Products() {
  const [productData, setProductData] = useState([]);
  const location = useLocation();
  const { state } = location;

  const { id } = useParams();

  useEffect(() => {
    let s_id = "catId=" + id;

    axios
      .post(
        "https://nutrihubipl.com/admin/web-app/categoryWiseProductList.php",
        s_id
      )
      .then((res) => {
        // console.log(res.data.result);
        setProductData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <Layout>
        <div className="product-content">
          <h1>{state.data.value}</h1>

          <div className="product-container">
            {productData.map((val, i) => {
              return (
                <div className="single-product">
                  <div className="img">
                    <img src={val.product_img} alt="" />
                  </div>
                  <h3>{val.product_name}</h3>
                  <Link to={"/product-info"} state={{ product_details: val }}>
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
