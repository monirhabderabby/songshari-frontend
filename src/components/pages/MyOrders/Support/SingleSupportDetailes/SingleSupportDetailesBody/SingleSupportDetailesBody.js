import { AnimatePresence, motion } from "framer-motion";
import moment from "moment";
import React from "react";
import customFunc from "../../../../../../assets/utilities/customFunc";

export const SingleSupportDetailesBody = ({ ticket }) => {
    const { replies } = ticket || {};
    const { profilePhotoDecisionMaker } = customFunc;

    let content;
    if (replies?.length === 0) {
        content = <div className="h-full w-full flex justify-center items-center">No Replies Available</div>;
    } else if (replies?.length > 0) {
        content = (
            <div className="pt-[20px]">
                <AnimatePresence>
                    {replies?.map((item, index) => {
                        const { images, message, role, _id, createdAt, profilePhoto } = item || {};
                        if (!role.includes("admin")) {
                            return (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ opacity: { duration: 0.2 }, layout: { duration: index * 0.05 } }}
                                    key={_id}
                                    className="flex gap-x-[20px] my-[10px]"
                                >
                                    <img className="w-[40px] h-[40px] rounded-full" src={profilePhotoDecisionMaker(profilePhoto)} alt="profile" />
                                    <div className="flex flex-col items-start gap-y-[5px]">
                                        {images?.length > 0 && <img className="w-full lg:w-1/2" src={images[0]?.url} alt="problemImage" />}
                                        <p className="bg-gray-100 p-[10px] rounded-[4px]">{message}</p>
                                        <span className="text-gray-400 text-[12px]">{moment(createdAt).format("LT")}</span>
                                    </div>
                                </motion.div>
                            );
                        } else if (role.includes("admin")) {
                            return (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ opacity: { duration: 0.2 }, layout: { duration: index * 0.05 } }}
                                    key={_id}
                                    className="flex justify-end items-center gap-x-[20px] my-[10px]"
                                >
                                    <div className="flex flex-col items-end gap-y-[5px]">
                                        {images?.length > 0 && <img className="w-full lg:w-1/2" src={images[0]?.url} alt="problemImage" />}
                                        <p>{message}</p>
                                        <span className="text-gray-400 text-[12px]">{moment(createdAt).format("LT")} (Admin)</span>
                                    </div>
                                    <img
                                        className="w-[40px] h-[40px] rounded-full"
                                        src="https://png.pngtree.com/png-clipart/20220719/original/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_8385663.png"
                                        alt="profile"
                                    />
                                </motion.div>
                            );
                        } else {
                            return false;
                        }
                    })}
                </AnimatePresence>
            </div>
        );
    }
    return (
        <div className="h-[500px] mt-[20px] bg-white shadow-[rgba(0,0,0,0.05)_0px_6px_24px_0px,_rgba(0,0,0,0.08)_0px_0px_0px_1px] w-full overflow-y-auto px-[12px] rounded-[8px]">
            {content}
        </div>
    );
};
