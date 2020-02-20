import React from "react";



export default function PhotoCard(props) {


    return (
        <div className="card">
            <p>{props.date}</p>
            <p>{props.title}</p>
            <img src={props.url} alt="NASA space photo of the day!"/>
            <p>{props.explanation}</p>
        </div>
    );
}