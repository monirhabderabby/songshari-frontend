import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const checkoutApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    amrPayCheckoutOrder: builder.mutation({
      query: (data) => ({
        url: `/payment/shop`,
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
    }),
  }),
});

export const { useAmrPayCheckoutOrderMutation } = checkoutApi;
