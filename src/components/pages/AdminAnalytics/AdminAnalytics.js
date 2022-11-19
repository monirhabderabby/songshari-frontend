import React from "react";
import AdminAnalyticsCSS from "../../../assets/css/AdminAnalytics.module.css";
import AdminAnalyticsContext from "./AdminAnalyticsContext";

const AdminAnalytics = () => {
  return (
    <section>
      <div className="custom-container py-10">
        <div
          style={{ boxShadow: "0px 5px 30px rgba(35, 57, 184, 0.2)" }}
          className="w-[457px] rounded-[10px] py-[20px] px-[20px] flex justify-around items-center bg-[#FFFFFF]"
        >
          <a className="text-[15px] font-semibold text-[#AC216C]" href="!#">
            Admin
          </a>
          <a className="text-[15px] font-semibold text-[#000]" href="!#">
            Profile
          </a>
          <a
            className="text-[15px] relative inline-block font-semibold text-[#000]"
            href="!#"
          >
            Friends
            <span
              style={{
                background: "linear-gradient(166deg, #F22876 0%, #942DD9 100%)",
              }}
              className="  text-[8px] absolute top-[-7px] right-[-18px] font-semibold rounded-[30px] py-[3px] px-[7px] text-white"
            >
              10
            </span>
          </a>
          <a
            className="text-[15px]  relative inline-block font-semibold text-[#000]"
            href="!#"
          >
            Groups
            <span
              style={{
                background: "linear-gradient(166deg, #F22876 0%, #942DD9 100%)",
              }}
              className=" text-[8px] absolute top-[-7px] right-[-18px] font-semibold rounded-[30px] py-[3px] px-[7px] text-white"
            >
              10
            </span>
          </a>
          <a
            className="text-[15px]  relative inline-block font-semibold text-[#000]"
            href="!#"
          >
            Media
            <span
              style={{
                background: "linear-gradient(166deg, #F22876 0%, #942DD9 100%)",
              }}
              className=" text-[8px] absolute top-[-7px] right-[-18px] font-semibold rounded-[30px] py-[3px] px-[7px] text-white"
            >
              10
            </span>
          </a>
        </div>
        <div className="grid grid-cols-3 gap-x-8">
          <div>
            <AdminAnalyticsContext />
          </div>
          <div>x</div>
        </div>
      </div>
    </section>
  );
};

export default AdminAnalytics;
