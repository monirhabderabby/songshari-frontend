import React from "react";
import { useParams } from "react-router";

export const DynamicServicesContainer = () => {
    const { id } = useParams();
    return <div>{id}</div>;
};
