import { navigationAssets } from "./../../Components/Wrappers/NavigationWrapper";
import { useState } from "react";
import { NavigationWrapper } from "../../Components/Wrappers/NavigationWrapper";
export const MainPage = () => {
  const [areaIndex, setAreaIndex] = useState(0);
  return (
    <div style={{ display: "flex" }}>
      <NavigationWrapper
        activeNavIndex={areaIndex}
        setAreaIndex={setAreaIndex}
      />
      {navigationAssets[areaIndex]?.showComponent}
    </div>
  );
};
