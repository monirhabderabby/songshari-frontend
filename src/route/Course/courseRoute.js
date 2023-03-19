import { CourseLandingPage } from "../../components/pages/Courses/LandingPage/CourseLandingPage";
import { SingleCoursePage } from "../../components/pages/Courses/SingleCoursePage/SingleCoursePage";

const courseRoute = [
    {
        id: 1,
        path: "/courses",
        element: <CourseLandingPage />,
    },
    {
        id: 2,
        path: "/courses/:id",
        element: <SingleCoursePage />,
    },
];

export default courseRoute;
