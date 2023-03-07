// configuration
import React from "react";
import { useNavigate } from "react-router";

// components
import { CardOfCart } from "../../shared/Cards/Shop/Cart/CardOfCart";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";

export const Cart = () => {
    const navigate = useNavigate();

    // demo data
    const products = [
        {
            id: 1,
            brand: "Apple",
            description:
                '2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 32GB RAM, 1TB SSD) - Space Gray 14" Full HD IPS, AMD Ryzen 7 4700U Octa-Core Processor with Radeon Graphics',
            price: 2500,
            image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 2,
            brand: "Apple",
            description:
                '2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 32GB RAM, 1TB SSD) - Space Gray 14" Full HD IPS, AMD Ryzen 7 4700U Octa-Core Processor with Radeon Graphics',
            price: 2500,
            image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 3,
            brand: "Apple",
            description:
                '2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 32GB RAM, 1TB SSD) - Space Gray 14" Full HD IPS, AMD Ryzen 7 4700U Octa-Core Processor with Radeon Graphics',
            price: 2500,
            image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 4,
            brand: "Apple",
            description:
                '2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 32GB RAM, 1TB SSD) - Space Gray 14" Full HD IPS, AMD Ryzen 7 4700U Octa-Core Processor with Radeon Graphics',
            price: 2500,
            image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
    ];
    return (
        <div className="pb-[250px]">
            <CustomHeader title="Cart" />
            <div className="mt-[72px] max-w-[1200px] mx-auto px-[20px]">
                <h1 className="text-[#000000] text-[40px] font-Inter font-bold text-left">Your Cart</h1>
                <div className="mt-[59px] grid grid-cols-1 gap-y-[32px]">
                    {products?.map(product => {
                        return <CardOfCart key={product?.id} />;
                    })}
                </div>
                <div className="w-full flex justify-center mt-[71px]">
                    <button
                        className="w-[458px] h-[82px] flex justify-center items-center bg-[linear-gradient(137.27deg,_#EE2FFF_19.41%,_#CD1D5C_65.49%)] rounded-[24px] text-[32px] font-bold font-sans text-white shadow-[0px_4px_4px_rgba(14,53,191,0.25)]"
                        onClick={() => navigate("/checkout/5")}
                    >
                        Processed To Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};
