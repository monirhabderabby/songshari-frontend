import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import getCookie from "../../../Helper/cookies/getCookie";
import meetNewPeople from "../../../assets/css/MeetNewPeople.module.css";
import { fadeIn } from "../../../assets/utilities/Animation/varient";

const MeetNewPeopleCard = ({ data, index }) => {
    const token = getCookie("token");

    let redirectPath;
    if (token) {
        redirectPath = "/find-partner/suggested";
    } else {
        redirectPath = "/signup";
    }

    return (
        <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={`${meetNewPeople.singleWorkBox} mx-auto`}
        >
            <div className={meetNewPeople.icon}>
                <img src={data.img} alt="Not Available" />
                <div className={meetNewPeople.number}>{data.number}</div>
            </div>
            <h4 className={meetNewPeople.title}>{data.title}</h4>

            <Link to={redirectPath}>
                <button className="special_profile_button w-44">Join Now !</button>
            </Link>
        </motion.div>
    );
};

export default MeetNewPeopleCard;
