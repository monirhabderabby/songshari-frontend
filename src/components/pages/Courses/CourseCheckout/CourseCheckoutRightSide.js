import React, { useEffect, useState } from "react";
import { MdSecurity } from "react-icons/md";
import { useBuyCourseMutation } from "../../../../Redux/features/Course/courseApi";
import { OvalLoader } from "../../../shared/Cards/Loader/OvalLoader/OvalLoader";
import Error from "../../../ui/error/Error";

export const CourseCheckoutRightSide = ({ course }) => {
    const [customError, setCustomError] = useState("");
    const { name, image, price, _id } = course || {};

    const [buyCourse, { isLoading, isSuccess, error, isError }] = useBuyCourseMutation();

    const handleOrder = () => {
        buyCourse({
            id: _id,
        });
    };

    useEffect(() => {
        if (error) {
            const { data } = error || {};
            setCustomError(data?.message);
        }
    }, [error]);
    return (
        <div className="mt-[30px] w-full shadow-[0px_2px_6px_rgba(0,0,0,0.14)] p-[20px] rounded-[4px] bg-white">
            <h3 className="text-[20px] font-fira font-semibold text-black">Your order at a glance</h3>
            <div className="h-[60px] mt-[20px] rounded-[4px] w-full bg-slate-100 shadow-md flex justify-between items-center px-[10px]">
                <p className="text-[16px] font-semibold font-Inter">Product</p>
                <p className="text-[16px] font-semibold font-Inter">Total</p>
            </div>
            <div className="h-[80px] px-[10px] flex justify-between gap-x-[20px] items-center border-b-[1px] border-gray-200">
                <div className="flex items-center gap-x-[4px]">
                    <img src={image} loading="lazy" alt="CourseImage" className="w-[50px] h-[30px] lg:w-[60px] lg:h-[40px]" />
                    <p className="text-[14px] font-normal font-Inter lg:text-[16px]">{name}</p>
                </div>
                <div className="font-Nunito">{price}</div>
            </div>
            <div className="h-[60px] px-[10px] flex justify-between items-center">
                <span className="font-Nunito font-semibold text-[18px]">Total Bill</span>
                <span className="font-medium">{price}</span>
            </div>

            <div className="flex items-center justify-center gap-x-[8px]">
                <MdSecurity className="text-[14px] text-green-500" />
                <p className="font-Inter text-[14px] text-green-500">Payment Secured</p>
            </div>
            {isError && <Error message={customError} />}
            <button
                className={`w-full mt-[20px] lg:mt-[30px] h-[40px] rounded-[4px] flex justify-center items-center ${
                    isSuccess ? "bg-green-400" : "bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]"
                } ${
                    !isSuccess || (!isError && "hover:bg-[linear-gradient(166deg,rgb(255,0,128)_0%,rgb(148,45,255)_100%)]")
                } text-white duration-300 ${isError && "cursor-not-allowed"}`}
                onClick={handleOrder}
                disabled={isSuccess || isError}
            >
                {isLoading ? <OvalLoader height={30} width={30} color="#FFFFFF" /> : isSuccess ? "Purchased" : <span>Purchase Now</span>}
            </button>
        </div>
    );
};
