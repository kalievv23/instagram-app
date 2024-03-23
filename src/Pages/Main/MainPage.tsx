import { useState } from "react";
import { NavigationWrapper } from "../../Components/Wrappers/NavigationWrapper";
import {Outlet} from "react-router-dom";

export const MainPage = () => {
  const [areaIndex, setAreaIndex] = useState(0);
  return (
    <div style={{ display: "flex" }}>
      <NavigationWrapper
        activeNavIndex={areaIndex}
        setAreaIndex={setAreaIndex}
      />
        <Outlet/>
    </div>
  );
};
