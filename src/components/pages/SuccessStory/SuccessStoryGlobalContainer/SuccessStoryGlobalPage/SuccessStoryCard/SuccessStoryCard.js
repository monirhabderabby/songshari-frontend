// Configuration
import React from "react";
import { useNavigate } from "react-router";

// Components
import { motion } from "framer-motion";
import { getDateFromCreatedAt } from "../../../../../../assets/utilities/GetDateFromCreatedAt/getDateFromCreatedAt";

const SuccessStoryCard = ({ story, i }) => {
    const navigate = useNavigate();

    const { firstName, lastName } = story?.user || {};
    return (
        <motion.div
            initial={{
                opacity: 0,
                translateX: i % 2 === 0 ? -50 : 50,
                translateY: -50,
            }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.3, delay: i * 0.2 }}
            className="rounded shadow-lg"
        >
            <img
                src={
                    story?.attachments[0]?.url ||
                    "https://img.freepik.com/free-vector/doodle-lettering-happy-vectorcalligraphy_53876-172731.jpg?w=740&t=st=1681114987~exp=1681115587~hmac=36a2d7204b8b8c45cd417fa8a2ef8c1f070cf5aa3804cb3763c5c96ab34856a1"
                }
                alt="happyImage"
                className="w-full h-72"
            />
            <div className="p-4">
                <h1 className="text-xl font-Inter h-28 capitalize">{story?.header}</h1>
                <div className="text-pink-500 font-Poppins">
                    <p>
                        Posted By: <span className="text-red-500 font-medium text-lg">{(firstName || "") + " " + (lastName || "")}</span>{" "}
                    </p>
                    <p>
                        On: <span className="text-red-500 font-medium text-lg">{getDateFromCreatedAt(story?.createdAt)}</span>
                    </p>
                </div>
                <div className="w-full mt-2">
                    <button onClick={() => navigate(`/happyStory/${story?._id}`)} className="w-full h-[44px] special_profile_button">
                        View Details
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default SuccessStoryCard;
