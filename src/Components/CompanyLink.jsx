import React from "react";
import companyIcon from "../assets/icon-company.svg";

const CompanyLink = ({ props, defaultCompany }) => {
  return (
    <div
      className={
        props && Object.keys(props).length === 0 && !defaultCompany
          ? "text-slate-700 dark:text-slate-500"
          : ""
      }
    >
      <p>
        <img src={companyIcon} alt="" className="inline-block mr-3.5" />{" "}
        {props.company
          ? props.company
          : Object.keys(props).length === 0 && defaultCompany
          ? defaultCompany
          : "Not Available"}
      </p>
    </div>
  );
};

export default CompanyLink;
