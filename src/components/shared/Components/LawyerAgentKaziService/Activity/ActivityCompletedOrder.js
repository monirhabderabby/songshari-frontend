// configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { Pagination } from "@mui/material";
import { useDispatch } from "react-redux";

// Components
import { useGetAllOrderByProfessionQuery } from "../../../../../Redux/features/Service/OrderApi";
import { setTotalCompletedOrderData } from "../../../../../Redux/features/Service/orderSlice";
import { TBFaceError } from "../../../../ui/error/TBFaceError";
import { CompletedOrderCard } from "../../../Cards/LawyerAgentKaziService/CompletedOrderCard";
import { CompletedSkeleton } from "../../../Cards/Loader/LawyerAgentServiceRelatedLoader/CompletedSkeleton";

const ActivityCompletedOrder = ({ setCompletedOrder }) => {
    // Hook variable declaration
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const { data, isLoading, error, isFetching } = useGetAllOrderByProfessionQuery({
        status: "completed",
        page: page,
        limit: 6,
    });

    // js variables
    const { orders, total } = data || {};
    let totalPage = Math.ceil(total / 6);

    useEffect(() => {
        dispatch(setTotalCompletedOrderData(total));
    }, [total, dispatch]);

    useEffect(() => {
        if (orders?.length === 0) {
            setCompletedOrder(false);
        }
    }, [setCompletedOrder, orders]);

    const loaderArr = [1, 2, 3];

    let content;
    if (isLoading || isFetching) {
        content = (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12">
                {loaderArr.map(item => {
                    return <CompletedSkeleton key={item} activity={true} />;
                })}
            </div>
        );
    } else if (!isLoading && error) {
        content = <TBFaceError />;
    } else if (!isLoading && orders?.length > 0) {
        content = (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-12">
                {orders?.map((order, index) => {
                    return <CompletedOrderCard key={order._id} {...{ order }} activity={true} />;
                })}
            </div>
        );
    }

    return (
        <div className="mb-12 md:mb-16 lg:mb-28">
            <h1 className="text-3xl font-medium leading-7 mb-10 hidden lg:block">Completed Orders</h1>
            {content}
            <div className="my-[30px] w-full flex justify-end">
                <Pagination count={totalPage} variant="outlined" color="secondary" onChange={(event, value) => setPage(value)} />
            </div>
        </div>
    );
};

export default ActivityCompletedOrder;
