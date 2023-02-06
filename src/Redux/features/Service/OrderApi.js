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
            providesTags: ["allOrders"],
        }),
        acceptOrder: builder.mutation({
            query: id => ({
                url: `/service/order/accept/${id}`,
                method: "PUT",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
            invalidatesTags: ["allOrders"],
        }),
    }),
});

export const { useServiceOrderMutation, useGetAllOrderByProfessionQuery, useAcceptOrderMutation } = orderApi;
