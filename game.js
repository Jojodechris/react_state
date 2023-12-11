import React, { useState } from "react";
import { getRandomAnswer } from "./Eight";

const Game = () => {
    const [message, setMessage] = React.useState("Think of a question");
    const [background,setBackground]=React.useState("black");

    const handleButtonClick = () => {
        const newAnswer = getRandomAnswer();
        setMessage(newAnswer.msg);
        setBackground(newAnswer.color);

    };

    return (
        <>
        <div className="container" style={{ backgroundColor: background }}>
            <h1>{message}</h1>
            <button onClick={handleButtonClick}>Get Random Answer</button>
            </div>
            
        </>
    );
}

export default Game;

// // import the function that allow to get the random message
// <div className="on" onClick={response}>
//     <h1>{getRandomAnswer.msg}</h1>
// </div>

// function response{
//     // find 
//     // change the className "on" to "off"
//     <h1>Without a doubt</h1>


// }

// // initial message: think of a question
// // initial background: black 