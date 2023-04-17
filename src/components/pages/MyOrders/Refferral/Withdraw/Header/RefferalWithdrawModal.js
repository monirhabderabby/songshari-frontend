import { Input } from "antd";
import React,{useState} from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Modal } from "../../../../../modals/Modal";

const { TextArea } = Input;

export const RefferalWithdrawModal = ({ modalControll }) => {
    const [amount, setAmount] = useState("")
    const [note, setNote] = useState("")
    return (
        <Modal modalControll={modalControll}>
            <div className="w-full flex justify-between items-center border-b-[1px] border-gray-200 pb-[10px]">
                <h3 className="text-[22px] font-outfit font-medium">Wallet Withdraw Request</h3>
                <AiOutlineClose className="text-[24px] cursor-pointer text-gray-500 hover:text-black" onClick={modalControll} />
            </div>
            <div className="flex flex-col gap-y-[15px]">
                <Input placeholder="Amount" size="large" />
                <TextArea rows={4} placeholder="Write a notes" />
                <button className="bg-[linear-gradient(315deg,#eb4786_0%,#b854ab_74%)] h-[40px] rounded-[8px] text-white font-Inter font-medium">
                    Confirm
                </button>
            </div>
        </Modal>
    );
};
