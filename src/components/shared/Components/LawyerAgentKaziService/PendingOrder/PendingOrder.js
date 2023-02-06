import React from "react";
import PendingOrderCard from "../../../Cards/LawyerAgentKaziService/PendingOrderCard";

export const PendingOrder = () => {
    const pendingOrdersInfo = [
        {
            id: 1,
            name: "Mr. Strange",
            serviceName: "A Example lawyer service for the married person",
            date: " Sep 8th, 2023",
        },
        {
            id: 2,
            name: "Mr. Strange",
            serviceName: "A Example lawyer service for the married person",
            date: " Sep 8th, 2023",
        },
        {
            id: 3,
            name: "Mr. Strange",
            serviceName: "A Example lawyer service for the married person",
            date: " Sep 8th, 2023",
        },
    ];
    return (
        <div className="mb-12 md:mb-16 lg:mb-28">
            <h1 className="text-3xl font-medium leading-7 mb-10">Pending Order</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-12">
                {pendingOrdersInfo.map(order => (
                    <PendingOrderCard key={order.id} {...{ order }} />
                ))}
            </div>
        </div>
    );
};
