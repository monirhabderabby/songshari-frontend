import React from "react";
import { RefWithdrawHeader } from "./Header/RefWithdrawHeader";
import { RefWithHistoryContainer } from "./History/RefWithdrawHistoryContainer";

export const WithDrawContainer = () => {
    return (
        <div>
            <RefWithdrawHeader />
            <RefWithHistoryContainer />
        </div>
    );
};
