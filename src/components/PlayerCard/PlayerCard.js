import React from "react";
import './styles.css'
export default function PlayerCard(){
    return(
        <div className="player-card">
            <div className="fcontainer">
            <img src={require("./chall.png")} alt="chall"/>
            <h1>Hola</h1>
            </div>
            <div className="scontainer">
            <h2>adios</h2>
            </div>            
        </div>        
    )
}