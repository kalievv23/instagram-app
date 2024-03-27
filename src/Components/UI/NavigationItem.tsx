import React from 'react'
import styled from 'styled-components'

const NavBlock = styled.li<{ onClick: (i: number) => void }>`
    border-radius: 10px;
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 12px;
    margin-bottom: 2px;
    background: ${(props) => (props.theme.isDarkMode ? '#000' : '#fff')};

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    cursor: pointer;
`
const NavImg = styled.div`
    width: 24px;
    height: 24px;
    display: block;
    object-fit: contain;
    margin-right: 16px;
`
const NavTitle = styled.div<{ $isActive?: boolean }>`
    font-size: 14px;
    line-height: 20px;
    font-weight: ${(props) => (props.$isActive ? 800 : 400)};
    color: ${(props) => (!props.theme.isDarkMode ? '#000' : '#fff')};
    text-transform: capitalize;
`
type Nav = {
    svg: React.ReactNode
    text: string
    isActive: boolean
    onClickNavigate: (i: number) => void
}
export const NavigationItem: React.FC<Nav> = ({
    svg,
    text,
    isActive = false,
    onClickNavigate,
}) => {
    return (
        <NavBlock onClick={(index) => onClickNavigate(index)}>
            <NavImg>{svg}</NavImg>
            <NavTitle $isActive={isActive}>{text}</NavTitle>
        </NavBlock>
    )
}
