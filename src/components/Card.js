import React from "react";
import '../Card.css'
import cardimage from "../cardimgs/sas.jpeg"
import { Link } from "react-router-dom";
 


export default function Card(props) {
    return (
     <div className="main">
     
     <div className="card cards" >
  <img className="card-img-top" id="cardimag" src={props.src} alt="cardimage"/>
  <div className="card-body cardBody">
    <h5 className="card-title title-card">{props.title}</h5>
    <p className="card-text desc">{props.desc}</p>
  </div>
  
 
 <Link to={props.link}> <button type="button" className="btn btn-info btncard">View More</button></Link>
  
</div>
     </div>
    
        
    )
}