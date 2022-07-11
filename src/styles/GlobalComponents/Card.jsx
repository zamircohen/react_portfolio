import React from 'react'
import './CardStyles.css';

export default function Card(props) {
    return (
        <div>
            <h2>CARD HEADER</h2>
            <p>Loem Ipsum and shit</p>   
            <img width="250px" height="auto"/>        
            <p>More lorem ipsum...</p>
            <button>KNOW MORE?</button>

            {/* <h2>{props.name}</h2>
            <p>{props.description}</p>   
            <img src={props.images["0"]["src"]["small"]} alt={props.imageAlt} width="250px" height="auto"/>        
            <p>Price: {props.price} SEK</p> */}
        </div>
    )
}