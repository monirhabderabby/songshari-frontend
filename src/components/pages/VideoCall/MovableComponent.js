import React, { useState, useEffect } from "react";

const MovableComponent = ({ videoRef }) => {
  const [position, setPosition] = useState({ x: window.innerWidth-150, y: 80 });
  const [isDragging, setIsDragging] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (
        isDragging &&
        e.clientX - mouseOffset.x > 0 &&
        e.clientY - mouseOffset.y > 0
      ) {
        setPosition({
          x: e.clientX - mouseOffset.x,
          y: e.clientY - mouseOffset.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, mouseOffset]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    if (e.clientX - position.x > 0 && e.clientY - position.y > 0) {
      setMouseOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  return (
    <div
      className="md:hidden w-32 min-h-32 absolute z-10"
      style={{ top: position.y, left: position.x, cursor: "move" }}
      onMouseDown={handleMouseDown}
    >
      {/* Component content */}
      <video
        muted
        className="rounded border-2 relative w-32 h-auto"
        ref={videoRef}
        autoPlay
      />
    </div>
  );
};

export default MovableComponent;
