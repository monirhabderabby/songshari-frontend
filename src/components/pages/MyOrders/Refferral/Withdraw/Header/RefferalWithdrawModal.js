/* eslint-disable react-hooks/exhaustive-deps */
import { Input } from "antd";
import React,{useState,useEffect} from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Modal } from "../../../../../modals/Modal";
import { useBalanceWithdrawMutation } from "../../../../../../Redux/features/referral/referralApi";
import Error from "../../../../../ui/error/Error";

const { TextArea } = Input;

export const RefferalWithdrawModal = ({ modalControll,setSuccessSnackBarOpen,setOpen }) => {
    const [amount, setAmount] = useState(1)
    const [note, setNote] = useState("")
    const [withdraw,{data,isLoading,error}] = useBalanceWithdrawMutation()
    const setPositivePoint = (e) =>{
        if(e.target.value>0){
            setAmount(e.target.value);
        }
    }
    const handleSubmit = () => {
        withdraw({amount, note});
    }

    useEffect(()=>{
        if(data){
            setAmount(1);
            setNote("");
            setSuccessSnackBarOpen(true);
            setOpen(false);
        }
    },[data])
    
    return (
        <Modal modalControll={modalControll}>
            <div className="w-full flex justify-between items-center border-b-[1px] border-gray-200 pb-[10px]">
                <h3 className="text-[22px] font-outfit font-medium">Wallet Withdraw Request</h3>
                <AiOutlineClose className="text-[24px] cursor-pointer text-gray-500 hover:text-black" onClick={modalControll} />
            </div>
            <div className="flex flex-col gap-y-[15px]">
                <Input type="number" value={amount} onChange={setPositivePoint} placeholder="Amount" size="large" />
                <TextArea value={note} onChange={(e)=>setNote(e.target.value)} rows={4} placeholder="Write a notes" />
                <button onClick={handleSubmit} className="bg-[linear-gradient(315deg,#eb4786_0%,#b854ab_74%)] h-[40px] rounded-[8px] text-white font-Inter font-medium">
                    {isLoading?"loading...":'Confirm'}
                </button>
            </div>
            {error && <Error message={error?.data?.message} />}

        </Modal>
    );
};
