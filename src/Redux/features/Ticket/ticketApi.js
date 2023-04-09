import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const ticketApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createTicket: builder.mutation({
            query: () => ({
                url: "/ticket/createTicket",
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
    }),
});

export const { useCreateTicketMutation } = ticketApi;
