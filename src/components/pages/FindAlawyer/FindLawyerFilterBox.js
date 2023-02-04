// Configuration
import React from "react";

// Third party packges
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

export const FindLawyerFilterBox = () => {
    return (
        <div
            id="join-now-box2"
            className={`bg-[#fff]  max-w-[290px] mx-auto rounded-[10px] px-[30px] pt-[20px] pb-[30px]`}
            style={{
                visibility: "visible",
                boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.12)",
            }}
        >
            <p className="flex items-center">
                <HiOutlineAdjustmentsHorizontal className="text-[28px] mr-2" /> <span className="text-[24px] font-medium font-Inter">Filter</span>
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum quos aut dolorem voluptas doloremque assumenda ab
                repellendus, ratione vel facere deleniti. Possimus harum consequuntur nesciunt illum veniam perspiciatis, id, praesentium placeat
                ducimus reiciendis officia, earum laudantium dolorum magni quisquam quasi temporibus repudiandae quo ipsa. Officia consectetur illum
                nam ea.
            </p>
        </div>
    );
};
