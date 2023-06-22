import React from "react";
// motion
import { motion } from "framer-motion";
import { fadeIn } from "../../utilities/Animation/varient";

const VarientAnimation = ({ children, direction, delay }) => {
    return (
        <motion.div variants={fadeIn(direction, delay)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }}>
            {children}
        </motion.div>
    );
};

export default VarientAnimation;
