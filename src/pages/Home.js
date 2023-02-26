import React from "react";
import MainDash from "../components/MainDash";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <MainDash />
    </div>
  );
};

export default Home;
