// Configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { Pagination } from "@mui/material";

// Components
import { useDispatch } from "react-redux";
import { useGetAllOrderByProfessionQuery } from "../../../../../Redux/features/Service/OrderApi";
import { setTotalPendingOrderData } from "../../../../../Redux/features/Service/orderSlice";
import { TBFaceError } from "../../../../ui/error/TBFaceError";
import PendingOrderCard from "../../../Cards/LawyerAgentKaziService/PendingOrderCard";
import { PendingSkeleton } from "../../../Cards/Loader/LawyerAgentServiceRelatedLoader/PendingSkeleton";

const ActivityPendingOrder = ({ setPendingOrder }) => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const { data, isLoading, error, isFetching } = useGetAllOrderByProfessionQuery({
        status: "pending",
        page: page,
        limit: 6,
    });
    const { orders, total } = data || {};
    let totalPage = Math.ceil(total / 6);

    useEffect(() => {
        dispatch(setTotalPendingOrderData(total));
    }, [total, dispatch]);

    useEffect(() => {
        if (orders?.length === 0) {
            setPendingOrder(false);
        }
    }, [setPendingOrder, orders]);
    const loaderArr = [1, 2, 3, 4, 5, 6];

    let content;
    if (isLoading || isFetching) {
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
                {orders?.map(order => {
                    return <PendingOrderCard key={order._id} {...{ order }} />;
                })}
            </div>
        );
    }

    return (
        <div className="mb-12">
            <h1 className="text-3xl font-medium leading-7 mb-10">Pending Order</h1>
            {content}
            <div className="my-[30px] w-full flex justify-end">
                <Pagination count={totalPage} variant="outlined" color="secondary" onChange={(event, value) => setPage(value)} />
            </div>
        </div>
    );
};

export default ActivityPendingOrder;
