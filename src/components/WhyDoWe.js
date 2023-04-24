import React from "react";
import Card from "./Card";
import "../WhyDoWe.css";
import WhyDoWeData from "./WhyDoWeData";
export default function WhyDoWe() {
  const card = WhyDoWeData.map((item) => {
    return (
      <Card
        src={item.src}
        title={item.title}
        link={item.link}
        desc={item.desc}
      />
    );
  });
  return (
    <div id="bgimgwhydowe">
      <div id="whydowe">
        <div id="whydowetitle">Why do We?</div>
        <div className="card-container">{card}</div>
      </div>
    </div>
  );
}
