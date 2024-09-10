import React, { useEffect } from "react";
import axios from "axios";

import Layout from "../Main Component/Layout";
import Sec_1 from "../Sections/Home/Sec_1";
import Sec_2 from "../Sections/Home/Sec_2";
import Sec_3 from "../Sections/Home/Sec_3";
import Sec_4 from "../Sections/Home/Sec_4";
import ContactForm from "../Common/ContactForm";
import Map from "../Common/Map";
import Videos from "../Common/Videos";

function Home() {
  // useEffect(() => {
  //   axios
  //     .post("https://nutrihubipl.com/admin/web-app/get_category_list.php")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <Layout>
        <div className="home-content">
          <Sec_1 />
          <Sec_2 />
          <Sec_3 />

          <Sec_4 />

          <div className="wrap-content">
            <ContactForm />
            <Map />
          </div>
          <Videos />
        </div>
      </Layout>
    </>
  );
}

export default Home;
