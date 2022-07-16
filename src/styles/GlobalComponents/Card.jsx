import React from 'react'
import { Link } from 'react-router-dom';
import './CardStyles.css';

export default function Card(props) {
    return (
        <div className="card">
            <div className="container">
            <img className="card-image" src={props.image} alt={props.alt}/>            
            <h2>Title: {props.title}</h2>
            <p className='card-text'>Description: {props.description}</p>   
            <p>Tools: {props.tools}</p>
            <Link to={props.link} target="_blank">
            <button className='card-button'>KNOW MORE?</button>
            </Link>
            </div>
        </div>
    )
}