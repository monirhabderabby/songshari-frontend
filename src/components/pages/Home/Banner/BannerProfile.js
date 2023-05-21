/* eslint-disable react-hooks/exhaustive-deps */
// Configuration
import { useEffect, useState } from "react";

// Third party packages
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// components
import {
    useGetRecentMembersWithAuthQuery,
    useRejectSwipeAndMatchMemberMutation,
    useSwipeProfileLikeMutation,
} from "../../../../Redux/features/userInfo/withoutLoginApi";
import { SwipAndMatchCard } from "../../../shared/Cards/SwipeAndMatch/SwipAndMatchCard";

//css
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import { setSuperMatched } from "../../../../Redux/features/Swap/SwapSlice";
import { SuperMatchedModal } from "../../../shared/Components/superMatched/SuperMatchedModal";

const BannerProfile = ({ swapable, setSwapable }) => {
    // hook variables
    const [likedGif, setLikedGif] = useState(false);
    const [rejectedGif, setRejectedGif] = useState(false);
    const [clickNextButton, setClickNextButton] = useState(false);
    const [clickPreviousButton, setClickPreviousButton] = useState(false);

    // js
    const dispatch = useDispatch();

    const [swipeProfileLike, { data: swapLikeData }] = useSwipeProfileLikeMutation();
    const [rejectSwipeAndMatchMember] = useRejectSwipeAndMatchMemberMutation();
    const { data: swipematch } = useGetRecentMembersWithAuthQuery({
        searchTerm: "",
        page: "",
        role: "",
        limit: "",
    });
    const [currentUser, setCurrentUser] = useState(null);

    // super matched
    const { isMatched } = useSelector(state => state.persistedReducer?.swap);

    const getJustSwipeData = e => {
        // get the current element
        let activeEl;
        activeEl = e.previousIndex - 1;
        const swipeAndMatchArrau = swipematch?.data?.members;
        const result = swipeAndMatchArrau.find((item, index) => {
            if (activeEl === index) return item;
            else return false;
        });

        setCurrentUser(result);
    };

    useEffect(() => {
        if (swapLikeData) {
            const { matched, data } = swapLikeData || {};
            setSwapable(swapLikeData?.swapAble);

            // if super matched
            if (matched) {
                dispatch(setSuperMatched(data?.updatedProfile));
            }
        }
    }, [swapLikeData]);

    useEffect(() => {
        // JS Variable
        const { _id } = currentUser || {};

        if (clickNextButton) {
            setClickNextButton(false);
            rejectSwipeAndMatchMember(_id);
            setRejectedGif(true);
        }
        if (clickPreviousButton) {
            setLikedGif(true);
            setClickPreviousButton(false);
            swipeProfileLike(_id);
        }
    }, [swapLikeData]);

    useEffect(() => {
        // JS Variable
        const { _id } = currentUser || {};

        if (clickNextButton) {
            setClickNextButton(false);
            rejectSwipeAndMatchMember(_id);
            setRejectedGif(true);
        }
        if (clickPreviousButton) {
            setLikedGif(true);
            setClickPreviousButton(false);
            swipeProfileLike(_id);
        }
    }, [clickNextButton, currentUser, clickPreviousButton, swipeProfileLike, rejectSwipeAndMatchMember]);

    useEffect(() => {
        if (likedGif) {
            setTimeout(() => {
                setLikedGif(false);
            }, 2000);
        }
    }, [likedGif]);
    useEffect(() => {
        if (rejectedGif) {
            setTimeout(() => {
                setRejectedGif(false);
            }, 2000);
        }
    }, [rejectedGif]);
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 7500,
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
                        <SwipAndMatchCard {...{ data, likedGif, rejectedGif, swapable, setSwapable }} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {isMatched && <SuperMatchedModal />}
        </>
    );
};

export default BannerProfile;
