import React from "react";
import Card from './Card'
import '../ConflictAndConfusion.css'
import ConflictsAndConfusionData from "./ConflictsAndConfusionData";
export default function ConflictAndConfusion() {
  const card = ConflictsAndConfusionData.map((item) => {
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
    <div id="bgimgconflictandconfusion">
      <div id="conflictandconfusion">
      <div id="conflictandconfusiontitle" >Conflict and Confusion</div>
      <div className="card-container">
     {card}
      </div> 
      </div>
</div>
  );
}