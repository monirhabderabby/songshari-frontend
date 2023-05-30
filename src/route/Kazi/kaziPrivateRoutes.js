import FindKaziPage from "../../components/pages/Kazi/FindKazi/FindKaziPage";
import { FindRecentKazi } from "../../components/pages/Kazi/FindKazi/FindRecentKazi";

const kaziPrivateRoutes = [
  {
    id: 1,
    path: "/kazi",
    element: <FindKaziPage />,
    nestedRoutes: [
      {
        id: 1,
        path: "recent",
        element: <FindRecentKazi role="kazi" />,
      },
    ],
  },
];

export default kaziPrivateRoutes;
