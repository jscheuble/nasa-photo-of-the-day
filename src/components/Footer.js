import React from "react";
import styled from "styled-components";

const Copyright = styled.p`
    font-size: 1.5rem;
    margin: 0 auto;
    background: black;
    color: white;
    margin-top: 4%;
    padding: 2%;
`;

export default function Footer() {
    return(
        <footer>
            <Copyright>Copyright &copy; NASA 2020</Copyright>
        </footer>

    );
}