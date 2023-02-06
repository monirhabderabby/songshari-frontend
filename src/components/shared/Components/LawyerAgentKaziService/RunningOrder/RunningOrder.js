// configuration
import React, { useEffect } from "react";

// Components
import { useGetAllOrderByProfessionQuery } from "../../../../../Redux/features/Service/OrderApi";
import { TBFaceError } from "../../../../ui/error/TBFaceError";
import RunningOrderCard from "../../../Cards/LawyerAgentKaziService/RunningOrderCard";
import { RunningCardSkeletonLoader } from "../../../Cards/Loader/LawyerAgentServiceRelatedLoader/RunningCardSkeletonLoader";

const RunningOrder = ({ setRunningOrder }) => {
    const { data, isLoading, error } = useGetAllOrderByProfessionQuery("accepted");
    const { orders } = data || {};

    useEffect(() => {
        if (orders?.length === 0) {
            setRunningOrder(false);
        }
    }, [setRunningOrder, orders]);

    const loaderArr = [1, 2, 3, 4, 5, 6];
    console.log(data);

    let content;
    if (isLoading) {
        content = (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12">
                {loaderArr.map(item => {
                    return <RunningCardSkeletonLoader key={item} />;
                })}
            </div>
        );
    } else if (!isLoading && error) {
        content = <TBFaceError />;
    } else if (!isLoading && orders?.length > 0) {
        content = (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-12">
                {orders?.slice(0, 4).map((order, index) => {
                    return <RunningOrderCard key={order._id} {...{ order, index }} />;
                })}
            </div>
        );
    }

    return (
        <div className="mb-12 md:mb-16 lg:mb-28">
            <h1 className="text-3xl font-medium leading-7 mb-10">Running Case</h1>
            {content}
        </div>
    );
};

export default RunningOrder;
