import PropTypes from "prop-types";
import { Rectangle } from "recharts";
import { useEffect, useState } from "react";

const CustomCursor = ({ points, width }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const surface = document.querySelector(".recharts-surface");
    if (surface) {
      setHeight(surface.clientHeight);
    }
  }, []);
  if (!points || points.length === 0) return null; // To avoid props validation error
  const { x } = points[0];

  return (
    <Rectangle
      className="custom-cursor"
      fill="rgba(139, 0, 0, 0.5)" // Dark red bg
      x={x}
      y={0}
      width={width}
      height={height}
    />
  );
};

CustomCursor.propTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    })
  ),
  width: PropTypes.number,
};

export default CustomCursor;
