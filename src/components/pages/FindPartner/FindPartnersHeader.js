import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setFindPartnerSearchTerm } from "../../../Redux/features/filter/findPartnerSlice";

const FindPartnersHeader = () => {
  // hook variable declaration
  const [text, setText] = useState(
    useSelector(
      (state) => state?.persistedReducer?.findPartnerSlice?.searchTerm
    ) || ""
  );
  const input = useRef(null);
  //   const [searchTermState, setSearchTermState] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    let typingTimer;
    input.current.addEventListener("keyup", function () {
      typingTimer && clearTimeout(typingTimer);

      if (input.current.value) {
        typingTimer = setTimeout(function () {
          dispatch(setFindPartnerSearchTerm(input.current.value));
        }, 300); //user is "finished typing," send search request
      } else {
        dispatch(setFindPartnerSearchTerm(""));
      }
    });

    //on keydown, clear the countdown
    input.current.addEventListener("keydown", function () {
      typingTimer && clearTimeout(typingTimer);
    });
  });
  // function declaration
  //   const handleSearchTerm = () => {
  //     dispatch(setFindPartnerSearchTerm(searchTermState));
  //   };

  return (
    <div className="flex lg:flex-row flex-col justify-between items-center">
      {/* <!-- search --> */}
      <div>
        <div
          style={{
            border: "2px solid #FFE8F3",
          }}
          className="relative flex items-center w-[386px] h-[52px] shadow-sm rounded-lg focus-within:shadow-lg bg-white overflow-hidden"
        >
          <div
            className="grid place-items-center h-full w-12 text-gray-300"
            // onClick={handleSearchTerm}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search user name.."
            ref={input}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <div className="find-partner-button mt-[10px] lg:mt-0 flex-wrap flex justify-between items-center">
        {" "}
        <NavLink
          style={{ boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)" }}
          to="/find-partner/suggested"
          className={({ isActive }) =>
            `w-[242px] font-semibold flex justify-center ${
              isActive
                ? "special_profile_button"
                : "special_profile_button_inactive"
            } items-center h-[50px] mr-2`
          }
        >
          Suggested For You
        </NavLink>
        <NavLink
          style={{ boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)" }}
          className={({ isActive }) =>
            `w-[105px] font-semibold flex justify-center ${
              isActive
                ? "special_profile_button"
                : "special_profile_button_inactive"
            } items-center h-[50px] mx-2`
          }
          to="top"
        >
          Top
        </NavLink>
        <NavLink
          style={{ boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)" }}
          className={({ isActive }) =>
            `w-[105px] font-semibold flex justify-center ${
              isActive
                ? "special_profile_button"
                : "special_profile_button_inactive"
            } items-center h-[50px] ml-2`
          }
          to="nearest"
        >
          Nearest
        </NavLink>
      </div>
    </div>
  );
};

export default FindPartnersHeader;
