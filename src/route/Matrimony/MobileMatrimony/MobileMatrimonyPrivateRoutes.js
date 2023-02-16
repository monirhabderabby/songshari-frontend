// components
import MobileUserConnections from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileUserConnections/MobileUserConnections";
import MobileActivity from "../../../components/pages/MobileActivity/MobileActivity";
import MobileSingleProfilesUser from "../../../components/SingleProfilesUser/MobileSingleProfilesUser/MobileSingleProfilesUser";
import { PersonalDetailsMobile } from "../../../components/SingleProfilesUser/MobileSingleProfilesUser/PersonalDetailsMobile";
import { NotificationForMobile } from "../../../components/SingleProfilesUser/Notification/NotificationForMobile";
import { AllPosts } from "../../../Wrapper/Home/mobileversion/allposts/AllPosts";
import { CertificateMov } from "../../../Wrapper/Home/mobileversion/CertificateForMobile/CertificateMov";
import EducationalCertificateMobile from "../../../Wrapper/Home/mobileversion/CertificateMobile/EducationalCertificateMobile/EducationalCertificateMobile";
import PersonalCertificateMobile from "../../../Wrapper/Home/mobileversion/CertificateMobile/PersonalCertificateMobile/PersonalCertificateMobile";
import ProfessionalCertificateMobile from "../../../Wrapper/Home/mobileversion/CertificateMobile/ProfessionalCertificateMobile/ProfessionalCertificateMobile";
import { Like } from "../../../Wrapper/Home/mobileversion/Like";
import { MatchesMov } from "../../../Wrapper/Home/mobileversion/MatchesMov";
import MobileAgentActivity from "../../../Wrapper/Home/mobileversion/MobileAgent/MobileAgentActivity/MobileAgentActivity";
import MobileAgentAddServiceForm from "../../../Wrapper/Home/mobileversion/MobileAgent/MobileAgentAddServiceForm/MobileAgentAddServiceForm";
import MobileAgentServicesPage from "../../../Wrapper/Home/mobileversion/MobileAgent/MobileAgentServicesPage/MobileAgentServicesPage";
import MobileDynamicSingleServiceContainer from "../../../Wrapper/Home/mobileversion/MobileDynamicSingleServiceContainer/MobileDynamicSingleServiceContainer";
import MobileDynamicSingleServiceStatusContainer from "../../../Wrapper/Home/mobileversion/MobileDynamicSingleServiceStatusContainer/MobileDynamicSingleServiceStatusContainer";
import MobileKaziActivity from "../../../Wrapper/Home/mobileversion/MobileKazi/MobileKaziActivity/MobileKaziActivity";
import MobileKaziAddServiceForm from "../../../Wrapper/Home/mobileversion/MobileKazi/MobileKaziAddServiceForm/MobileKaziAddServiceForm";
import MobileKaziServicesPage from "../../../Wrapper/Home/mobileversion/MobileKazi/MobileKaziServicesPage/MobileKaziServicesPage";
import MobileLawyerActivity from "../../../Wrapper/Home/mobileversion/MobileLawyer/MobileLawyerActivity/MobileLawyerActivity";
import MobileLawyerAddServiceForm from "../../../Wrapper/Home/mobileversion/MobileLawyer/MobileLawyerAddServiceForm/MobileLawyerAddServiceForm";
import MobileLawyerServicesPage from "../../../Wrapper/Home/mobileversion/MobileLawyer/MobileLawyerServicesPage/MobileLawyerServicesPage";
import MobileProfServiceEdit from "../../../Wrapper/Home/mobileversion/MobileProfServiceEdit/MobileProfServiceEdit";
import MobileProfSingleServicesContainer from "../../../Wrapper/Home/mobileversion/MobileProfSingleServicesContainer/MobileProfSingleServicesContainer";
import MobileUserAgentServices from "../../../Wrapper/Home/mobileversion/MobileUserServicesPage/MobileUserAgentServices";
import MobileUserAllServices from "../../../Wrapper/Home/mobileversion/MobileUserServicesPage/MobileUserAllServices";
import MobileUserCancelledServices from "../../../Wrapper/Home/mobileversion/MobileUserServicesPage/MobileUserCancelledServices";
import MobileUserKaziServices from "../../../Wrapper/Home/mobileversion/MobileUserServicesPage/MobileUserKaziServices";
import MobileUserLawyerServices from "../../../Wrapper/Home/mobileversion/MobileUserServicesPage/MobileUserLawyerServices";
import MobileUserOngoingServices from "../../../Wrapper/Home/mobileversion/MobileUserServicesPage/MobileUserOngoingServices";
import { GalleryContainerForMobile } from "../../../Wrapper/Home/mobileversion/PhotoGallery/GalleryContainerForMobile";
import { Setting } from "../../../Wrapper/Home/mobileversion/setting/Setting";

const MobileMatrimonyPrivateRoutes = [
  {
    id: 1,
    path: "/mobileuserprofile",
    element: <MobileSingleProfilesUser />,
    nestedRoutes: [
      {
        id: 1,
        path: "personaldetailsmov",
        element: <PersonalDetailsMobile />,
      },
    ],
  },
  {
    id: 2,
    path: "/dynamicpersonaldetails/:id",
    element: <PersonalDetailsMobile />,
  },
  {
    id: 3,
    path: "/educationalCertificateMov",
    element: <EducationalCertificateMobile />,
  },
  {
    id: 4,
    path: "/professionalCertificateMov",
    element: <ProfessionalCertificateMobile />,
  },
  {
    id: 5,
    path: "/personalCertificateMov",
    element: <PersonalCertificateMobile />,
  },
  {
    id: 6,
    path: "/matchesmov",
    element: <MatchesMov />,
  },
  {
    id: 7,
    path: "/Gallery/mobile/:id",
    element: <GalleryContainerForMobile />,
  },

  {
    id: 8,
    path: "/setting",
    element: <Setting />,
  },
  {
    id: 9,
    path: "/notifications",
    element: <NotificationForMobile />,
  },
  {
    id: 11,
    path: "/matchesmov",
    element: <MatchesMov />,
  },

  {
    id: 12,
    path: "/certificatemov",
    element: <CertificateMov />,
  },

  {
    id: 13,
    path: "/like",
    element: <Like />,
  },
  {
    id: 14,
    path: "/mobile-allposts",
    element: <AllPosts />,
  },
  {
    id: 15,
    path: "/mobileActivityPage",
    element: <MobileActivity />,
  },
  {
    id: 16,
    path: "/mobileLawyerServices",
    element: <MobileLawyerServicesPage />,
  },
  {
    id: 17,
    path: "/lawyerAddServiceFormMov",
    element: <MobileLawyerAddServiceForm />,
  },
  {
    id: 18,
    path: "/mobileAgentServices",
    element: <MobileAgentServicesPage />,
  },
  {
    id: 19,
    path: "/agentAddServiceFormMov",
    element: <MobileAgentAddServiceForm />,
  },
  {
    id: 20,
    path: "/mobileKaziServices",
    element: <MobileKaziServicesPage />,
  },
  {
    id: 21,
    path: "/kaziAddServiceFormMov",
    element: <MobileKaziAddServiceForm />,
  },
  {
    id: 22,
    path: "/lawyerActivityMov",
    element: <MobileLawyerActivity />,
  },
  {
    id: 23,
    path: "/agentActivityMov",
    element: <MobileAgentActivity />,
  },
  {
    id: 24,
    path: "/kaziActivityMov",
    element: <MobileKaziActivity />,
  },
  {
    id: 25,
    path: "lawyerSingleServiceDetailsMov/:id",
    element: <MobileProfSingleServicesContainer />,
  },
  {
    id: 26,
    path: "agentSingleServiceDetailsMov/:id",
    element: <MobileProfSingleServicesContainer />,
  },
  {
    id: 27,
    path: "kaziSingleServiceDetailsMov/:id",
    element: <MobileProfSingleServicesContainer />,
  },
  {
    id: 28,
    path: "serviceEditMov/:id",
    element: <MobileProfServiceEdit />,
  },
  {
    id: 29,
    path: "/allServices",
    element: <MobileUserAllServices />,
  },
  {
    id: 30,
    path: "/ongoingServices",
    element: <MobileUserOngoingServices />,
  },
  {
    id: 31,
    path: "/cancelledServices",
    element: <MobileUserCancelledServices />,
  },
  {
    id: 32,
    path: "/agentServices",
    element: <MobileUserAgentServices />,
  },
  {
    id: 33,
    path: "/kaziServices",
    element: <MobileUserKaziServices />,
  },
  {
    id: 34,
    path: "/lawyerServices",
    element: <MobileUserLawyerServices />,
  },
  {
    id: 35,
    path: "/serviceMov/:id",
    element: <MobileDynamicSingleServiceContainer />,
  },
  {
    id: 36,
    path: "/serviceStatusMov/running/:id",
    element: <MobileDynamicSingleServiceStatusContainer />,
  },
  {
    id: 37,
    path: "/serviceStatusMov/cancelled/:id",
    element: <MobileDynamicSingleServiceStatusContainer />,
  },
  {
    id: 38,
    path: "/connections/:id",
    element: <MobileUserConnections />,
  },
];

export default MobileMatrimonyPrivateRoutes;
