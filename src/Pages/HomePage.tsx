import React from "react";
import { MainPage } from "./Main/MainPage";
import { Outlet } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <MainPage />
      <Outlet/>
    </div>
  );
};

export default HomePage;
