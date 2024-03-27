import styled from 'styled-components'

export const UserItem = styled.li<{ $isActive: boolean }>`
    cursor: pointer;
    height: 72px;
    width: 397px;
    padding: 8px 24px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${(p) => (p.$isActive ? 'rgb(38, 38, 38)' : '#000')};
`
