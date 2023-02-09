// components
import MobileActivity from "../../../components/pages/MobileActivity/MobileActivity";
import MobileSingleProfilesUser from "../../../components/SingleProfilesUser/MobileSingleProfilesUser/MobileSingleProfilesUser";
import { PersonalDetailsMobile } from "../../../components/SingleProfilesUser/MobileSingleProfilesUser/PersonalDetailsMobile";
import { NotificationForMobile } from "../../../components/SingleProfilesUser/Notification/NotificationForMobile";
import ProfileServices from "../../../components/SingleProfilesUser/ServicesSection/ProfileServices";
import { AllPosts } from "../../../Wrapper/Home/mobileversion/allposts/AllPosts";
import { CertificateMov } from "../../../Wrapper/Home/mobileversion/CertificateForMobile/CertificateMov";
import EducationalCertificateMobile from "../../../Wrapper/Home/mobileversion/CertificateMobile/EducationalCertificateMobile/EducationalCertificateMobile";
import PersonalCertificateMobile from "../../../Wrapper/Home/mobileversion/CertificateMobile/PersonalCertificateMobile/PersonalCertificateMobile";
import ProfessionalCertificateMobile from "../../../Wrapper/Home/mobileversion/CertificateMobile/ProfessionalCertificateMobile/ProfessionalCertificateMobile";
import { Like } from "../../../Wrapper/Home/mobileversion/Like";
import { MatchesMov } from "../../../Wrapper/Home/mobileversion/MatchesMov";
import MobileAgentAddServiceForm from "../../../Wrapper/Home/mobileversion/MobileAgent/MobileAgentAddServiceForm/MobileAgentAddServiceForm";
import MobileAgentServicesPage from "../../../Wrapper/Home/mobileversion/MobileAgent/MobileAgentServicesPage/MobileAgentServicesPage";
import MobileKaziAddServiceForm from "../../../Wrapper/Home/mobileversion/MobileKazi/MobileKaziAddServiceForm/MobileKaziAddServiceForm";
import MobileKaziServicesPage from "../../../Wrapper/Home/mobileversion/MobileKazi/MobileKaziServicesPage/MobileKaziServicesPage";
import MobileLawyerActivity from "../../../Wrapper/Home/mobileversion/MobileLawyer/MobileLawyerActivity/MobileLawyerActivity";
import MobileLawyerAddServiceForm from "../../../Wrapper/Home/mobileversion/MobileLawyer/MobileLawyerAddServiceForm/MobileLawyerAddServiceForm";
import MobileLawyerServicesPage from "../../../Wrapper/Home/mobileversion/MobileLawyer/MobileLawyerServicesPage/MobileLawyerServicesPage";
import MobileProfServiceEdit from "../../../Wrapper/Home/mobileversion/MobileProfServiceEdit/MobileProfServiceEdit";
import MobileProfSingleServicesContainer from "../../../Wrapper/Home/mobileversion/MobileProfSingleServicesContainer/MobileProfSingleServicesContainer";
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
    id: 10,
    path: "/servicemov",
    element: <ProfileServices />,
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
  },
  {
    id: 24,
    path: "/kaziActivityMov",
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
];

export default MobileMatrimonyPrivateRoutes;
