// Configuration
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

// Third party packages
import { TbCurrencyTaka } from "react-icons/tb";
import { decodeToken } from "react-jwt";

// Components
import { Oval } from "react-loader-spinner";
import getCookie from "../../../../../../Helper/cookies/getCookie";
import { useChangeServiceStatusMutation, useServiceDeleteMutation } from "../../../../../../Redux/features/Service/ServiceApi";
import { BackDropLoader } from "../../../../Cards/Loader/backDrop/BackDropLoader";

const SingleServicePrizeReviewCard = ({ price, deadline, _id, isActive, responsive, handlePrizeReviewModalCancel }) => {
    const [backDrop, setBackDrop] = useState(false);
    const navigate = useNavigate();
    const [serviceDelete, { isSuccess: deleteSuccess, isLoading }] = useServiceDeleteMutation();
    const [changeServiceStatus, { isLoading: statusLoading }] = useChangeServiceStatusMutation();

    const handleDelete = () => {
        serviceDelete(_id);
    };

    useEffect(() => {
        if (isLoading) {
            setBackDrop(true);
        }
        if (deleteSuccess) {
            handlePrizeReviewModalCancel();
            navigate(-1);
        }
    }, [deleteSuccess, isLoading, navigate, handlePrizeReviewModalCancel]);

    const handleStatusChange = () => {
        changeServiceStatus(_id);
    };

    // Made decision for which route will go for Edit service
    let redirectPath;
    const token = getCookie("token");
    const tokenData = decodeToken(token);
    const { role } = tokenData || {};
    if (role.includes("agent")) {
        responsive ? (redirectPath = `/serviceEditMov/${_id}`) : (redirectPath = `/agentProfile/serviceEdit/${_id}`);
    } else if (role.includes("lawyer")) {
        responsive ? (redirectPath = `/serviceEditMov/${_id}`) : (redirectPath = `/lawyerProfile/serviceEdit/${_id}`);
    } else if (role.includes("kazi")) {
        responsive ? (redirectPath = `/serviceEditMov/${_id}`) : (redirectPath = `/kaziProfile/serviceEdit/${_id}`);
    }

    return (
        <div className="lg:w-[351px] rounded-xl bg-[linear-gradient(180deg,#DE298C_0%,#A52DC7_100%)] shadow-[2px_2px_8px_rgba(0,0,0,0.12)] py-8 px-2 lg:px-4 text-white">
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
                {isActive ? (
                    <button
                        className="font-bold w-[72px] lg:w-[92px] py-[6px] text-black bg-white rounded-xl shadow-[2px_2px_8px_rgba(0,0,0,0.1)] flex justify-center items-center"
                        onClick={handleStatusChange}
                    >
                        {statusLoading ? (
                            <Oval
                                height={20}
                                width={20}
                                color="#A52AC6"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel="oval-loading"
                                secondaryColor="#E41272"
                                strokeWidth={5}
                                strokeWidthSecondary={3}
                            />
                        ) : (
                            "Pause"
                        )}
                    </button>
                ) : (
                    <button
                        className="font-bold w-[72px] lg:w-[92px] py-[6px] text-black bg-white rounded-xl shadow-[2px_2px_8px_rgba(0,0,0,0.1)] flex justify-center items-center"
                        onClick={handleStatusChange}
                    >
                        {statusLoading ? (
                            <Oval
                                height={20}
                                width={20}
                                color="#A52AC6"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel="oval-loading"
                                secondaryColor="#E41272"
                                strokeWidth={5}
                                strokeWidthSecondary={3}
                            />
                        ) : (
                            "Active"
                        )}
                    </button>
                )}
                <button
                    className="font-bold w-[72px] lg:w-[92px] py-[6px] text-black bg-white rounded-xl shadow-[2px_2px_8px_rgba(0,0,0,0.1)]"
                    onClick={() => navigate(redirectPath)}
                >
                    Edit
                </button>
                <button
                    className="font-bold w-[72px] lg:w-[92px] py-[6px] text-black bg-white rounded-xl shadow-[2px_2px_8px_rgba(0,0,0,0.1)]"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
            {backDrop && <BackDropLoader {...{ backDrop, setBackDrop }} />}
        </div>
    );
};

export default SingleServicePrizeReviewCard;
