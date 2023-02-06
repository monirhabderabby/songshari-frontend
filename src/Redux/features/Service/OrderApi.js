import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        serviceOrder: builder.mutation({
            query: data => ({
                url: `/service/order/create`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
        getAllOrderByProfession: builder.query({
            query: status => ({
                url: `/service/order/all?status=${status}`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
    }),
});

export const { useServiceOrderMutation, useGetAllOrderByProfessionQuery } = orderApi;
