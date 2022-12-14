import React from "react";
// import locationIcon from "../assets/icon-location.svg";
// import twitterIcon from "../assets/icon-twitter.svg";
// import websiteIcon from "../assets/icon-website.svg";
// import companyIcon from "../assets/icon-company.svg";
import UserConnections from "./UserConnections";
import UserBio from "./UserBio";
import UserDetails from "./UserDetails";
import UserProfile from "./UserProfile";
import UserLinks from "./UserLInks";
import defaultUser from "../defaultData.json";

const Main = (props) => {
  // console.log(defaultUser);
  return (
    <main className="lg:max-w-3xl md:max-w-xl sm:max-w-lg mx-auto mt-4">
      <div className="bg-[#fbfbfb] dark:bg-[#212549] rounded-2xl dark:text-white text-slate-600 px-6 py-7 sm:px-9 sm:py-10 grid gap-4 md:gap-x-6 lg:px-13 lg:py-14 shadow-xl">
        <UserProfile props={props} defaultUser={defaultUser} />
        <UserDetails props={props} defaultUser={defaultUser} />
        <div className="col-span-3 lg:col-start-2 mt-2 space-y-7 lg:mt-[-50px]">
          <UserBio props={props} defaultUser={defaultUser} />
          <UserConnections props={props} defaultUser={defaultUser} />
          <UserLinks props={props} defaultUser={defaultUser} />
        </div>
      </div>
    </main>
  );
};

export default Main;
