// normal import
import React from "react";

// configuration

// material ui
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";

// components

// css import;
import { useDispatch, useSelector } from "react-redux";
import removeCookie from "../../../Helper/cookies/removeCookie";
import isLoggedIn from "../../../Helper/hooks/checkLoggerPersestency/isLoggedIn";
import { loadUserData } from "../../../Redux/features/userInfo/userInfo";
import "./TopMenu.css";

export const TopMenu = () => {
  // hooks variables
  const user = isLoggedIn();
  const userInfo = useSelector(
    (state) => state?.persistedReducer?.userInfo?.userInfo?.user
  );
  let { profilePhoto } = userInfo || {};
  profilePhoto = profilePhoto
    ? profilePhoto
    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  let name;
  if (userInfo?.firstName) {
    name = userInfo?.firstName || "Empty";
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutButton = async () => {
    removeCookie("token");
    dispatch(loadUserData(null));
    navigate("/");
    localStorage.removeItem("accessToken");
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // function
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className="flex justify-between items-center bg-top rounded px-5 md:px-10 py-1 md:py-2">
        <div className="flex items-center">
          <div className="">
            {user ? (
              <div className="flex items-center md:gap-2">
                <img
                  src={profilePhoto}
                  className="rounded-full w-10 md:w-12"
                  alt="Not Available"
                ></img>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="font-bold text-black"
                >
                  <span className="text-black font-bold">
                    {" "}
                    {name} <i className="fa-solid fa-angle-down"></i>
                  </span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center">
                <div className="w-10 rounded-full ">
                  <img
                    src="https://i.ibb.co/pZFRdCB/512-512-Icon-1.png"
                    alt="Not Available"
                  ></img>
                </div>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="font-bold text-black"
                >
                  <p className="text-black font-semibold mt-1">
                    Shongshari.com <i className="fa-solid fa-angle-down"></i>
                  </p>
                </Button>
              </div>
            )}

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                {user ? (
                  <div>
                    <button
                      onClick={logoutButton}
                      className="bg-login-mov-home rounded-full text-white px-3"
                    >
                      LogOut
                    </button>
                  </div>
                ) : (
                  <div className="login-signup">
                    <Link to="/mobile-login">
                      <button className="bg-login-mov-home rounded-full text-white px-3">
                        Log In
                      </button>
                    </Link>
                    <p className="mx-2">Or</p>
                    <Link to="/mobile-signup">
                      <button className="bg-login-mov-home rounded-full text-white px-3">
                        Sign Up
                      </button>
                    </Link>
                  </div>
                )}
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="mt-2 md:text-xl">
          <i className="fa-regular fa-bell mr-4"></i>
          <Link to="/setting">
            {" "}
            <i className="fa-solid fa-bars"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
