import React, { useState } from "react";


const Hello = () => {
    const [hello, SetHello] = useState("Aye Buddy!")
    return (
        <p>{hello}</p>
    )
}


export default Hello