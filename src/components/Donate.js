import React from "react";
import '../Donate.css'
 
 

export default function Donate() {
    return (
        <div className="donate" >
         <div className="qr-bg">
  <img   src={require('./qrcode.jpeg')}
className=" img-donate  "/>
</div>
<div className="donate-text">
Thank you for your generous gift to Mission Chaitanya. We are thrilled to have your support. Through your donation we have been able to accomplish our goal of spreading awareness . You truly make the difference for us, and we are extremely grateful!
</div>
 
        </div>
        
    )
}