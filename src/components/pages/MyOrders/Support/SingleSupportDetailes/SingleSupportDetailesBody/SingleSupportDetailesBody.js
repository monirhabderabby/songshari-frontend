import React from "react";

export const SingleSupportDetailesBody = ({ ticket }) => {
    const { replies } = ticket || {};

    let content;
    if (replies?.length === 0) {
        content = <div className="h-full w-full flex justify-center items-center">No Replies Available</div>;
    } else if (replies?.length > 0) {
        content = (
            <div className="pt-[20px]">
                {replies?.map(item => {
                    const { images, message, role, _id } = item || {};
                    if (!role.includes("admin")) {
                        return (
                            <div key={_id} className="flex gap-x-[20px]">
                                <img className="w-[40px] h-[40px] rounded-full" src={images[0]?.url} alt="profile" />
                                <div>
                                    <p className="bg-gray-100 p-[10px] rounded-[4px]">{message}</p>
                                    <span className="text-gray-400 text-[12px]">11:30 PM</span>
                                </div>
                            </div>
                        );
                    } else if (role.includes("admin")) {
                        return (
                            <div key={_id} className="flex justify-end items-center gap-x-[20px]">
                                <div>
                                    <p>{message}</p>
                                    <span className="text-gray-400 text-[12px]">11:30 PM (Admin)</span>
                                </div>
                                <img
                                    className="w-[40px] h-[40px] rounded-full"
                                    src="https://png.pngtree.com/png-clipart/20220719/original/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_8385663.png"
                                    alt="profile"
                                />
                            </div>
                        );
                    } else {
                        return false;
                    }
                })}
            </div>
        );
    }
    return (
        <div className="h-[500px] mt-[20px] bg-white shadow-[rgba(0,0,0,0.05)_0px_6px_24px_0px,_rgba(0,0,0,0.08)_0px_0px_0px_1px] w-full overflow-y-auto px-[12px] rounded-[8px]">
            {content}
        </div>
    );
};
