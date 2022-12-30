import React from "react";
import { useState } from "react";
import UserAgentServices from "./UserAgentServices";
import UserAllServices from "./UserAllServices";
import UserCanceledServices from "./UserCanceledServices";
import UserCompletedServices from "./UserCompletedServices";
import UserKaziServices from "./UserKaziServices";
import UserLawyerServices from "./UserLawyerServices";
import UserOngoingServices from "./UserOngoingServices";

const ProfileServices = () => {
  const [page, setPage] = useState(1);

  return (
    <div>
      {/*----- Component direction setter -----*/}
      <section className="mt-8 mb-14 max-w-[512px] mx-auto hidden md:hidden lg:block">
        <div className="grid grid-cols-4 gap-1">
          <button
            className="text-[14px] text-white leading-[18px] font-semibold px-[6px] py-3 rounded-xl"
            style={{
              backgroundImage:
                "linear-gradient(99.76deg, #E41272 18.47%, #942DD9 84.24%)",
            }}
            onClick={() => setPage(1)}
          >
            Service List
          </button>
          <button
            className="text-[14px] text-white leading-[18px] font-semibold px-[6px] py-3 rounded-xl bg-[#67868F] whitespace-nowrap"
            onClick={() => setPage(2)}
          >
            Ongoing Services
          </button>
          <button
            className="text-[14px] text-white leading-[18px] font-semibold px-[6px] py-3 rounded-xl bg-[#67868F] whitespace-nowrap"
            onClick={() => setPage(3)}
          >
            Completed Services
          </button>
          <button
            className="text-[14px] text-white leading-[18px] font-semibold px-[6px] py-3 rounded-xl bg-[#67868F] whitespace-nowrap"
            onClick={() => setPage(4)}
          >
            Cancelled Services
          </button>
          <button
            className="text-[14px] text-white leading-[18px] font-semibold px-[6px] py-3 rounded-xl"
            style={{
              backgroundImage:
                "linear-gradient(99.76deg, #E41272 18.47%, #942DD9 84.24%)",
            }}
            onClick={() => setPage(5)}
          >
            Agent Service
          </button>
          <button
            className="text-[14px] text-white leading-[18px] font-semibold px-[6px] py-3 rounded-xl bg-[#67868F] "
            onClick={() => setPage(6)}
          >
            Lawyer Service
          </button>
          <button
            className="text-[14px] text-white leading-[18px] font-semibold px-[6px] py-3 rounded-xl bg-[#67868F] "
            onClick={() => setPage(7)}
          >
            Kazi Service
          </button>
        </div>
      </section>

      {/* mobile version  */}
      <section className="mt-8 mb-14 lg:hidden md:hidden ml-4 mr-4">
        <div className="grid grid-cols-3 gap-2">
          <button
            className="text-[14px] text-white leading-[18px] font-semibold px-[6px] py-3 rounded-xl"
            style={{
              backgroundImage:
                "linear-gradient(99.76deg, #E41272 18.47%, #942DD9 84.24%)",
            }}
            onClick={() => setPage(1)}
          >
            Service List
          </button>
          <button
            className="text-[14px] text-white leading-[18px] font-semibold px-[6px] py-3 rounded-xl bg-[#67868F] whitespace-nowrap"
            onClick={() => setPage(2)}
          >
            Ongoing
          </button>
          <button
            className="text-[14px] text-white leading-[18px] font-semibold px-[6px] py-3 rounded-xl bg-[#67868F] whitespace-nowrap"
            onClick={() => setPage(3)}
          >
            Completed
          </button>
          <button
            className="text-[14px] text-white leading-[18px] font-semibold px-[6px] py-3 rounded-xl bg-[#67868F] whitespace-nowrap"
            onClick={() => setPage(4)}
          >
            Cancelled
          </button>
          <button
            className="text-[14px] text-white leading-[18px] font-semibold px-[6px] py-3 rounded-xl"
            style={{
              backgroundImage:
                "linear-gradient(99.76deg, #E41272 18.47%, #942DD9 84.24%)",
            }}
            onClick={() => setPage(5)}
          >
            Agent Service
          </button>
          <button
            className="text-[14px] text-white leading-[18px] font-semibold px-[6px] py-3 rounded-xl bg-[#67868F] "
            onClick={() => setPage(6)}
          >
            Lawyer Service
          </button>
          <button
            className="text-[14px] text-white leading-[18px] font-semibold px-[6px] py-3 rounded-xl bg-[#67868F] "
            onClick={() => setPage(7)}
          >
            Kazi Service
          </button>
        </div>
      </section>
      {/* ----- Load Pages ----- */}
      {page === 1 && <UserAllServices />}
      {page === 2 && <UserOngoingServices />}
      {page === 3 && <UserCompletedServices />}
      {page === 4 && <UserCanceledServices />}
      {page === 5 && <UserAgentServices />}
      {page === 6 && <UserLawyerServices />}
      {page === 7 && <UserKaziServices />}
    </div>
  );
};

export default ProfileServices;
