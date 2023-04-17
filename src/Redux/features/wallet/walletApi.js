import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const ticketApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getMyWallet: builder.query({
            query: () => ({
                url: `/wallet/get-my-wallet`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
        getMyWalletHistory: builder.query({
            query: ({page,limit}) => ({
                url: `/wallet/my-wallet-history?_page=${page}&_limit=${limit}`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
        

        getReferralPoint: builder.query({
            query: () => ({
                url: `/refer/get-refer-point`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
        
        buyPoint:builder.mutation({
            query:(data)=>({
                url:`/wallet/buy-point`,
                method:"POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body:data
            })
        })
    }),
});

export const {
    useGetMyWalletQuery,useBuyPointMutation,useGetReferralPointQuery,useGetMyWalletHistoryQuery
    
} = ticketApi;
