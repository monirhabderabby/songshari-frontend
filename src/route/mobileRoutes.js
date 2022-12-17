import { MobileHome } from "../Wrapper/Home/mobileversion/MobileHome";
import { Setting } from "../Wrapper/Home/mobileversion/Setting";

const mobileRoutes = [
    {
        path: '/mobileHomePage',
        element: MobileHome
    },
    {
        path: '/setting',
        element: Setting
    },
]

export default mobileRoutes