import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
        <button onClick={() => setCount(count + 1)}> Click here to add</button>
        <p>{count}</p>
        <button onClick={() => setCount(count - 1)}> Click here to subtract</button>
        
        </>
    );

}

export default Counter;