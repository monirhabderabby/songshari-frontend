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
        }),
    }),
});

export const { useCreateTicketMutation, useGetMyTicketsQuery } = ticketApi;
