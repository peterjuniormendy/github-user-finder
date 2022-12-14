import React from "react";
import locationIcon from "../assets/icon-location.svg";

const LocationLink = ({ props, defaultLocation }) => {
  return (
    <div
      className={
        props && Object.keys(props).length === 0 && !defaultLocation
          ? " text-slate-700 dark:text-slate-500"
          : ""
      }
    >
      <p>
        <img src={locationIcon} alt="" className="inline-block mr-3.5" />{" "}
        {props.location
          ? props.location
          : Object.keys(props).length === 0 &&
            Object.getPrototypeOf(props) === Object.prototype &&
            defaultLocation
          ? defaultLocation
          : "Not Available"}
      </p>
    </div>
  );
};

export default LocationLink;
