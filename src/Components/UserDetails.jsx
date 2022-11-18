import React from "react";

const UserDetails = ({ props }) => {
  return (
    <div className="lg:col-span-3 space-y-1.5 lg:flex justify-between mt-1.5 sm:mt-3">
      <div className="space-y-1">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          {props.name || "The Octocat"}
        </h3>
        <p className="text-sm sm:text-base lg:text-lg text-sky-800 dark:text-sky-300">
          {props.login ? `@${props.login} ` : "@Octocat"}
        </p>
      </div>
      <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
        {props.created_at || "Joined 25 Jan 2011"}
      </p>
    </div>
  );
};

export default UserDetails;
