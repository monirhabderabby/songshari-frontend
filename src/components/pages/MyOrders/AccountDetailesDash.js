// Configuration
import React, { useState } from "react";

// Third party packages
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AttractionsIcon from "@mui/icons-material/Attractions";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SchoolIcon from "@mui/icons-material/School";
import SupportIcon from "@mui/icons-material/Support";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import HideSourceIcon from '@mui/icons-material/HideSource';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { GiLovers } from "react-icons/gi";

// components
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { MobileBackButton } from "../../shared/Components/MobileBackButton";
import { CustomHeader } from "../../shared/CustomHeader/CustomHeader";

export const AccountDetailesDash = () => {
  const [name, setName] = useState("Account");
  const isMobile = useMediaQuery("(max-width:600px)");

  const nameHandler = (data) => {
    switch (data) {
      case "My Account":
        // code block
        setName("Account");
        break;
      case "My Orders":
        setName("Orders");
        // code block
        break;
      case "My Wishlist":
        setName("Wishlist");
        // code block
        break;
      case "My Courses":
        setName("Courses");
        // code block
        break;
      default:
      // code block
    }
  };
  return (
    <MuiThemeProvider>
      <section>
        <div className="hidden lg:block">
          <CustomHeader title={name} />
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
                {[
                  "My Account",
                  "My Orders",
                  "My Wishlist",
                  "My Courses",
                  "My Wallet",
                  "Refferral",
                  "Support",
                  "Success Story",
                  "Deactivate Account",
                  "Ignore List"
                ].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <NavLink
                      to={
                        text.includes("My Account")
                          ? "account"
                          : text.includes("My Orders")
                          ? "orderStatus"
                          : text.includes("My Wishlist")
                          ? "wishlist"
                          : text.includes("My Courses")
                          ? "my-courses"
                          : text.includes("My Wallet")
                          ? "myWallet"
                          : text.includes("Refferral")
                          ? "reffereal"
                          : text.includes("Support")
                          ? "support"
                          : text.includes("Success Story")
                          ? "successStory"
                          : text.includes("Deactivate Account")
                          ? "deactivate-account"
                          : "ignore-list"
                      }
                      className={({ isActive }) =>
                        isActive
                          ? "bg-[#F1F5F9] w-[55px] lg:w-[200px]"
                          : "bg-white w-[55px] lg:w-[200px]"
                      }
                      onClick={() => nameHandler(text)}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          {(text.includes("My Account") && (
                            <AccountBoxIcon />
                          )) ||
                            (text?.includes("My Orders") && (
                              <LocalShippingIcon />
                            )) ||
                            (text.includes("My Wishlist") && (
                              <FavoriteBorderIcon />
                            )) ||
                            (text.includes("My Courses") && <SchoolIcon />) ||
                            (text.includes("My Wallet") && (
                              <WalletOutlinedIcon />
                            )) ||
                            (text.includes("Refferral") && (
                              <AttractionsIcon />
                            )) ||
                            (text.includes("Support") && <SupportIcon />) ||
                            (text.includes("Success Story") && (
                              <GiLovers className="text-xl" />
                            )) ||
                            (text.includes("Deactivate Account") && <NoAccountsIcon />)||
                            (text.includes("Ignore List") && <HideSourceIcon />)}
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          style={{ display: isMobile ? "none" : "flex" }}
                        />
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
