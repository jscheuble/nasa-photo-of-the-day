import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function CardContainer(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=B2mTftplkjXD4CWIpHMzNrPxULOhP7XEshISYBDm")
        .then(res => {
            console.log(res.data);
            setData(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div className="cardContainer">
            <PhotoCard date ={data.date} url ={data.url} explanation ={data.explanation} title={data.title} />
        </div>
    );
}