import React from "react";

const UserBio = ({ props }) => {
  return (
    <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg lg:text-xl mt-4 sm:mt-0">
      {props.bio || "This profile has no bio"}
    </p>
  );
};

export default UserBio;