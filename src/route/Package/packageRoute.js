import PackagePage from "../../components/pages/PackagePage/PackagePage";
import SinglePackageDetailsPage from "../../components/pages/PackagePage/SinglePackageDetailsPage/SinglePackageDetailsPage";

const packageRoute = [
  {
    id: 1,
    path: "/packages",
    element: <PackagePage />,
  },
  {
    id: 2,
    path: "/package/:id",
    element: <SinglePackageDetailsPage />,
  },
];

export default packageRoute;
