import { Account } from "../../../components/pages/MyOrders/Account";
import { MyOrders } from "../../../components/pages/MyOrders/MyOrders";
import { OrderStatus } from "../../../components/pages/MyOrders/OrderHistory/OrderStatus";

const myAccountPrivateRoutes = [
    {
        id: 1,
        path: "/my-orders",
        element: <MyOrders />,
        nestedRoutes: [
            {
                id: 1,
                path: "account",
                element: <Account />,
            },
            {
                id: 2,
                path: "orderStatus",
                element: <OrderStatus />,
            },
        ],
    },
];

export default myAccountPrivateRoutes;
