import styled from 'styled-components'

export const Nav = styled.nav<{ $isDarkMode: boolean }>`
    background: ${(props) => (props.$isDarkMode ? '#000' : '#fff')};
    width: 244px;
    min-height: 600px;
    max-height: 100dvh;
    height: 100dvh;
    position: relative;
    padding: 8px 12px 20px 12px;
    border-right-color: rgb(38, 38, 38);
    border-right-width: 1px;
    border-right-style: solid;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
