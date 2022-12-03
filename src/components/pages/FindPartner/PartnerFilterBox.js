import React, { useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import "../../../App.css";
import FindPartner from "../../../assets/css/FindPartner.module.css";
import { AccordionPartner } from "./AccordionPartner";

const PartnerFilterBox = () => {
    const [remuneration, setRemuneration] = useState(true);
    const [location, setLocation] = useState(true);
    const [hometown, setHomeTown] = useState(true);
    const [current, setCurrent] = useState(true);
    const [marrital, setMarritul] = useState(true);
    const [religion, setRelion] = useState(true);
    const [category, setCategory] = useState(true);
    const [qualifications, setQualifications] = useState(true);
    const [categoryItem, setCategoryItem] = useState("Bride");
    const [locationItem, setLocationItem] = useState("Myself");
    const [religionItem, setReligionItem] = useState("Islam");
    const [hometownItem, setHomeTownItem] = useState("Dhaka");
    const [currentItem, setCurrentItem] = useState("Dhaka");
    const [remunerationItem, setRemunerationItem] = useState("  30,000 - 40,000");
    const [qualificationsItem, setQualificationsItem] = useState(" Dhaka");
    const [maritalItem, setMaritalItem] = useState(" Single");

    return (
        <>
            <div
                id="join-now-box2"
                className={`bg-[#fff]  ${FindPartner.partnerFilterBox} w-[400px] lg:w-full mx-auto rounded-[10px] px-[30px] pt-[20px] pb-[30px]`}
                style={{
                    visibility: "visible",
                    boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.12)",
                }}
            >
                <p className="flex items-center">
                    <HiOutlineAdjustmentsHorizontal className="text-[28px] mr-2" /> <span className="text-[24px] font-medium font-Inter">Filter</span>
                </p>
                <AccordionPartner></AccordionPartner>
            </div>
        </>
    );
};

export default PartnerFilterBox;
