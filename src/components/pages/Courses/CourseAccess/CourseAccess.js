import React, { useState } from "react";
import useDocumentTitle from "../../../../assets/utilities/useDocumentTitle";
import { MobileBackButton } from "../../../shared/Components/MobileBackButton";
import CustomHeader from "../../../shared/CustomHeader/CustomHeader";
import { PlayerContainer } from "./LeftSide/PlayerContainer";
import { CourseAccessOutline } from "./RightSide/CourseAccessOutline";

export const CourseAccess = () => {
    const [link, setLink] = useState("https://www.youtube.com/watch?v=ClQLA-TXVQI");

    useDocumentTitle("Shongshari | Course Access");

    return (
        <div>
            <div className="hidden lg:block">
                <CustomHeader title="Course" />
            </div>
            <div className="lg:hidden">
                <MobileBackButton name="Course" />
            </div>
            <div className="w-full lg:w-[1200px]  2xl:w-[1400px] mx-auto h-auto flex lg:flex-row flex-col gap-y-[20px] pt-[44px] px-[26px]">
                <div className=" w-full lg:max-w-[660px] 2xl:w-[850px] mx-auto min-h-[400px]">
                    <PlayerContainer link={link} />
                </div>
                <div className="sticky top-[44px] flex-1 mx-auto w-full lg:max-w-[400px]">
                    <CourseAccessOutline setLink={setLink} />
                </div>
            </div>
        </div>
    );
};
