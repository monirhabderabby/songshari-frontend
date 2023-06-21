import React from "react";
import { Link } from "react-router-dom";
import meetNewPeople from "../../../assets/css/MeetNewPeople.module.css";
import getCookie from "../../../Helper/cookies/getCookie";

const MeetNewPeopleCard = ({ data }) => {
    const token = getCookie("token");

    let redirectPath;
    if (token) {
        redirectPath = "/find-partner/suggested";
    } else {
        redirectPath = "/signup";
    }
    return (
      <>
        <div>
          <div className={`${meetNewPeople.singleWorkBox} mx-auto`}>
            <div className={meetNewPeople.icon}>
              <img src={data.img} alt="Not Available" />
              <div className={meetNewPeople.number}>{data.number}</div>
            </div>
            <h4 className={meetNewPeople.title}>{data.title}</h4>

            <Link to={redirectPath}>
              <button className="special_profile_button w-44">Join Now !</button>
            </Link>
          </div>
        </div>
      </>
    );
};

export default MeetNewPeopleCard;
