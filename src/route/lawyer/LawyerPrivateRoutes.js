import LawyerActivity from "../../components/Lawyer/LawyerActivity/LawyerActivity";
import LawyerProfileContainer from "../../components/Lawyer/LawyerProfileContainer/LawyerProfileContainer";
import LawyerReview from "../../components/Lawyer/LawyerReview/LawyerReview";
import LawyerServiceForm from "../../components/Lawyer/LawyerServiceForm/LawyerServiceForm";
import LawyerServicesPage from "../../components/Lawyer/LawyerServicesPage/LawyerServicesPage";
import LawyerSingleServiceDetails from "../../components/Lawyer/LawyerSingleServiceDetails/LawyerSingleServiceDetails";
import ProfileDetails from "../../components/SingleProfilesUser/profileSection/ProfileDetails";
import Lawyer from "../../Wrapper/Lawyer/Lawyer";

const lawyerPrivateRoutes = [
  {
    id: 15,
    path: "/lawyerProfile",
    element: <Lawyer />,
    nestedRoutes: [
      { id: 1, path: "lawyerService", element: <LawyerServicesPage /> },
      { id: 2, path: "lawyerAddForm", element: <LawyerServiceForm /> },
      {
        id: 3,
        path: "lawyerSingleServiceDetails/:id",
        element: <LawyerSingleServiceDetails />,
      },
      {
        id: 4,
        path: "lawyerReview",
        element: <LawyerReview />,
      },
      {
        id: 5,
        path: "lawyerActivity",
        element: <LawyerActivity />,
      },
      //   {
      //     id: 6,
      //     path: "",
      //     element: <LawyerProfileContainer />,
      //     nestedRoutes: [
      //       {
      //         id: 1,
      //         path: "",
      //         element: <ProfileDetails />,
      //       },
      //     ],
      //   },
      {
        id: 7,
        path: "profile",
        element: <LawyerProfileContainer />,
        nestedRoutes: [
          {
            id: 1,
            path: "",
            element: <ProfileDetails />,
          },
        ],
      },
    ],
  },
];

export default lawyerPrivateRoutes;
