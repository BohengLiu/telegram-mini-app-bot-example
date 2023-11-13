import React, { useMemo } from "react";
import GridCell from "./GridCell";
import {Position} from './type'

const getColor = (str: string) => {
  if (str.includes("wolf") ) {
    return "#000000";
  } else if (str.includes("grass")) {
    return "#00AA00";
  } else if (str.includes("sheep")) {
    return "#FFFFFF";
  } else {
    return "transparent";
  }
}

interface Props {
  positions: Position[];
}

const Grid = ({ positions }: Props) => {
  const gridSize = 128;
  const grid = [];

  const map = useMemo(() => {
    const  m: Record<string, string> = {}
    positions?.forEach(p => {
      m[p.position] = getColor(p.object) 
    })
    return m
  }, [positions])

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid.push(<GridCell key={`${i}-${j}`} bgColor={map[`${i}-${j}`] } />);
    }
  }

  return (
    <div className="flex items-center justify-center h-[90vw] w-full">
      <div
        style={{
          flexShrink: 0,
          border: "1px solid #ccc",
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          width: "1024px",
          height: "1024px",
          backgroundColor: "#ccc",
          gap: "1px",
          transform: "scale(0.25)",
        }}
      >
        {grid}
      </div>
    </div>
  );
};

export default Grid;
