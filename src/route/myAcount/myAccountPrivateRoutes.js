import { MyCourses } from "../../components/pages/Courses/MyCourses/MyCourses";
import { Account } from "../../components/pages/MyOrders/Account";
import { AccountDetailesDash } from "../../components/pages/MyOrders/AccountDetailesDash";
import { OrderStatus } from "../../components/pages/MyOrders/OrderHistory/OrderStatus";
import { RefferralContainer } from "../../components/pages/MyOrders/Refferral/RefferralContainer";
import { SingleSupportDetailes } from "../../components/pages/MyOrders/Support/SingleSupportDetailes/SingleSupportDetailes";
import { SupportContainer } from "../../components/pages/MyOrders/Support/SupportContainer";
import { WalletContainer } from "../../components/pages/MyOrders/Wallet/WalletContainer";
import { WishlistTable } from "../../Wrapper/Shop/wishList/WishlistTable";

const myAccountPrivateRoutes = [
    {
        id: 1,
        path: "/my-orders",
        element: <AccountDetailesDash />,
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
            {
                id: 6,
                path: "reffereal",
                element: <RefferralContainer />,
            },
            {
                id: 7,
                path: "support",
                element: <SupportContainer />,
            },
            {
                id: 8,
                path: "support/:id",
                element: <SingleSupportDetailes />,
            },
        ],
    },
];

export default myAccountPrivateRoutes;
