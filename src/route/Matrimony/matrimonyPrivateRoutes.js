import { DynamicSingleServiceContainer } from "../../components/pages/DynamicProfilePage/DynamicSingleServiceContainer/DynamicSingleServiceContainer";
import { FilterResults } from "../../components/pages/FindPartner/FilterResults/FilterResults";
import { FindAPartnerSuggested } from "../../components/pages/FindPartner/FindAPartnerSuggested";
import FindPartners from "../../components/pages/FindPartner/FindPartners";
import { NearestPartners } from "../../components/pages/FindPartner/NearestPartners/NearestPartners";
import { TopPartners } from "../../components/pages/FindPartner/TopPartner/TopPartners";
import { Gallery } from "../../components/shared/Components/Gallery";
import SingleServicesStatusContainer from "../../components/shared/Components/LawyerAgentKaziService/SingleServicesStatus/SingleServicesStatusContainer";
import { DesktopNotification } from "../../components/shared/Notification/DesktopNotification";
import EducationalCertificateWeb from "../../components/SingleProfilesUser/CertificateSection/EducationalCertificateWeb";
import PersonalCertificateWeb from "../../components/SingleProfilesUser/CertificateSection/PersonalCertificateWeb";
import ProfessionalCertificateWeb from "../../components/SingleProfilesUser/CertificateSection/ProfessionalCertificateWeb";
import EditEducationalInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditEducationalInfo";
import EditFamilyInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditFamilyInfo";
import EditOthersInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditOthersInfo";
import EditPersonalInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditPersonalInfo";
import EditPhysicalInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditPhysicalInfo";
import EditProfesionalInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditProfesionalInfo";
import EditSiblingsInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditSiblingsInfo";
import ProfileDetails from "../../components/SingleProfilesUser/profileSection/ProfileDetails";
import { SingleProfiles } from "../../components/SingleProfilesUser/SingleProfiles";
import { Container } from "../../Wrapper/Stepper/Container";

const matrimonyPrivateRoutes = [
  {
    id: 1,
    path: "/userprofile",
    element: <SingleProfiles />,
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
    id: 2,
    path: "/stepper",
    element: <Container />,
  },
  {
    id: 3,
    path: "/personalCertificate",
    element: <PersonalCertificateWeb />,
  },
  {
    id: 4,
    path: "/professionalCertificate",
    element: <ProfessionalCertificateWeb />,
  },
  {
    id: 5,
    path: "/educationalCertificate",
    element: <EducationalCertificateWeb />,
  },
  {
    id: 6,
    path: "/gallery/:id",
    element: <Gallery />,
  },
  {
    id: 7,
    path: "/serviceStatus/running/:id",
    element: <SingleServicesStatusContainer />,
  },
  {
    id: 7,
    path: "/serviceStatus/cancelled/:id",
    element: <SingleServicesStatusContainer />,
  },
  {
    id: 8,
    path: "/serviceStatus/completed/:id",
    element: <SingleServicesStatusContainer />,
  },
  {
    id: 9,
    path: "/desktopNotification/:id",
    element: <DesktopNotification />,
  },
  {
    id: 10,
    path: "/service/:id",
    element: <DynamicSingleServiceContainer />,
  },
  {
    id: 11,
    path: "/find-partner",
    element: <FindPartners />,
    nestedRoutes: [
      {
        id: 1,
        path: "/find-partner/suggested",
        element: <FindAPartnerSuggested />,
      },
      {
        id: 2,
        path: "top",
        element: <TopPartners />,
      },
      {
        id: 3,
        path: "nearest",
        element: <NearestPartners />,
      },
      {
        id: 4,
        path: "filter",
        element: <FilterResults />,
      },
    ],
  },
];

export default matrimonyPrivateRoutes;
