import { motion } from "framer-motion";
import React from "react";
import SinglePostComment from "./SinglePostComment";

// Third party package

// components
import SinglePostFooter from "./SinglePostFooter";
import SinglePostHeader from "./SinglePostHeader";

const SinglePostCard = ({ post, i }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ opacity: { duration: 0.2 }, layout: { duration: i * 0.05 } }}
            className="max-w-[457px] mx-auto shadow-[2px_2px_4px_rgba(0,0,0,0.12)] bg-white rounded-[10px] p-[30px]"
        >
            <SinglePostHeader post={post} />
            <hr />
            <SinglePostFooter post={post} />
            <hr />
            <SinglePostComment post={post} />
        </motion.div>
    );
};

export default SinglePostCard;
