// normal import
import React from "react";

// configuration

// material ui
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";

// components 
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";

// css import;
import "./TopMenu.css";
import { useDispatch } from "react-redux";
import { loadUserData } from "../../../Redux/features/userInfo/userInfo";


export const TopMenu = () => {
    // hooks variables
    const [user] = useAuthState(auth);
    
    const [signOut] = useSignOut(auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutButton = async () => {
        dispatch(loadUserData(null));
        await signOut();
        navigate("/");
        localStorage.removeItem("accessToken");
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    // function
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <div className="grid grid-cols-5  bg-top rounded  pt-2 pb-2">
                {
                    user && 
                    <img src={user.photoURL} className='rounded-full w-8 ml-4' alt="Not Available"></img>
                
            
                
                }       

                {
                    !user &&  <div className="ml-4 mov-top w-8 rounded-full mt-1 col-span-1">
                    <img src="https://i.ibb.co/pZFRdCB/512-512-Icon-1.png" alt="Not Available"></img>
                    </div>
                }

                <div className="col-span-3">
                    {
                        user ? <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        className="font-bold text-black"
                    >
                        <span className="text-black font-bold">
                            {" "}
                            {user.displayName} <i className="fa-solid fa-angle-down"></i>
                        </span>
                    </Button>
                    :
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
                            Shongshari.com <i className="fa-solid fa-angle-down"></i>
                        </span>
                    </Button>
                       
                       
                    }
                    
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
                            {
                                user ? <div>
                                    <Link to="/login">
                                    <button  onClick={logoutButton} className="bg-login-mov-home rounded-full text-white px-3">LogOut</button>
                                </Link>
                              
                                </div>
                                 :
                                 <div className="login-signup">
                                  <Link to="/login">
                                      <button className="bg-login-mov-home rounded-full text-white px-3">Log In</button>
                                  </Link>
                                  <p className="mx-2">Or</p>
                                  <Link to="/signup">
                                      <button className="bg-login-mov-home rounded-full text-white px-3">Sign Up</button>
                                  </Link>
                              </div>
                            }
                           
                        </MenuItem>
                    </Menu>
                </div>
                <div className="col-span-1 mt-2">
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
