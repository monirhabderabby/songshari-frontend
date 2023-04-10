import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const ticketApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createTicket: builder.mutation({
            query: data => ({
                url: "/ticket/createTicket",
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
            invalidatesTags: ["myTickets"],
        }),
        getMyTickets: builder.query({
            query: ({ status, page, limit }) => ({
                url: `/ticket/getAllTickets?status=${status}&page=${page}&limit=${limit}`,
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
            providesTags: ["myTickets"],
            keepUnusedDataFor: 0,
        }),
        getTicketByID: builder.query({
            query: id => ({
                url: `/ticket/getTicket/${id}`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
        reOpenTicket: builder.mutation({
            query: ({ id, data }) => ({
                url: `/ticket/reopenTicket/${id}`,
                method: "PUT",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
    }),
});

export const { useCreateTicketMutation, useGetMyTicketsQuery, useGetTicketByIDQuery, useReOpenTicketMutation } = ticketApi;
