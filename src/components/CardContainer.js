import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import Date from "./Date";

export default function CardContainer(props) {
    const [data, setData] = useState([]);
    const [date, setDate] = useState("");

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=B2mTftplkjXD4CWIpHMzNrPxULOhP7XEshISYBDm&date=${date}`)
        .then(res => {
            console.log(res.data);
            setData(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [date])

    return (
        <div className="cardContainer">
            <Date date={date} setDate={setDate}/>
            <PhotoCard date ={data.date} url ={data.url} explanation ={data.explanation} title={data.title} />
        </div>
    );
}