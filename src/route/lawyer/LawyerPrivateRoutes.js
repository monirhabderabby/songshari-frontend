import FindAlawyerPage from "../../components/pages/FindAlawyer/FindAlawyerPage";
import { FindRecentLawyer } from "../../components/pages/FindAlawyer/FindRecentLawyer";

const lawyerPrivateRoutes = [
  {
    id: 1,
    path: "/findLawyers",
    element: <FindAlawyerPage />,
    nestedRoutes: [
      {
        id: 1,
        path: "recent",
        element: <FindRecentLawyer />,
      },
    ],
  },
];

export default lawyerPrivateRoutes;
