// configuration
import React, { useState } from "react";
import { useNavigate } from "react-router";

// components
import { CardOfCart } from "../../shared/Cards/Shop/Cart/CardOfCart";
import { MobileBackButton } from "../../shared/Components/MobileBackButton";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";

export const Cart = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const navigate = useNavigate();

    let content;
    if (cart?.length === 0 || !cart) {
        content = (
            <div className="h-[250px] w-full flex flex-col justify-center items-center gap-y-[20px]">
                <p className="text-[16px] text-gray-400 text-center font-Nunito">
                    Your cart is currently empty. <br /> Browse our products to find something you love!
                </p>
                <button
                    className="border-[1px] border-gray-400 px-[12px] py-[4px] rounded-[4px] hover:border-gray-800 duration-300"
                    onClick={() => navigate("/shop")}
                >
                    Shop Now
                </button>
            </div>
        );
    } else if (cart?.length > 0) {
        content = (
            <div className="mt-[30px] lg:mt-[59px] grid grid-cols-1 gap-y-[32px]">
                {cart?.map((product, index) => {
                    return <CardOfCart key={product?._id} product={product} index={index} cart={cart} setCart={setCart} />;
                })}
            </div>
        );
    }
    return (
        <div className="pb-[250px]">
            <div className="hidden lg:block">
                <CustomHeader title="Cart" />
            </div>
            <div className="lg:hidden">
                <MobileBackButton />
            </div>
            <div className="mt-0 lg:mt-[72px] max-w-[1200px] mx-auto px-[20px]">
                <h1 className="text-[#000000] text-[30px] lg:text-[40px] font-Inter font-bold text-left">Your Cart</h1>
                {content}
                {cart?.length > 0 && (
                    <div className="w-full flex justify-center mt-[40px] lg:mt-[71px]">
                        <button
                            className="w-full lg:w-[458px] h-[50px] lg:h-[82px] flex justify-center items-center bg-[linear-gradient(137.27deg,_#EE2FFF_19.41%,_#CD1D5C_65.49%)] rounded-[12px] lg:rounded-[24px] text-[20px] lg:text-[32px] font-bold font-sans text-white shadow-[0px_4px_4px_rgba(14,53,191,0.25)]"
                            onClick={() => navigate("/checkout/5")}
                        >
                            Processed To Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
