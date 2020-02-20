import React from "react";
import logo from "../img/nasa_logo.svg";
import background from "../img/headerbg.jpg";
import styled from "styled-components";



export default function Header() {

    const StyledLogo = styled.img`
        max-width: 200px;
        margin-top: 3%;
    `;

    const StyledHeader = styled.header`
        background: navy;
    `;

    return (

        <StyledHeader styles = {{backgroundImage: `url(${background}`}}>
            <StyledLogo src={logo} alt="nasa logo"/>
            <h1>Astronomy Picture of the Day</h1>
        </StyledHeader>
    )
}