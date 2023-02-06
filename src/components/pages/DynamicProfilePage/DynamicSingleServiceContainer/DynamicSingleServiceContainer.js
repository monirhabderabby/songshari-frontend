import React from "react";
import CustomHeader from "../../../shared/CustomHeader/CustomHeader";
import DynamicSingleServiceDetailes from "./DynamicSingleServiceDetailes";

export const DynamicSingleServiceContainer = () => {
    return (
        <div>
            <CustomHeader title="Service" />
            <DynamicSingleServiceDetailes />
        </div>
    );
};
