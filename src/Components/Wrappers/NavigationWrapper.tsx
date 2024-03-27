import React, { useEffect, useState } from 'react'
import { GetSvg, NavSvgs } from '../../Helpers/GetSvgHelper'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../../CustomHooks/useTypedSelector'
import { MiniNavWrapper } from './MiniNavWrapper'
import { MiniNavItem } from '../UI/MiniNavItem'
import styled, { ThemeProvider } from 'styled-components'
import { Nav, NavLogo } from '../Styles/Navigation'
import { NavigationItem } from '../UI/NavigationItem'

const Logo = (
    <svg fill="#fff" height="24" role="img" viewBox="0 0 24 24" width="24">
        <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
    </svg>
)
const MiniNavLink = styled.a`
    height: 48px;
    width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    border-radius: 10px;

    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`
export const navigationAssets: {
    svg: NavSvgs
    text: string
    url: string
    canMini: boolean
}[] = [
    {
        svg: NavSvgs.MAIN,
        text: 'главная',
        url: '/',
        canMini: false,
    },
    {
        svg: NavSvgs.SERCH,
        text: 'поисковый запрос',
        url: '/search',
        canMini: true,
    },
    {
        svg: NavSvgs.INTERESTING,
        text: 'интересное',
        url: '/interesting',
        canMini: false,
    },
    {
        svg: NavSvgs.REELS,
        text: 'Reels',
        url: '/reels',
        canMini: false,
    },
    {
        svg: NavSvgs.MESSAGE,
        text: 'сообщения',
        url: '/message',
        canMini: true,
    },
    {
        svg: NavSvgs.NOTIFICATION,
        text: 'уведомления',
        url: '/notification',
        canMini: true,
    },
    {
        svg: NavSvgs.CREATE,
        text: 'создать ',
        url: '/content',
        canMini: false,
    },
    {
        svg: NavSvgs.PROFILE,
        text: 'профиль',
        url: '',
        canMini: false,
    },
]

export const NavigationWrapper: React.FC = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [activeUrl, setUrl] = useState<string>(location.pathname)
    const [isDarkMode, setDarkMode] = useState(true)
    const userName = useTypedSelector((s) => s.auth.user?.userName)
    useEffect(() => {
        let index = -1
        navigationAssets.filter((n, i) => {
            if (n.svg == NavSvgs.PROFILE) {
                index = i
            }
        })
        navigationAssets[index]!.url = `/${userName}` ?? ''
    }, [userName])
    const isMini = navigationAssets.filter(
        (n, i) => n.url == location.pathname
    )[0]?.canMini
    return (
        <>
            {isMini ? (
                <MiniNavWrapper>
                    <MiniNavLink
                        href={'/'}
                        onClick={() => {
                            setUrl('/')
                        }}
                    >
                        {Logo}
                    </MiniNavLink>
                    <ul
                        style={{
                            listStyleType: 'None',
                            flexGrow: 1,
                            marginTop: 24,
                        }}
                    >
                        {navigationAssets.map((a) => (
                            <MiniNavItem
                                key={a.text}
                                onClick={() => {
                                    navigate(a.url)
                                    setUrl(a.url)
                                }}
                            >
                                {GetSvg(a.svg, activeUrl === a.url)}
                            </MiniNavItem>
                        ))}
                    </ul>
                    <MiniNavLink
                        onClick={() => {
                            '/settings'
                        }}
                        href=""
                    >
                        {GetSvg(NavSvgs.SETTING, activeUrl === '/settings')}
                    </MiniNavLink>
                </MiniNavWrapper>
            ) : (
                <ThemeProvider theme={{ isDarkMode }}>
                    <Nav $isDarkMode={isDarkMode}>
                        <NavLogo href="/">
                            {GetSvg(NavSvgs.LOGO, false)}
                        </NavLogo>
                        <ul style={{ flexGrow: 1 }}>
                            {navigationAssets.map((as, i) => {
                                return (
                                    <NavigationItem
                                        key={i}
                                        onClickNavigate={(e) => {
                                            navigate(as.url)
                                            setUrl(as.url)
                                        }}
                                        text={as.text}
                                        svg={GetSvg(
                                            as.svg,
                                            as.url === activeUrl
                                        )}
                                        isActive={as.url === activeUrl}
                                    />
                                )
                            })}
                        </ul>
                        <NavigationItem
                            key={navigationAssets.length}
                            onClickNavigate={(e) => {
                                setUrl('settings')
                            }}
                            text="настройка"
                            svg={GetSvg(
                                NavSvgs.SETTING,
                                'settings' === activeUrl
                            )}
                            isActive={'/settings' === activeUrl}
                        />
                    </Nav>
                </ThemeProvider>
            )}
        </>
    )
}
