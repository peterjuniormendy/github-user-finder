import React, { useState } from "react";
import { useRef } from "react";
import SearchIcon from "./SearchIcon";

const FilterSearchBar = ({ getUserData }) => {
  const [userName, setUserName] = useState("");
  const [state, setState] = useState("idel");
  const errorMessage = useRef("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
    errorMessage.current.classList.add("hidden");
  };

  const fetchUserData = async (event) => {
    event.preventDefault();
    userName && setState("submitted");
    const url = "https://api.github.com/users/";
    const response = await fetch(url + userName, {
      credentials: "same-origin",
    });
    if (userName && !response.ok) {
      const errorClass = errorMessage.current.classList;
      errorClass.contains("hidden") ? errorClass.remove("hidden") : "";
    }
    const data = await response.json();
    getUserData(data);
    setState("idel");
  };

  return (
    <div className="lg:max-w-3xl md:max-w-xl sm:max-w-lg mx-auto py-3 px-5 bg-[#fbfbfb] dark:bg-[#212549] rounded-2xl my-auto dark:text-slate-400 shadow-xl">
      <form
        action="/"
        className="flex items-center relative bg-transparent"
        onSubmit={fetchUserData}
      >
        <SearchIcon htmlFor="search" />
        <input
          value={userName}
          id="search"
          type="text"
          placeholder="Search GitHub username..."
          onChange={handleUserName}
          className="bg-transparent border-none outline-none text-lg lg:text-xl w-4/5 pl-8 sm:pl-10 lg:pl-14"
        />
        <span
          className="text-red-700 px-7 w-[200px] mx-auto text-xs sm:text-base lg:text-xl hidden"
          ref={errorMessage}
        >
          No results
        </span>
        <button
          className="bg-[#295cff] hover:bg-[#456be5] w-1/5 py-1 sm:py-2 px-1 sm:px-2 rounded-2xl text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-white"
          type="submit"
        >
          {state === "idel" ? "Search" : "Loading..."}
        </button>
      </form>
    </div>
  );
};

export default FilterSearchBar;
