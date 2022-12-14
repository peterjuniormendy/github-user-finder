import React from "react";

const Connections = ({ props, defaultUser }) => {
  return (
    <div className="flex justify-between dark:bg-[#151930] bg-[f5f7ff] py-7 lg:px-12 rounded-2xl shadow-md px-4 sm:px-6">
      <div>
        <p className="text-slate-600 dark:text-slate-400">Repos</p>
        <h3 className="text-xl font-semibold">
          {props.public_repos || props.public_repos === 0
            ? props.public_repos
            : props &&
              Object.keys(props).length === 0 &&
              defaultUser.public_repos
            ? defaultUser.public_repos
            : 0}
        </h3>
      </div>
      <div>
        <p className="text-slate-600 dark:text-slate-400">Followers</p>
        <h3 className="text-xl font-semibold">
          {props.followers || props.followers === 0
            ? props.followers
            : props && Object.keys(props).length === 0 && defaultUser.followers
            ? defaultUser.followers
            : 0}
        </h3>
      </div>
      <div>
        <p className="text-slate-600 dark:text-slate-400">Following</p>
        <h3 className="text-xl font-semibold">
          {props.following || props.following === 0
            ? props.following
            : props && Object.keys(props).length === 0 && defaultUser.following
            ? defaultUser.following
            : 0}
        </h3>
      </div>
    </div>
  );
};

export default Connections;
