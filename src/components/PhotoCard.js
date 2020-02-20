import React from "react";
import styled from "styled-components";
import "../App.css";

const Content = styled.p`
    font-family: 'Teko', sans-serif;
    font-size: 3rem;
`;

const Description = styled.p`
    font-size: 2rem;
    max-width: 80%;
    margin: 0 auto;
    padding-top: 3%;
    padding-bottom: 4%;
`;

const Potd = styled.img`
    box-sizing: border-box;
    max-width: 100%;
`;

const CardDiv = styled.div`
    background: lightgrey;
    max-width: 90%;
    margin: 0 auto;
`;

export default function PhotoCard(props) {

    return (
        <CardDiv className="card">
            <Content>{props.date}</Content>
            <Content>{props.title}</Content>
            <Potd src={props.url} alt="NASA daily space"/>
            <Description>{props.explanation}</Description>
        </CardDiv>
    );
}