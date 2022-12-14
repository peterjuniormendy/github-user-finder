import React from "react";

const UserLinks = ({ props, icon1, icon2, icon3, icon4, defaultUser }) => {
  console.log(props);
  return (
    <div className="md:grid gap-4 md:grid-cols-2 space-y-4 md:space-y-0">
      <div
        className={
          props && !props.location ? " text-slate-700 dark:text-slate-500" : ""
        }
      >
        <p>
          <img src={icon1} alt="" className="inline-block mr-3.5" />{" "}
          {props.location
            ? props.location
            : !props
            ? defaultUser.location
            : "Not Available"}
        </p>
      </div>
      <div
        className={
          props && !props.twitter_username
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
              <img src={icon2} alt="" className="inline-block mr-3.5" />{" "}
              {props.twitter_username}
            </p>
          </a>
        ) : Object.keys(props) && !props.twitter_username ? (
          <p>
            <img src={icon2} alt="" className="inline-block mr-3.5" />
            Not Available
          </p>
        ) : (
          <a
            href={`https://twitter.com/${defaultUser.twitter_username}`}
            target="_blank"
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            <p>
              <img src={icon2} alt="" className="inline-block mr-3.5" />{" "}
              {defaultUser.twitter_username}
            </p>
          </a>
        )}
        {/* {!props ? (
          <a
            href={`https://twitter.com/${defaultUser.twitter_username}`}
            target="_blank"
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            <p>
              <img src={icon2} alt="" className="inline-block mr-3.5" />{" "}
              {defaultUser.twitter_username}
            </p>
          </a>
        ) : props.twitter_username ? (
          <a
            href={`https://twitter.com/${props.twitter_username}`}
            target="_blank"
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            <p>
              <img src={icon2} alt="" className="inline-block mr-3.5" />{" "}
              {props.twitter_username}
            </p>
          </a>
        ) : (
          <p>
            <img src={icon2} alt="" className="inline-block mr-3.5" />
            Not Available
          </p>
        )} */}
      </div>
      <div
        className={
          props && !props.blog ? "text-slate-700 dark:text-slate-500" : ""
        }
      >
        {defaultUser.blog ? (
          <a
            href={`https://${defaultUser.blog} `}
            target="_blank"
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            <p>
              <img src={icon3} alt="" className="inline-block mr-3.5" />{" "}
              {defaultUser.blog}
            </p>
          </a>
        ) : props && !props.blog ? (
          <p>
            <img src={icon3} alt="" className="inline-block mr-3.5" /> Not
            Available
          </p>
        ) : (
          <a
            href={`https://${props.blog || defaultUser.blog} `}
            target="_blank"
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            <p>
              <img src={icon3} alt="" className="inline-block mr-3.5" />{" "}
              {props.blog || defaultUser.blog}
            </p>
          </a>
        )}
      </div>
      <div
        className={
          props && !props.company ? "text-slate-700 dark:text-slate-500" : ""
        }
      >
        <p>
          <img src={icon4} alt="" className="inline-block mr-3.5" />{" "}
          {props.company || defaultUser.company || "Not Available"}
        </p>
      </div>
    </div>
  );
};

export default UserLinks;
