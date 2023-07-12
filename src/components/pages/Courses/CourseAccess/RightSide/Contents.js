// Configuration
import React from "react";

// Third party packages
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentVideo } from "../../../../../Redux/features/Course/coursesAccessSlice";

export const Contents = ({ contents }) => {
    const { currentVideo } = useSelector(state => state.persistedReducer?.courseAccess) || {};

    const { _id: currentID } = currentVideo || {};
    const dispatch = useDispatch();

    const handleCurrentVideo = video => {
        dispatch(setCurrentVideo(video));
    };
    return (
        <div>
            {contents?.map(content => {
                return (
                    <div
                        className={`flex items-center py-[4px] gap-x-[6px] hover:bg-gray-100 px-[6px] cursor-pointer rounded-[4px] ${
                            currentID === content?._id && "bg-gray-200"
                        }`}
                        onClick={() => handleCurrentVideo(content)}
                        key={content?._id}
                    >
                        <AiOutlinePlayCircle className="text-[20px]" />
                        <div className="flex flex-col font-outfit">
                            <h4 className="text-[14px]">{content?.name}</h4>
                            <span className="text-[10px]">20 Minutes</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
