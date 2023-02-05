// Configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { TbCurrencyTaka } from "react-icons/tb";
import { useNavigate } from "react-router";
import { useServiceDeleteMutation } from "../../../../../../Redux/features/Service/ServiceApi";
import { BackDropLoader } from "../../../../Cards/Loader/backDrop/BackDropLoader";

const SingleServicePrizeReviewCard = ({ price, deadline, _id }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [serviceDelete, { isSuccess, isLoading }] = useServiceDeleteMutation();

    const handleDelete = () => {
        serviceDelete(_id);
    };

    useEffect(() => {
        if (isLoading) {
            setOpen(true);
        }
        if (isSuccess) {
            setOpen(false);
            navigate(-1);
        }
    }, [isLoading, isSuccess, navigate]);
    return (
        <div className="w-[351px] rounded-xl bg-[linear-gradient(180deg,#DE298C_0%,#A52DC7_100%)] shadow-[2px_2px_8px_rgba(0,0,0,0.12)] py-8 px-4 text-white">
            <div className="flex justify-center items-center text-[28px] leading-7 font-bold mb-5">
                <TbCurrencyTaka />
                <p>{price}</p>
            </div>
            <div className="text-center text-sm pb-3 border-b border-[#D1D1D1] mb-6">
                <p>Delivery in</p>
                <p className="font-semibold">{deadline}</p>
            </div>
            <p className="text-sm font-semibold uppercase mb-6">Review : 88</p>
            <div className="mb-12">
                <h4 className="uppercase pb-3 mb-3 border-b border-[#D1D1D1]">Control Panel</h4>
                <div className="flex justify-between items-center mb-1">
                    <p className="text-sm font-semibold">Earnings</p>
                    <div className="flex justify-center items-center text-sm font-bold">
                        <TbCurrencyTaka />
                        <p>100</p>
                    </div>
                </div>
                <div className="flex justify-between gap-y-1 items-center mb-1">
                    <p className="text-sm font-semibold">Items Sold</p>
                    <p className="text-sm font-bold">100</p>
                </div>
            </div>
            {/* Control buttons */}
            <div className="flex justify-between items-center">
                <button className="font-bold w-[92px] py-[6px] text-black bg-white rounded-xl shadow-[2px_2px_8px_rgba(0,0,0,0.1)]">Pause</button>
                <button className="font-bold w-[92px] py-[6px] text-black bg-white rounded-xl shadow-[2px_2px_8px_rgba(0,0,0,0.1)]">Edit</button>
                <button
                    className="font-bold w-[92px] py-[6px] text-black bg-white rounded-xl shadow-[2px_2px_8px_rgba(0,0,0,0.1)]"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
            {open && <BackDropLoader open={open} setOpen={setOpen} />}
        </div>
    );
};

export default SingleServicePrizeReviewCard;
