import React from "react";
// import user from "../assets/github.svg";

const UserProfile = ({ props, defaultUser }) => {
  return (
    <div className="rounded-full w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px]">
      <img
        src={props.avatar_url || defaultUser.avatar_url}
        alt="profile picture "
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  );
};

export default UserProfile;
