import React, { FC } from "react";
import { Figure } from "../models/figures/Figure";

interface LostFiguresProps {
  title: string;
  figures: Map<string, [number, Figure]>;
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className="lost">
      <div className="lostInner">
        <h3>{title}</h3>

        {Array.from(figures.entries()).map(([name, [count, figure]]) => (
          <div key={figure.id}>
            {figure.logo && (
              <img className="lostFigureImg" src={figure.logo} alt="" />
            )}{" "}
            {name} x{count}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostFigures;
