// Configuration
import React, { useEffect } from "react";

// Components
import { useGetAllOrderByProfessionQuery } from "../../../../../Redux/features/Service/OrderApi";
import { TBFaceError } from "../../../../ui/error/TBFaceError";
import { CompletedOrderCard } from "../../../Cards/LawyerAgentKaziService/CompletedOrderCard";
import { CompletedSkeleton } from "../../../Cards/Loader/LawyerAgentServiceRelatedLoader/CompletedSkeleton";

export const CompletedOrder = ({ setCompletedOrder }) => {
    const { data, isLoading, error, isFetching } = useGetAllOrderByProfessionQuery({
        status: "completed",
        page: 1,
        limit: 6,
    });
    const { orders } = data || {};

    useEffect(() => {
        if (orders?.length === 0) {
            setCompletedOrder(false);
        }
    }, [setCompletedOrder, orders]);
    const loaderArr = [1, 2, 3, 4, 5, 6];

    let content;
    if (isLoading || isFetching) {
        content = (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-12">
                {loaderArr.map(item => {
                    return <CompletedSkeleton key={item} />;
                })}
            </div>
        );
    } else if (!isLoading && error) {
        content = <TBFaceError />;
    } else if (!isLoading && orders?.length > 0) {
        content = (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-12">
                {orders?.map(order => {
                    return <CompletedOrderCard key={order._id} {...{ order }} />;
                })}
            </div>
        );
    }
    return (
        <div className="mb-12 md:mb-16 lg:mb-28">
            <h1 className="text-3xl font-medium leading-7 mb-10 hidden lg:block">Completed Order</h1>
            {content}
        </div>
    );
};
