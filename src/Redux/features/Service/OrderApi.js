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
            query: ({ status, page, limit }) => ({
                url: `/service/order/all?status=${status}&page=${page}&limit=${limit}`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
            providesTags: ["allOrders"],
            keepUnusedDataFor: 0,
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
        rejectOrder: builder.mutation({
            query: id => ({
                url: `/service/order/reject/${id}`,
                method: "PUT",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
            invalidatesTags: ["allOrders"],
        }),
        getAllOrderByMember: builder.query({
            query: ({ status, page, limit }) => ({
                url: `/service/order/all-by-user?status=${status}&page=${page}&limit=${limit}`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
    }),
});

export const {
    useServiceOrderMutation,
    useGetAllOrderByProfessionQuery,
    useAcceptOrderMutation,
    useRejectOrderMutation,
    useGetAllOrderByMemberQuery,
} = orderApi;
