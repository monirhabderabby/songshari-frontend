import AgentActivity from "../../components/pages/Agent/AgentActivity/AgentActivity";
import AgentProfileContainer from "../../components/pages/Agent/AgentProfile/AgentProfileContainer/AgentProfileContainer";
import AgentReview from "../../components/pages/Agent/AgentReview/AgentReview";
import AgentServiceForm from "../../components/pages/Agent/AgentServiceForm/AgentServiceForm";
import AgentServicesPage from "../../components/pages/Agent/AgentServicesPage/AgentServicesPage";
import AgentSingleServiceDetails from "../../components/pages/Agent/AgentSingleServiceDetails/AgentSingleServiceDetails";
import EditEducationalInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditEducationalInfo";
import EditFamilyInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditFamilyInfo";
import EditOthersInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditOthersInfo";
import EditPersonalInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditPersonalInfo";
import EditPhysicalInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditPhysicalInfo";
import EditProfesionalInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditProfesionalInfo";
import EditSiblingsInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditSiblingsInfo";
import ProfileDetails from "../../components/SingleProfilesUser/profileSection/ProfileDetails";
import Agent from "../../Wrapper/Agent/Agent";

const AgentPrivateRoutes = [
  {
    id: 1,
    path: "/agentProfile",
    element: <Agent />,
    nestedRoutes: [
      { id: 1, path: "agentService", element: <AgentServicesPage /> },
      { id: 2, path: "agentAddForm", element: <AgentServiceForm /> },
      {
        id: 3,
        path: "agentSingleServiceDetails/:id",
        element: <AgentSingleServiceDetails />,
      },
      {
        id: 4,
        path: "agentReview",
        element: <AgentReview />,
      },
      {
        id: 5,
        path: "agentActivity",
        element: <AgentActivity />,
      },
      {
        id: 6,
        path: "profile",
        element: <AgentProfileContainer />,
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
              {
                id: 6,
                path: "familyInfo/:id",
                element: <EditFamilyInfo />,
              },
              {
                id: 7,
                path: "siblingsInfo/:id",
                element: <EditSiblingsInfo />,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default AgentPrivateRoutes;
