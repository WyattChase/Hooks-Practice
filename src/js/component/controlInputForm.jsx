import React, { useState } from "react";

const ControlledInputForm = () => {
    const [currentValue, setValue] = useState('');

    return (
        <div>
            <h2>Your name is: {currentValue ? currentValue : "Not defined"} </h2>


            <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                value={currentValue}
                placeholder="Please type your name"
                />

        </div>


    );




}
ControlledInputForm.propTypes = {};
export default ControlledInputForm