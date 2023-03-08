// configuration
import React from "react";
import { MobileBackButton } from "../../../components/shared/Components/MobileBackButton";

// components
import CustomHeader from "../../../components/shared/CustomHeader/CustomHeader";
import { WishlistTable } from "./WishlistTable";

export const DesktopWishlistContainer = () => {
    return (
        <div>
            {/* Desktop header */}
            <div className="hidden md:block">
                <CustomHeader title="Wishlist" />
            </div>
            {/* mobile header */}
            <div className="block md:hidden">
                <MobileBackButton name="Wishlist" />
            </div>

            {/* wishlist table */}
            <div className="px-3">
                <WishlistTable />
            </div>
        </div>
    );
};
