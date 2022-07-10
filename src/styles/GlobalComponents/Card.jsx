import React from 'react'

export default function Card(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>   
            <img src={props.images["0"]["src"]["small"]} alt={props.imageAlt} width="250px" height="auto"/>        
            <p>Price: {props.price} SEK</p>
            <hr />
        </div>
    )
}