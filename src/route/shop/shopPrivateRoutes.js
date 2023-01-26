import { Cart } from "../../components/pages/cart/Cart";
import { CheckoutPage } from "../../components/pages/Checkout/CheckoutPage";
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
    {
        id: 7,
        path: "/cart",
        element: <Cart />,
    },
    {
        id: 8,
        path: "/checkout/:id",
        element: <CheckoutPage />,
    },
];

export default shopPrivateRoutes;
