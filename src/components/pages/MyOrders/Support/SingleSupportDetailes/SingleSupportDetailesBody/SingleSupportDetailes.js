import React from "react";
import { SingleSupportDetailesFooter } from "../Footer/SingleSupportDetailesFooter";
import { SingleSupportDetailesBody } from "./SingleSupportDetailesBody";
import { SingleSupportDetailesHeader } from "./SingleSupportDetailesHeader";

export const SingleSupportDetailes = () => {
    return (
        <div>
            <SingleSupportDetailesHeader />
            <SingleSupportDetailesBody />
            <SingleSupportDetailesFooter />
        </div>
    );
};
