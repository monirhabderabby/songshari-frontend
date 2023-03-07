import FindKaziPage from "../../components/pages/Kazi/FindKazi/FindKaziPage";
import { FindRecentKazi } from "../../components/pages/Kazi/FindKazi/FindRecentKazi";
import KaziActivity from "../../components/pages/Kazi/KaziActivity/KaziActivity";
import KaziReviewsContainer from "../../components/pages/Kazi/KaziReview/KaziReviewsContainer";
import KaziAddServiceForm from "../../components/pages/Kazi/KaziServices/AddServiceForm/KaziAddServiceForm";
import KaziServicesPage from "../../components/pages/Kazi/KaziServices/KaziServicesPages";
import { KaziProfile } from "../../components/pages/Kazi/Profile/KaziProfile";
import { KaziProfileContainer } from "../../components/pages/Kazi/Profile/profileContainer/KaziProfileContainer";
import { ServiceEdit } from "../../components/shared/Components/LawyerAgentKaziService/ServiceEdit/ServiceEdit";
import SingleServicesContainer from "../../components/shared/Components/LawyerAgentKaziService/SingleServices/SingleServicesContainer";
import EditEducationalInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditEducationalInfo";
import EditOthersInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditOthersInfo";
import EditPersonalInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditPersonalInfo";
import EditPhysicalInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditPhysicalInfo";
import EditProfesionalInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditProfesionalInfo";
import ProfileDetails from "../../components/SingleProfilesUser/profileSection/ProfileDetails";

const kaziPrivateRoutes = [
  {
    id: 1,
    path: "/kaziProfile",
    element: <KaziProfile />,
    nestedRoutes: [
      {
        id: 1,
        path: "kaziServices",
        element: <KaziServicesPage />,
      },
      {
        id: 2,
        path: "review",
        element: <KaziReviewsContainer />,
      },
      {
        id: 3,
        path: "kaziAddServiceForm",
        element: <KaziAddServiceForm />,
      },
      {
        id: 4,
        path: "kaziSingleServiceDetails/:id",
        element: <SingleServicesContainer />,
      },
      {
        id: 5,
        path: "activity",
        element: <KaziActivity />,
      },
      {
        id: 6,
        path: "profile",
        element: <KaziProfileContainer />,
        nestedRoutes: [
          {
            id: 1,
            path: "",
            element: <ProfileDetails />,
          },
          {
            id: 2,
            path: "edit",
            nestedRoutes: [
              {
                id: 1,
                path: "personalinfo/:id",
                element: <EditPersonalInfo />,
              },
              {
                id: 2,
                path: "profesionalinfo/:id",
                element: <EditProfesionalInfo />,
              },
              {
                id: 3,
                path: "educationalinfo/:id",
                element: <EditEducationalInfo />,
              },
              {
                id: 4,
                path: "physicalinfo/:id",
                element: <EditPhysicalInfo />,
              },
              {
                id: 5,
                path: "othersinfo/:id",
                element: <EditOthersInfo />,
              },
            ],
          },
        ],
      },
      {
        id: 7,
        path: "serviceEdit/:id",
        element: <ServiceEdit />,
      },
    ],
  },
  {
    id: 2,
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

export default kaziPrivateRoutes;
