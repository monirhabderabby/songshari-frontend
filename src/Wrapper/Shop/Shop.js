// Configuration
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

// Components
import CustomHeader from "../../components/shared/CustomHeader/CustomHeader";

const Shop = () => {
  return (
    <div>
      <CustomHeader title="Shop" />
      {/* Shop Nav */}
      <div className="flex items-center justify-start gap-3 lg:max-w-[1000px] xl:max-w-[1200px] mx-auto my-8">
        <NavLink
          to="/shop/shopProducts"
          className={({ isActive }) =>
            isActive
              ? "bg-[#FC09B2] text-white text-xl leading-6 font-bold px-10 py-3 rounded-md border border-white duration-500"
              : `text-sm leading-[22px] font-bold px-10 py-3 border border-[#ECECEC] rounded-md duration-500`
          }
        >
          Shop
        </NavLink>
        <NavLink
          to={"/shop/shopOrders"}
          className={({ isActive }) =>
            isActive
              ? "bg-[#FC09B2] text-white text-xl leading-6 font-bold px-10 py-3 rounded-md border border-white duration-500"
              : "text-sm leading-[22px] font-bold px-10 py-3 border border-[#ECECEC] rounded-md duration-500"
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
