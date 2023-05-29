import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const deactivateApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        deactivateAccount: builder.mutation({
            query: data => ({
                url: "account/deactivate",
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
    }),
});

export const { useDeactivateAccountMutation } = deactivateApi;
