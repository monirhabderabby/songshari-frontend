import FindKaziPage from "../../components/pages/FindKazi/FindKaziPage";
import { FindRecentKazi } from "../../components/pages/FindKazi/FindRecentKazi";

const kaziRoutes = [
    {
        id: 1,
        path: "/kazi",
        element: <FindKaziPage />,
        nestedRoutes: [
            {
                id: 1,
                path: "recent",
                element: <FindRecentKazi />,
            },
        ],
    },
];

export default kaziRoutes;
