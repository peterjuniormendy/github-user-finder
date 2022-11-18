import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import FilterSearchBar from "./Components/FilterSearchBar";
import Main from "./Components/Main";
// "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"

function App() {
  const [userData, setuserData] = useState({});
  const getUserData = (data) => {
    setuserData(data);
  };

  return (
    <div className="w-full h-screen bg-[#f5f7ff] dark:bg-[#151930] p-5">
      <Header />
      <FilterSearchBar getUserData={getUserData} />
      <Main {...userData} />
    </div>
  );
}

export default App;
