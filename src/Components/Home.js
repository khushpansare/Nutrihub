import React from "react";
import Layout from "../Main Component/Layout";
import Sec_1 from "../Sections/Home/Sec_1";
import Sec_2 from "../Sections/Home/Sec_2";

function Home() {
  return (
    <>
      <Layout>
        <div className="home-content">
          <Sec_1 />
          <Sec_2 />
        </div>
      </Layout>
    </>
  );
}

export default Home;
