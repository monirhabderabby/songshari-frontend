// Configuration
import React from "react";

// Third party packages
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// components
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { MobileBackButton } from "../../shared/Components/MobileBackButton";
import { CustomHeader } from "../../shared/CustomHeader/CustomHeader";

export const MyOrders = () => {
    const isMobile = useMediaQuery("(max-width:600px)");
    return (
        <MuiThemeProvider>
            <section>
                <div className="hidden lg:block">
                    <CustomHeader title="My Orders" />
                </div>
                <div className="lg:hidden">
                    <MobileBackButton name="My Account" />
                </div>
                <div
                    className="lg:w-[1200px] flex gap-x-[10px] lg:gap-x-[20px] mx-auto px-[6px] lg:px-[20px]"
                    style={{ display: "flex", flexDirection: "row" }}
                >
                    <div className="w-[45px] lg:w-[204px] h-[100vh-30vh] py-[20px] relative">
                        <div className="sticky top-0">
                            <List>
                                {["My Account", "My Orders", "My Wishlist"].map((text, index) => (
                                    <ListItem key={text} disablePadding>
                                        <NavLink
                                            to={text.includes("My Account") ? "account" : text.includes("My Orders") ? "orderStatus" : "wishlist"}
                                            className={({ isActive }) =>
                                                isActive ? "bg-[#F1F5F9] w-[55px] lg:w-[200px]" : "bg-white w-[55px] lg:w-[200px]"
                                            }
                                        >
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    {(text.includes("My Account") && <AccountBoxIcon />) ||
                                                        (text?.includes("My Orders") && <LocalShippingIcon />) ||
                                                        (text.includes("My Wishlist") && <FavoriteBorderIcon />)}
                                                </ListItemIcon>
                                                <ListItemText primary={text} style={{ display: isMobile ? "none" : "flex" }} />
                                            </ListItemButton>
                                        </NavLink>
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                    </div>
                    <div className="flex-1 border-l-[1px] border-[#eeeeee] p-[10px] lg:p-[20px] h-auto relative w-[calc(100%-70px)]">
                        <Outlet />
                    </div>
                </div>
            </section>
        </MuiThemeProvider>
    );
};
