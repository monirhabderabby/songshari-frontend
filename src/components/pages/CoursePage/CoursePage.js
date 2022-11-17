import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import CourseBox from "./CourseBox";
const CoursePage = () => {
  return (
    <>
      <section className="py-10">
        <div className="max-w-[1300px] mx-auto font-george">
          <div className="grid grid-cols-1 lg:grid-cols-3  xl:grid-cols-4 gap-4 justify-center ">
            <div>
              <CourseBox />
            </div>
            <div className="lg:col-span-2 xl:col-span-3">
              <div className="top-profile-button flex-wrap flex justify-center items-center">
                <NavLink to="/find-partner" style={{ width: "250px" }}>
                  <p className="text-[1.2rem] text-center">Suggested For You</p>
                </NavLink>

                <NavLink style={{ width: "250px" }} to="top">
                  <p className="text-[1.2rem] text-center">Top</p>
                </NavLink>
                <NavLink style={{ width: "250px" }} to="nearest">
                  <p className="text-[1.2rem] text-center">Nearest</p>
                </NavLink>
              </div>
              <div>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursePage;
