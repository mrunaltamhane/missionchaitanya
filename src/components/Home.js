import React from "react";
import { Link } from "react-router-dom";
import '../Home.css'

export default function Home() {
    return (
        <div id="bgimghome">
  
        <div id="homecontainer">
        <div id="home">
        Mission Chaitanya is a initiative to spread awareness among <br />the people
        about the rich culture of our country.<br />
        
        Our mission focuses on clearing misconceptions regarding our <br/> culture and
        giving the people , <br/>
        the idea of perfect living with facts that our ancestors have discovered
        centuries back.<br /><br/><Link to="/donate"><button type="button" class="btn btn-light linktodonate"><div>Donate</div></button></Link>
        </div>
       
        </div>
        </div>
        
    )
}