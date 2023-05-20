import lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import successAnimation from "../../../assets/lottieFiles/phone-verification-success.json";

export const VerifiedAnimation = ({ onComplete }) => {
    const animationContainer = useRef(null);
    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: "svg", // Choose the appropriate renderer (svg, canvas, html)
            loop: false,
            autoplay: true,
            animationData: successAnimation,
        });

        anim.addEventListener("complete", () => {
            setTimeout(() => {
                onComplete();
            }, 1000);
        });

        return () => {
            anim.removeEventListener("complete", () => {
                // code
            });
            // Clean up the animation when the component unmounts
            anim.destroy();
        };
    }, [onComplete]);
    return <div ref={animationContainer}></div>;
};
