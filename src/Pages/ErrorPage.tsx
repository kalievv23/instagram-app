import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const ErrorPage: React.FC = () => {
    const navigate = useNavigate()
    return (
        <center>
            <Heading>К сожалению, эта страница недоступна.</Heading>
            <p>Возможно, вы воспользовались недействительной ссылкой или страница была удалена.{" "}
                <LinkText onClick={() => navigate("/login")}>Назад в Instagram.</LinkText>
            </p>
        </center>
    )
}

export default ErrorPage

const Heading = styled.h1`
    margin: 2em 0;
    font-weight: 600;
`

const LinkText = styled.span`
    cursor: pointer;
    color: blue;
    font-weight: 600;
`