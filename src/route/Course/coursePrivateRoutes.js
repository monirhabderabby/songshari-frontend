import { CourseAccess } from "../../components/pages/Courses/CourseAccess/CourseAccess";
import { CourseSendReview } from "../../components/pages/Courses/CourseReview/CourseSendReview/CourseSendReview";

const coursePrivateRoutes = [
    {
        id: 1,
        path: "/course/access/:id",
        element: <CourseAccess />,
    },
    {
        id: 2,
        path: "/course/review/:id",
        element: <CourseSendReview />,
    },
];

export default coursePrivateRoutes;
