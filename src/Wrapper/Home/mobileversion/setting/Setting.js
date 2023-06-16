import React from "react";
import { Link } from "react-router-dom";
import { BottomNav } from "../BottomNav";
import { AccountSettingMov } from "./AccountSettingMov";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


export const Setting = () => {
    return (
        <div className="max-w-[1024px] mx-auto">
            <Link to="/">
                <div className="grid grid-cols-6 mt-5">
                    <div className="setting-mov col-span-1">
                        <ArrowBackIosIcon />
                    </div>
                    <div className="col-span-4">
                        <h1 className="text-center profile-tit">Setting</h1>
                    </div>
                    <div className="col-span-1"></div>
                </div>
            </Link>

            {/* menus  */}
            <AccountSettingMov></AccountSettingMov>
            <div className="h-24"></div>

            {/* bottom navigation  */}
            <BottomNav></BottomNav>
        </div>
    );
};
