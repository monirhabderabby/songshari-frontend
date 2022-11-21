import React from "react";
import meetNewPeople from "../../../assets/css/MeetNewPeople.module.css";

const MeetNewPeopleCard = ({ data }) => {
    return (
        <>
            <div>
                <div className={meetNewPeople.singleWorkBox}>
                    <div className={meetNewPeople.icon}>
                        <img src={data.img} alt="img" />
                        <div className={meetNewPeople.number}>{data.number}</div>
                    </div>
                    <h4 className={meetNewPeople.title}>{data.title}</h4>
                    <a href="!#" className={meetNewPeople.customButton}>
                        Join Now !
                    </a>
                </div>
            </div>
        </>
    );
};

export default MeetNewPeopleCard;
