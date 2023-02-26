import React, { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? "ExpandedCard" : <CompactCard param={props} set />}
    </AnimateSharedLayout>
  );
};

//CompactCard
function CompactCard({ param }) {
  const Png = param.png;
  return (
    <div
      className="compactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="details">
        <Png />
        <span>${param.value}</span>
        <span>Lasr 24 hours</span>
      </div>
    </div>
  );
}

export default Card;
