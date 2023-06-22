import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { BottomNav } from "../BottomNav";
import { AccountSettingMov } from "./AccountSettingMov";

export const Setting = () => {
    return (
        <motion.div
            layout
            initial={{
                x: 100,
                opacity: 0,
            }}
            animate={{
                x: 0,
                opacity: 1,
            }}
            exit={{ x: 100, opacity: 0 }}
            transition={{
                opacity: { duration: 0.2 },
                x: { duration: 0.5 },
            }}
            className="max-w-[1024px] mx-auto"
        >
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
        </motion.div>
    );
};
