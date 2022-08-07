import React from "react";
import App from "./App";
export default function Dice(props)
{
    const styles={
        backgroundColor:props.isHeld===true?"#59E391" : "white"
    }
    return(
        <div className="dieface" style={styles} onClick={props.HoldDice}>
            <h2 className="textdie">{props.value}</h2>
        </div>
    )
}