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
    }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = shopApi;