import React, { useState, useEffect } from 'react';

const Time = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);



    },[]);
    return (
        <h1>{time}</h1>
    )
}

export default Time;