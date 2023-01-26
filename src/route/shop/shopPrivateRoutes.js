import Shop from "../../Wrapper/Shop/Shop";
import ShopOrders from "../../Wrapper/Shop/ShopOrders/ShopOrders";
import ShopProducts from "../../Wrapper/Shop/ShopProducts/ShopProducts";

const shopPrivateRoutes = [
    {
        id: 1,
        path: "/shop",
        element: <Shop />,
        nestedRoutes: [
            { id: 1, path: "shopProducts", element: <ShopProducts /> },
            { id: 2, path: "shopOrders", element: <ShopOrders /> },
        ],
    },
];

export default shopPrivateRoutes;
