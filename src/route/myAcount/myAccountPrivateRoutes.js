import { MyCourses } from "../../components/pages/Courses/MyCourses/MyCourses";
import { Account } from "../../components/pages/MyOrders/Account";
import { MyOrders } from "../../components/pages/MyOrders/MyOrders";
import { OrderStatus } from "../../components/pages/MyOrders/OrderHistory/OrderStatus";
import { WalletContainer } from "../../components/pages/MyOrders/Wallet/WalletContainer";
import { WishlistTable } from "../../Wrapper/Shop/wishList/WishlistTable";

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
            {
                id: 3,
                path: "wishlist",
                element: <WishlistTable />,
            },
            {
                id: 4,
                path: "my-courses",
                element: <MyCourses />,
            },
            {
                id: 5,
                path: "myWallet",
                element: <WalletContainer />,
            },
        ],
    },
];

export default myAccountPrivateRoutes;
