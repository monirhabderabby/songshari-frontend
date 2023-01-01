import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const FilterResults = () => {
    // hook variable declareation
    const filterObject = useSelector(state => state?.persistedReducer?.filter?.filterObject);

    useEffect(() => {}, []);
    console.log(filterObject);
    return (
        <div>
            <p>Something done</p>
        </div>
    );
};
