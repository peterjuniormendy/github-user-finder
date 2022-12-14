import React from "react";
import LocationLink from "./LocationLink";
import TwitterLink from "./TwitterLink";
import BlogLink from "./BlogLink";
import CompanyLink from "./CompanyLink";

const UserLinks = ({ props, defaultUser }) => {
  const { location, twitter_username, blog, company } = defaultUser;
  return (
    <div className="md:grid gap-4 md:grid-cols-2 space-y-4 md:space-y-0">
      <LocationLink props={props} defaultLocation={location} />
      <TwitterLink props={props} defaultTwitter={twitter_username} />
      <BlogLink props={props} defaultBlog={blog} />
      <CompanyLink props={props} defaultCompany={company} />
    </div>
  );
};

export default UserLinks;
