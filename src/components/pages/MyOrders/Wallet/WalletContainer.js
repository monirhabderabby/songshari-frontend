import React from "react";
import { WalletHeader } from "./WalletHeader";
import { WalletHistory } from "./WalletHistory/WalletHistory";

export const WalletContainer = () => {
    return (
        <>
            <WalletHeader />
            <WalletHistory />
        </>
    );
};
