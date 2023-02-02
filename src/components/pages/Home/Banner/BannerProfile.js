// Configuration
import { useEffect, useState } from "react";

// Third party packages
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// components
import { useGetRecentUsersQuery } from "../../../../Redux/features/AllRecentData/recentApi";
import { useLikeSingleProfileMutation } from "../../../../Redux/features/connections/connectionApi";
import { useRejectSwipeAndMatchMemberMutation } from "../../../../Redux/features/userInfo/withoutLoginApi";
import { SwipAndMatchCard } from "../../../shared/Cards/SwipeAndMatch/SwipAndMatchCard";

//css
import "swiper/css";
import "swiper/css/navigation";

const BannerProfile = () => {
    // hook variables
    const [clickNextButton, setClickNextButton] = useState(false);
    const [clickPreviousButton, setClickPreviousButton] = useState(false);
    const { data: swipematch } = useGetRecentUsersQuery();
    const [likeSingleProfile] = useLikeSingleProfileMutation();
    const [rejectSwipeAndMatchMember] = useRejectSwipeAndMatchMemberMutation();
    const [currentUser, setCurrentUser] = useState(null);

    const getJustSwipeData = e => {
        // get the current element
        let activeEl = e.activeIndex;
        const swipeAndMatchArrau = swipematch?.data?.members;
        const result = swipeAndMatchArrau.find((item, index) => {
            if (activeEl === index + 1) return item;
            else return false;
        });

        setCurrentUser(result);
    };

    useEffect(() => {
        // JS Variable
        const { _id } = currentUser || {};

        if (clickNextButton) {
            setClickPreviousButton(false);
            likeSingleProfile(_id);
        }
        if (clickPreviousButton) {
            setClickNextButton(false);
            rejectSwipeAndMatchMember(_id);
        }
    }, [clickNextButton, currentUser, clickPreviousButton, likeSingleProfile, rejectSwipeAndMatchMember]);

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 5500,
            }}
            modules={[Navigation, Autoplay]}
            className="max-w-[280px] h-[400px]"
            navigation={true}
            onSlideChange={e => getJustSwipeData(e)}
            onNavigationPrev={() => {
                setClickNextButton(false);
                setClickPreviousButton(true);
            }}
            onNavigationNext={() => {
                setClickPreviousButton(false);
                setClickNextButton(true);
            }}
        >
            {swipematch?.data?.members.map(data => (
                <SwiperSlide key={data._id}>
                    <SwipAndMatchCard {...{ data }} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default BannerProfile;
