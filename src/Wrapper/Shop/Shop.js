// Configuration
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { MobileBackButton } from "../../components/shared/Components/MobileBackButton";

// Components
import CustomHeader from "../../components/shared/CustomHeader/CustomHeader";

const Shop = () => {
    return (
        <div>
            <div className="hidden lg:block">
                <CustomHeader title="Shop" />
            </div>
            <div className="lg:hidden">
                <MobileBackButton name="shop" />
            </div>
            {/* Shop Nav */}
            <div className="flex items-center justify-start gap-3 lg:max-w-[1000px] xl:max-w-[1200px] mx-auto my-8 px-[12px] md:px-[24px]">
                <NavLink
                    to="/shop/shopProducts"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-[#FC09B2] text-white text-[12px] lg:text-xl leading-6 font-bold px-5 lg:px-10 py-3 rounded-md border border-white duration-500"
                            : `text-[12px] lg:text-sm leading-[22px] font-bold px-5 lg:px-10 py-2 lg:py-3 border border-[#ECECEC] rounded-md duration-500`
                    }
                >
                    Shop
                </NavLink>
                <NavLink
                    to={"/shop/shopOrders"}
                    className={({ isActive }) =>
                        isActive
                            ? "bg-[#FC09B2] text-white text-[12px] lg:text-xl leading-6 font-bold px-5 lg:px-10 py-2 lg:py-3 rounded-md border border-white duration-500"
                            : "text-[12px] lg:text-sm leading-[22px] font-bold px-5 lg:px-10 py-2 lg:py-3 border border-[#ECECEC] rounded-md duration-500"
                    }
                >
                    My Orders
                </NavLink>
            </div>
            {/* Shop Outlet */}
            <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Shop;
