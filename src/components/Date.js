import React, {useRef} from 'react';
//import moment from "moment";

export default function Date(props) {
    const dateRef = useRef(null);
    const submitRef = useRef(null);
    function handleDate() {
        let dateInput = dateRef.current.value;
        console.log(dateInput);
        return dateInput;
    }
    
    return (
            <form>
                <label>
                    Date: 
                    <input onChange = {() => {props.setDate(handleDate())}} ref = {dateRef} id="myDate" type="text" placeholder="yyyy-mm-dd" />
                </label>
                <button onClick={() => handleDate()} ref={submitRef}>Submit</button>
            </form>
    );
}