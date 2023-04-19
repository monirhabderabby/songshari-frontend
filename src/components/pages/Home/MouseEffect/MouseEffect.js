import React from "react";

// Third party package
import MouseParticles from "react-mouse-particles";

// css files
import "../../../../assets/css/mouseParticlesEffect.css";

const MouseEffect = () => {
  return (
    <div id="mouse-particles-container" className="relative">
      <div className="h-[80vh] w-full bg-slate-800">
        <p className="text-6xl tracking-wider text-center text-white pt-60">
          Welcome To Shongshari.com
        </p>
      </div>
      <MouseParticles
        g={1}
        color="random"
        cull="ignoreMouseEffect, footer-section, p, button, img, li, Link"
        level={6}
      />
    </div>
  );
};

export default MouseEffect;
