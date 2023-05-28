// configuration
import React from "react";
import { useParams } from "react-router";

// third party packages
import CopyToClipboard from "react-copy-to-clipboard";
import { BsShieldShaded } from "react-icons/bs";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { decodeToken } from "react-jwt";
import getCookie from "../../../../Helper/cookies/getCookie";

export const VideoCallClipboard = () => {
    // js variables
    const { id } = useParams();
    const { email } = decodeToken(getCookie("token"));

    return (
        <div className="shadow-[0px_1px_2px_0_rgba(60,64,67,.3),_0px_2px_6px_2px_rgba(60,64,67,.15)] bg-white rounded-[8px] w-[22.5rem] p-[20px]">
            <div>
                <p className="text-[22px]">Your meeting's ready</p>
            </div>
            <div className="w-full bg-[rgba(244,243,244,1)] rounded-[4px] pl-[0.75rem] mt-[15px] flex justify-between">
                <p>{id}</p>
                <CopyToClipboard text={id}>
                    <div className="flex items-center hover:bg-gray-300 p-2 rounded-full cursor-pointer">
                        <HiOutlineClipboardDocumentList />
                    </div>
                </CopyToClipboard>
            </div>
            <div className="flex items-center gap-x-[10px] mt-[15px]">
                <div>
                    <BsShieldShaded />
                </div>
                <p className="text-[10px] text-gray-400">People who use this meeting link must get your permission before they can join</p>
            </div>

            <h3 className="text-[14px] mt-[15px]">Joined as {email}</h3>
        </div>
    );
};
