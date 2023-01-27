import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const serviceApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addSingleService: builder.mutation({
            query: data => ({
                url: "/member/service/add",
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
    }),
});

export const { useAddSingleServiceMutation } = serviceApi;
