import LawyerActivity from "../../components/Lawyer/LawyerActivity/LawyerActivity";
import LawyerProfileContainer from "../../components/Lawyer/LawyerProfileContainer/LawyerProfileContainer";
import LawyerReview from "../../components/Lawyer/LawyerReview/LawyerReview";
import LawyerServiceForm from "../../components/Lawyer/LawyerServiceForm/LawyerServiceForm";
import LawyerServicesPage from "../../components/Lawyer/LawyerServicesPage/LawyerServicesPage";
import { ServiceEdit } from "../../components/shared/Components/LawyerAgentKaziService/ServiceEdit/ServiceEdit";
import SingleServicesContainer from "../../components/shared/Components/LawyerAgentKaziService/SingleServices/SingleServicesContainer";
import EditEducationalInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditEducationalInfo";
import EditFamilyInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditFamilyInfo";
import EditOthersInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditOthersInfo";
import EditPersonalInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditPersonalInfo";
import EditPhysicalInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditPhysicalInfo";
import EditProfesionalInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditProfesionalInfo";
import EditSiblingsInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditSiblingsInfo";
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
                element: <SingleServicesContainer />,
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
            {
                id: 6,
                path: "profile",
                element: <LawyerProfileContainer />,
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
            {
                id: 6,
                path: "serviceEdit/:id",
                element: <ServiceEdit />,
            },
        ],
    },
];

export default lawyerPrivateRoutes;
