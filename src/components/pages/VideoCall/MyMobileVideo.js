import React, { useState } from "react";

const MyMobileVideo = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const dx = event.clientX - position.x;
    const dy = event.clientY - position.y;

    setPosition({
      x: position.x + dx,
      y: position.y + dy,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="absolute z-10 w-32 h-32 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center"
      style={{ top: position.y, left: position.x }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <span className="text-white text-center">Drag me!</span>
    </div>
  );
};

export default MyMobileVideo;
