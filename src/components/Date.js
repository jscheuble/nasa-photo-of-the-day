import React, {useState} from 'react';
//import moment from "moment";

export default function Date(props) {
    const [date1, setDate1] = useState();

    function handleDate(e) {
        setDate1(e.target.value);
        console.log(date1);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.setDate(date1);
        console.log(props.date);
    }
    
    return (
            <form>
                <label>
                    Date: 
                    <input onChange = {(e) => (handleDate(e))} id="myDate" type="text" placeholder="yyyy-mm/dd" />
                </label>
                <button onClick={(e) => (handleSubmit(e))}>Submit</button>
            </form>
    );
}