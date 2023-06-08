// Configuration
import React, { useEffect } from "react";

// Components
import { useMyOrderQuery } from "../../../../Redux/features/Shop/shopApi";
import { LineWaveLoader } from "../../../shared/Cards/Loader/lineWaveLoader/LineWaveLoader";
import { ServerErrorMessage } from "../../../ui/error/ServerErrorMessage";
import { OrderStatusFooter } from "./OrderStatusFooter";
import { OrderStatusHeader } from "./OrderStatusHeader";
import { OrderStatusTable } from "./OrderStatusTable";

export const AllOrders = ({ setTotalOrders }) => {
    const { isLoading, data, isError } = useMyOrderQuery({
        page: "",
        limit: "",
        status: "",
    });

    const { orders, count } = data || {};

    useEffect(() => {
        if (count > 0) setTotalOrders(count);
    }, [count, setTotalOrders]);

    let content;
    if (isLoading) {
        content = (
            <div>
                <LineWaveLoader />
            </div>
        );
    } else if (!isLoading && isError) {
        content = (
            <div>
                <ServerErrorMessage />
            </div>
        );
    } else if (!isLoading && count === 0) {
        content = (
            <div className="w-full flex justify-center h-[250px] items-center text-[18px] text-gray-400 font-Nunito">You have no order to show</div>
        );
    } else if (!isLoading && orders?.length > 0) {
        content = (
            <div className="flex flex-col gap-y-[10px] lg:gap-y-[20px] h-auto">
                {orders?.map(item => {
                    return (
                        <div
                            key={item._id}
                            className="h-auto py-[22px] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] rounded-[6px] px-[16px]"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000"
                            data-aos="fade-up"
                        >
                            {/* header part */}
                            <OrderStatusHeader order={item} />

                            {/* table part */}
                            <OrderStatusTable order={item} />

                            <OrderStatusFooter order={item} />
                        </div>
                    );
                })}
            </div>
        );
    }
    return content;
};
