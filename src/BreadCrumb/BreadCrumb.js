import React from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumbs } from "react-breadcrumbs-dynamic";

function BreadCrumb({ name }) {
  return (
    <>
      <div className="breadcrumb-area pt-20 pb-20 bg-gray-3">
        <div className="container">
          <div className="breadcrumb-content">
            <h1>
              <b>{name}</b>
            </h1>
          </div>
        </div>
      </div>
      <div className="breadcrumb-nav">
        <Breadcrumbs
          separator={<span> / </span>}
          item={NavLink}
          finalItem={"span"}
        />
      </div>
    </>
  );
}

export default BreadCrumb;
