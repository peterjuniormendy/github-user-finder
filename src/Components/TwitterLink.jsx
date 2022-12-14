import React from "react";
import twitterIcon from "../assets/icon-twitter.svg";

const TwitterLink = ({ props, defaultTwitter }) => {
  return (
    <div
      className={
        props && Object.keys(props).length === 0 && !defaultTwitter
          ? "text-slate-700 dark:text-slate-500"
          : ""
      }
    >
      {props && props.twitter_username ? (
        <a
          href={`https://twitter.com/${props.twitter_username}`}
          target="_blank"
          className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          <p>
            <img src={twitterIcon} alt="" className="inline-block mr-3.5" />{" "}
            {props.twitter_username}
          </p>
        </a>
      ) : props && Object.keys(props).length === 0 && defaultTwitter ? (
        <a
          href={`https://twitter.com/${defaultTwitter}`}
          target="_blank"
          className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          <p>
            <img src={twitterIcon} alt="" className="inline-block mr-3.5" />{" "}
            {defaultTwitter}
          </p>
        </a>
      ) : (
        <p>
          <img src={twitterIcon} alt="" className="inline-block mr-3.5" />
          Not Available
        </p>
      )}
    </div>
  );
};

export default TwitterLink;
