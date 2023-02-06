// Configuration
import React, { useEffect } from "react";

// Components
import { useGetAllOrderByProfessionQuery } from "../../../../../Redux/features/Service/OrderApi";
import { TBFaceError } from "../../../../ui/error/TBFaceError";
import PendingOrderCard from "../../../Cards/LawyerAgentKaziService/PendingOrderCard";
import { PendingSkeleton } from "../../../Cards/Loader/LawyerAgentServiceRelatedLoader/PendingSkeleton";

export const PendingOrder = ({ setPendingOrder }) => {
    const { data, isLoading, error } = useGetAllOrderByProfessionQuery("pending");
    const { orders } = data || {};
    console.log(data);

    useEffect(() => {
        if (orders?.length === 0) {
            setPendingOrder(false);
        }
    }, [setPendingOrder, orders]);
    const loaderArr = [1, 2, 3, 4, 5, 6];

    let content;
    if (isLoading) {
        content = (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-12">
                {loaderArr.map(item => {
                    return <PendingSkeleton key={item} />;
                })}
            </div>
        );
    } else if (!isLoading && error) {
        content = <TBFaceError />;
    } else if (!isLoading && orders.length > 0) {
        content = (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-12">
                {orders?.slice(0, 4).map(order => {
                    return <PendingOrderCard key={order._id} {...{ order }} />;
                })}
            </div>
        );
    }
    return (
        <div className="mb-12 md:mb-16 lg:mb-28">
            <h1 className="text-3xl font-medium leading-7 mb-10">Pending Order</h1>
            {content}
        </div>
    );
};
