import { Cart } from "../../components/pages/cart/Cart";
import { CheckoutPage } from "../../components/pages/Checkout/CheckoutPage";
import Shop from "../../Wrapper/Shop/Shop";
import { DesktopWishlistContainer } from "../../Wrapper/Shop/wishList/DesktopWishlistContainer";

const shopPrivateRoutes = [
  {
    id: 1,
    path: "/shop",
    element: <Shop />,
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
  {
    id: 9,
    path: "/wishlist",
    element: <DesktopWishlistContainer />,
  },
];

export default shopPrivateRoutes;
