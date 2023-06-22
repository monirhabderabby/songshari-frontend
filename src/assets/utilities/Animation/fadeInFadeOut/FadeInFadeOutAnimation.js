import React from "react";
// motion
import { motion } from "framer-motion";
import { fadeInfadeOut } from "../fadeInFadeOut/fadeInFadeOut";

const FadeInFadeOutAnimation = ({ children, delay }) => {
    return (
        <motion.div variants={fadeInfadeOut(delay)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }}>
            {children}
        </motion.div>
    );
};

export default FadeInFadeOutAnimation;
