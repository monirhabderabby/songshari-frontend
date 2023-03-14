import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const shopApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllProducts: builder.query({
            query: () => ({
                url: `/shop/product/get-all-products`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
        getSingleProduct: builder.query({
            query: id => ({
                url: `/shop/product/${id}`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
        applyCoupon: builder.mutation({
            query: ({ data, code }) => ({
                url: `/shop/coupon/apply-coupon/${code}`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
    }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery, useApplyCouponMutation } = shopApi;
