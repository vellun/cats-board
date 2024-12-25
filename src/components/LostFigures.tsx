import React, { FC } from "react";
import { Figure } from "../models/figures/Figure";

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className="lost">
      <div className="lostInner">
        <h3>{title}</h3>
        {figures.map((figure) => (
          <div key={figure.id}>
            {figure.name}{" "}
            {figure.logo && (
              <img className="lostFigureImg" src={figure.logo} alt="" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostFigures;
