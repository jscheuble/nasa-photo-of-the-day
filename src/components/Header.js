import React from "react";
import logo from "../img/nasa_logo.svg";
import background from "../img/astronaut.jpg";
import styled from "styled-components";
import "../App.css";

const StyledLogo = styled.img`
max-width: 200px;
margin-top: 3%;
`;

const StyledHeader = styled.header`
background: url(${ background });
`;

const StyledHeading = styled.h1`
    color: white;
    padding-bottom: 2%;
    font-family: 'Teko', sans-serif;
    letter-spacing: 2px;
`;


export default function Header() {
    return (

        <StyledHeader>
            <StyledLogo src={logo} alt="nasa logo"/>
            <StyledHeading>Astronomy Picture of the Day</StyledHeading>
        </StyledHeader>
    )
}