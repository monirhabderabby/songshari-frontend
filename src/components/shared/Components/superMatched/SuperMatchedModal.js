import lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { removeSwap } from "../../../../Redux/features/Swap/SwapSlice";
import congrate from "../../../../assets/lottieFiles/112854-congratulations.json";
import { Modal } from "../../../modals/Modal";

export const SuperMatchedModal = () => {
    const animationContainer = useRef(null);
    const dispatch = useDispatch();
    const { matchedProfile } = useSelector(state => state.persistedReducer?.swap);
    const { designation, firstName, lastName, profilePhoto, _id: profileID } = matchedProfile || {};
    const navigate = useNavigate();

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: "svg", // Choose the appropriate renderer (svg, canvas, html)
            loop: true,
            autoplay: true,
            animationData: congrate,
        });

        return () => {
            // Clean up the animation when the component unmounts
            anim.destroy();
        };
    }, []);

    const viewProfile = () => {
        navigate(`/profile/${profileID}`);
        dispatch(removeSwap());
    };

    const modalControll = () => {
        dispatch(removeSwap());
    };
    return (
        <Modal modalControll={modalControll}>
            <section className="flex flex-col items-center min-h-max">
                <div ref={animationContainer} className="relative w-[350px] h-[350px]"></div>
                <div className="content absolute top-[37px] flex flex-col items-center px-[16px] h-auto">
                    <img src={profilePhoto} className="h-[110px] w-[110px] lg:w-[120px] lg:h-[120px] rounded-full" alt="profile" />
                    <div className="flex flex-col items-center">
                        <h3 className="font-Inter font-medium text-black">{`${firstName} ${lastName}`}</h3>
                        <p className="text-[14px] text-gray-500 font-outfit">{designation}</p>
                    </div>
                    <h1 className="text-[22px] font-Poppins mt-[20px] font-medium">Congratulation</h1>
                    <p className="text-[14px] text-center lg:w-3/4">
                        {" "}
                        You've achieved a Super Match! 🎉 This is a remarkable accomplishment and something to be truly proud of. Super Matches are
                        rare and extraordinary, showcasing a strong connection and compatibility.
                    </p>
                    <button
                        className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]
                        hover:bg-[linear-gradient(166deg,rgb(242,45,122)_2%,rgb(148,45,222)_100%)] text-white px-4 py-1 rounded-[4px] mt-[12px]"
                        onClick={viewProfile}
                    >
                        View Profile
                    </button>
                </div>
            </section>
        </Modal>
    );
};
