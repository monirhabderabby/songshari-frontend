import React from "react";
import { Modal } from "../../../../../modals/Modal";

export const DeleteConfirmationModal = ({ modalControll, handleDelete }) => {
    const deleteHandler = () => {
        handleDelete();
    };
    return (
        <Modal modalControll={modalControll}>
            <div className="h-[491px] w-full flex flex-col items-center justify-center rounded-[8px] over">
                <h3 className="text-[48px] text-[#000000] font-Inter font-bold text-center">
                    Click to the <span className="text-[#E41272]">Confirm</span> button to <span className="text-[#E21010]">Delete</span> the service
                </h3>

                <div className="mt-[40px] flex justify-evenly w-full">
                    <button
                        className="w-[130px] h-[49px] flex justify-center items-center text-white bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-[10px]"
                        onClick={deleteHandler}
                    >
                        Confirm
                    </button>
                    <button className="w-[130px] h-[49px] flex justify-center items-center border-[1px] text-black border-[#000000] rounded-[10px]">
                        Cancle
                    </button>
                </div>
            </div>
        </Modal>
    );
};
