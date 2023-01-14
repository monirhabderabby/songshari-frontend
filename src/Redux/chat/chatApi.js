
import getCookie from "../../Helper/cookies/getCookie";
import apiSlice from "../api/apiSlice";

export const chatApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createMessage: builder.mutation({
            query(body){
                console.log(body)
                return{
                    url: `/inbox/create-message`,
                method: "POST",
                // headers: {
                //     authorization: `Bearer ${getCookie("token")}`,
                // },
                body:body
                }
            }
        }),
        getAllMessage: builder.query({
            query: (id) => ({
                url: `/inbox/messages/${id}`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
            keepUnusedDataFor: 0,
        }),
        createConversation: builder.mutation({
            query: data => ({
                url: "/inbox/create-conversation",
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
    }),
});

export const { useCreateMessageMutation, useGetAllMessageMutation } = chatApi;
