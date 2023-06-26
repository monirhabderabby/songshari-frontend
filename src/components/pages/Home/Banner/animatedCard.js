import React, { useRef } from 'react';
import "./animatedProfile.css";

const AnimatedCard = ({url,i}) => {
    const animCard = useRef()

    return (
        <div className="card" index={i} ref={animCard}>
        <img src={url} alt="" />
      </div>
    );
}

export default AnimatedCard;
