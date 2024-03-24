import React, { useEffect, useState } from "react";
import { NavigationItem } from "../UI/NavigationItem";
import { ThemeProvider } from "styled-components";
import { NavSvgs } from "../../Helpers/GetSvgHelper";
import { GetSvg } from "../../Helpers/GetSvgHelper";
import { Nav, NavFooter, NavLogo } from "../Styles/Navigation";
import { useLocation, useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../CustomHooks/useTypedSelector";
export const navigationAssets: {
  svg: NavSvgs;
  text: string;
  url: string;
}[] = [
  {
    svg: NavSvgs.MAIN,
    text: "главная",
    url: "/",
  },
  {
    svg: NavSvgs.SERCH,
    text: "поисковый запрос",
    url: "/search",
  },
  {
    svg: NavSvgs.INTERESTING,
    text: "интересное",
    url: "/interesting",
  },
  {
    svg: NavSvgs.REELS,
    text: "Reels",
    url: "/reels",
  },
  {
    svg: NavSvgs.MESSAGE,
    text: "сообщения",
    url: "/message",
  },
  {
    svg: NavSvgs.NOTIFICATION,
    text: "уведомления",
    url: "/notification",
  },
  {
    svg: NavSvgs.CREATE,
    text: "создать ",
    url: "/content",
  },
  {
    svg: NavSvgs.PROFILE,
    text: "профиль",
    url: "",
  },
];

export const NavigationWrapper: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeUrl, setUrl] = useState<string>(location.pathname);
  const [isDarkMode, setDarkMode] = useState(true);
  const userName = useTypedSelector((s) => s.auth.user?.userName);
  useEffect(() => {
    let index = -1;
    navigationAssets.filter((n, i) => {
      if (n.svg == NavSvgs.PROFILE) {
        index = i;
      }
    });
    navigationAssets[index]!.url = `/${userName}` ?? "";
  }, [userName]);

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
                  navigate(as.url);
                  setUrl(as.url);
                }}
                text={as.text}
                svg={GetSvg(as.svg)}
                isActive={as.url === activeUrl}
              />
            );
          })}
        </div>
        <NavFooter>
          <NavigationItem
            key={navigationAssets.length}
            onClickSetIndex={(e) => {
              setUrl("settings");
            }}
            text="настройка"
            svg={GetSvg(NavSvgs.SETTING)}
            isActive={"settings" === activeUrl}
          />
        </NavFooter>
      </Nav>
    </ThemeProvider>
  );
};
