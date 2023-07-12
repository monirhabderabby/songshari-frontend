// configuration
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// Components
import { useGetProfileDetailsQuery } from "../../../../Redux/features/userInfo/userApi";
import { BottomNav } from "../../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileBackButton } from "../../../shared/Components/MobileBackButton";
import MobileDynamicProfileHeader from "./MobileDynamicProfileHeader";

export const MobileDynamicProfile = () => {
  // hooks variable
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetProfileDetailsQuery(id);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isLoading) {
      <div className="border border-blue-300 px-7 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>;
    }
  }, [isLoading]);

  return (
    <div className="max-w-[523px] mx-auto">
      <MobileBackButton name={"Profile"} />
      <MobileDynamicProfileHeader {...{ data }} />
      <div>
        <Link to={`/dynamicConnectionsMov/${data?._id}`}>
          <div className="grid grid-cols-5 mt-5 mb-10">
            <div className="col-span-4">
              <h1 className="pl-8">Connections</h1>
            </div>
            <div>
              <i className="fa-solid fa-angle-right ml-10"></i>
            </div>
          </div>
        </Link>
        {data?.role === "member" && (
          <Link to={`/dynamicActivityMov/${data?._id}`}>
            <div className="grid grid-cols-5 mt-5 mb-10">
              <div className="col-span-4">
                <h1 className="pl-8">Activity</h1>
              </div>
              <div>
                <i className="fa-solid fa-angle-right ml-10"></i>
              </div>
            </div>
          </Link>
        )}
        <Link to={`/dynamicGalleryMov/${data?._id}`}>
          <div className="grid grid-cols-5 mt-5 mb-10">
            <div className="col-span-4">
              <h1 className="pl-8">Gallery</h1>
            </div>
            <div>
              <i className="fa-solid fa-angle-right ml-10"></i>
            </div>
          </div>
        </Link>
        {data?.role !== "member" && (
          <Link to={`/dynamicServicesMov/${data?._id}`}>
            <div className="grid grid-cols-5 mt-5 mb-10">
              <div className="col-span-4">
                <h1 className="pl-8">Services</h1>
              </div>
              <div>
                <i className="fa-solid fa-angle-right ml-10"></i>
              </div>
            </div>
          </Link>
        )}
        <div className="grid grid-cols-5 mt-5 mb-10">
          <div className="col-span-4">
            <p
              className="pl-8"
              onClick={() => navigate(`/personalProfileDynamic/${data?._id}`)}
            >
              Personal Details
            </p>
          </div>
          <div>
            <i className="fa-solid fa-angle-right ml-10"></i>
          </div>
        </div>

        <Link to={`/professionalProfileDynamic/${data?._id}`}>
          <div className="grid grid-cols-5 mt-5 mb-10">
            <div className="col-span-4">
              <h1 className="pl-8">Professional Details</h1>
            </div>
            <div>
              <i className="fa-solid fa-angle-right ml-10"></i>
            </div>
          </div>
        </Link>
        <Link to={`/educationalProfileDynamic/${data?._id}`}>
          <div className="grid grid-cols-5 mt-5 mb-10">
            <div className="col-span-4">
              <h1 className="pl-8">Educational Details</h1>
            </div>
            <div>
              <i className="fa-solid fa-angle-right ml-10"></i>
            </div>
          </div>
        </Link>
        <Link to={`/physicalProfileDynamic/${data?._id}`}>
          <div className="grid grid-cols-5 mt-5 mb-10">
            <div className="col-span-4">
              <h1 className="pl-8">Physical Details</h1>
            </div>
            <div>
              <i className="fa-solid fa-angle-right ml-10"></i>
            </div>
          </div>
        </Link>
        {data?.role === "member" && (
          <Link to={`/familyProfileDynamic/${data?._id}`}>
            <div className="grid grid-cols-5 mt-5 mb-10">
              <div className="col-span-4">
                <h1 className="pl-8">Family Details</h1>
              </div>
              <div>
                <i className="fa-solid fa-angle-right ml-10"></i>
              </div>
            </div>
          </Link>
        )}
        {data?.role === "member" && (
          <Link to={`/siblingsProfileDynamic/${data?._id}`}>
            <div className="grid grid-cols-5 mt-5 mb-10">
              <div className="col-span-4">
                <h1 className="pl-8">Siblings Details</h1>
              </div>
              <div>
                <i className="fa-solid fa-angle-right ml-10"></i>
              </div>
            </div>
          </Link>
        )}
        <Link to={`/otherProfileDynamic/${data?._id}`}>
          <div className="grid grid-cols-5 mt-5 mb-10">
            <div className="col-span-4">
              <h1 className="pl-8">Other Details</h1>
            </div>
            <div>
              <i className="fa-solid fa-angle-right ml-10"></i>
            </div>
          </div>
        </Link>
      </div>
      <div className="h-16"></div>
      <BottomNav />
    </div>
  );
};
