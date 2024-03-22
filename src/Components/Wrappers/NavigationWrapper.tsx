import React, { useState } from "react";
import { NavigationItem } from "../UI/NavigationItem";
import styled, { ThemeProvider } from "styled-components";
import { NavSvgs } from "../../Helpers/GetSvgHelper";
import { GetSvg } from "../../Helpers/GetSvgHelper";
import { Nav, NavFooter, NavLogo, NavProfileImg } from "../Styles/Navigation";
export const navigationAssets: {
  svg: NavSvgs;
  text: string;
  showComponent: React.ReactNode;
}[] = [
  {
    svg: NavSvgs.MAIN,
    text: "главная",
    showComponent: <div>главная</div>,
  },
  {
    svg: NavSvgs.SERCH,
    text: "поисковый запрос",
    showComponent: <div>поисковый запрос</div>,
  },
  {
    svg: NavSvgs.INTERESTING,
    text: "интересное",
    showComponent: <div>интересное</div>,
  },
  {
    svg: NavSvgs.REELS,
    text: "Reels",
    showComponent: <div>REELS</div>,
  },
  {
    svg: NavSvgs.MESSAGE,
    text: "сообщения",
    showComponent: <div>сообщения</div>,
  },
  {
    svg: NavSvgs.NOTIFICATION,
    text: "уведомления",
    showComponent: <div>уведомления</div>,
  },
  {
    svg: NavSvgs.CREATE,
    text: "создать ",
    showComponent: <div>создать</div>,
  },
  {
    svg: NavSvgs.PROFILE,
    text: "профиль",
    showComponent: <div>профиль</div>,
  },
];

export const NavigationWrapper: React.FC<{
  setAreaIndex: (i: number) => void;
  activeNavIndex: number;
}> = ({ activeNavIndex = 0, setAreaIndex }) => {
  const [index, setIndex] = useState<number>(0);
  const onClickSetIndex = (i: number) => {
    setIndex(i);
    setAreaIndex(i);
  };
  const [isDarkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={{ isDarkMode }}>
      <Nav $isDarkMode={isDarkMode}>
        <NavLogo href="#">{GetSvg(NavSvgs.LOGO)}</NavLogo>
        <div>
          {navigationAssets.map((as, i) => {
            return (
              <NavigationItem
                key={i}
                onClickSetIndex={(e) => {
                  onClickSetIndex(i);
                }}
                text={as.text}
                svg={GetSvg(as.svg)}
                isActive={i === index}
              />
            );
          })}
        </div>
        <NavFooter>
          <NavigationItem
            key={navigationAssets.length}
            onClickSetIndex={(e) => {
              onClickSetIndex(navigationAssets.length);
            }}
            text="настройка"
            svg={GetSvg(NavSvgs.SETTING)}
            isActive={index === navigationAssets.length}
          />
        </NavFooter>
      </Nav>
    </ThemeProvider>
  );
};
