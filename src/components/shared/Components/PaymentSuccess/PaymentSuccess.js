import lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import paymentLottie from "../../../../assets/lottieFiles/payment.json";
import CustomHeader from "../../CustomHeader/CustomHeader";
import { MobileBackButton } from "../MobileBackButton";

export const PaymentSuccess = () => {
    // js variable
    const animationContainer = useRef(null);
    const navigate = useNavigate();

    // function declaration
    const backButtonHandler = () => {
        navigate("/");
    };

    // useEffect declaration
    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: "svg", // Choose the appropriate renderer (svg, canvas, html)
            loop: false,
            autoplay: true,
            animationData: paymentLottie,
        });

        return () => {
            // Clean up the animation when the component unmounts
            anim.destroy();
        };
    }, []);

    return (
        <div>
            <div className="hidden lg:block">
                <CustomHeader title="payment" />
            </div>
            <div className="lg:hidden">
                <MobileBackButton name="Payment" />
            </div>
            <section className="flex flex-col justify-center items-center gap-y-[7px]">
                <div ref={animationContainer} className="w-[250px]"></div>
                <h1 className="text-[28px] text-gray-500 font-Poppins font-semibold">Payment Successfull</h1>
                <p className="w-full lg:w-1/3 text-center text-[14px] text-gray-400">
                    Congratulations! Your payment has been received successfully. We appreciate your promptness in completing the transaction. Thank
                    you for your trust and cooperation. If you have any questions or require further assistance, please don't hesitate to reach out.
                </p>
                <button
                    className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white px-4 py-1 mt-[15px] rounded-[4px] hover:bg-[linear-gradient(166deg,rgb(242,40,122)_20%,rgb(148,45,217)_100%)] duration-300"
                    onClick={backButtonHandler}
                >
                    Back to home
                </button>
            </section>
        </div>
    );
};
