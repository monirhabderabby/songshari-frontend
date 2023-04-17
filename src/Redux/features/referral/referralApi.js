import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const referralApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getReferById: builder.query({
            query: id => ({
                url: `/refer/get-refer-by-id/${id}`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
        getReferOfMe: builder.query({
            query: () => ({
                url: `/refer/get`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
        getallReferByUserId: builder.query({
            query: id => ({
                url: `/refer/get-refer-by-id/${id}`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
        getMyWithdrawRequests: builder.query({
            query: ({limit,page}) => ({
                url: `/refer/my-withdraw-requests?_page=${page}&_limit=${limit}`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
        balanceWithdraw:builder.mutation({
            query: (data) => ({
                url: `/refer/withdraw-request`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body:data
            }),
        }),
    }),
});

export const {
    useGetReferByIdQuery,
    useGetReferOfMeQuery,
    useGetallReferByUserIdQuery,
    useBalanceWithdrawMutation,
    useGetMyWithdrawRequestsQuery
} = referralApi;
