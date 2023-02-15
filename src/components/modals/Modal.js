import React from "react";

export const Modal = ({ children, modalControll }) => {
    return (
        <>
            <div className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer" onClick={modalControll}></div>
            <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white py-[37px] px-[50px] fixed top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                {children}
            </div>
        </>
    );
};
