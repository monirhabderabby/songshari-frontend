import React from "react";
import CustomHeader from "../../../components/shared/CustomHeader/CustomHeader";
import { WishlistTable } from "./WishlistTable";

export const DesktopWishlistContainer = () => {
    return (
        <div>
            <div className="hidden md:block">
                <CustomHeader title="Wishlist" />
            </div>
            <div className="px-3">
                <WishlistTable />
            </div>
        </div>
    );
};
