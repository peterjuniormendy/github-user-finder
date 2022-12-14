import React from "react";
import blogIcon from "../assets/icon-website.svg";

const BlogLink = ({ props, defaultBlog }) => {
  return (
    <div
      className={
        props && Object.keys(props).length === 0 && !defaultBlog
          ? "text-slate-700 dark:text-slate-500"
          : ""
      }
    >
      {props && props.blog ? (
        <a
          href={`https://${props.blog}`}
          target="_blank"
          className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          <p>
            <img src={blogIcon} alt="" className="inline-block mr-3.5" />
            {props.blog}
          </p>
        </a>
      ) : props && Object.keys(props).length === 0 && defaultBlog ? (
        <a
          href={`https://${defaultBlog}`}
          target="_blank"
          className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          <p>
            <img src={blogIcon} alt="" className="inline-block mr-3.5" />
            {defaultBlog}
          </p>
        </a>
      ) : (
        <p>
          <img src={blogIcon} alt="" className="inline-block mr-3.5" />
          Not Available
        </p>
      )}
    </div>
  );
};

export default BlogLink;
