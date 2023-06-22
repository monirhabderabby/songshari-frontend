// configuration
import React from "react";
import { useParams } from "react-router";

// components
import { motion } from "framer-motion";
import { useGetProfileDetailsQuery } from "../../../../Redux/features/userInfo/userApi";
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";
import { BottomNav } from "../BottomNav";

export const GalleryContainerForMobile = () => {
    // hook variable declaration
    const { id } = useParams();
    const { data, isLoading, error } = useGetProfileDetailsQuery(id);

    // js variable declaration
    const photos = data?.photos;

    let content;
    if (isLoading) {
        content = <div className="mt-[20%] flex justify-center">Loading...</div>;
    } else if (!isLoading && error) {
        content = <div className="mt-[20%] flex justify-center">Something went wrong!</div>;
    } else if (!isLoading && photos?.length === 0) {
        content = <div className="mt-[20%] flex justify-center">No Photos found!</div>;
    } else if (!isLoading && photos?.length > 0) {
        content = (
            <div className="w-full grid grid-cols-2 gap-4">
                {photos.map((photo, i) => {
                    return (
                        <motion.div
                            initial={{
                                opacity: 0,
                                translateX: i % 2 === 0 ? -50 : 50,
                                translateY: -50,
                            }}
                            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.2 }}
                        >
                            <img key={i} src={photo} alt="userPhotos" className={`rounded-[15px] w-[150px] h-[120px]`} />
                        </motion.div>
                    );
                })}
            </div>
        );
    }
    return (
        <section className="w-full max-w-[767px] mx-auto">
            <MobileBackButton name="Gallery" />
            <div className="block lg:hidden w-full px-[26px] bg-[#F8F8FF] overflow-hidden">
                <p className="text-[24px] text-[#333333] font-semibold font-fira pt-[21px] mb-[16px]">All Photos</p>
                {content}
                <div className="h-20"></div>
                <BottomNav />
            </div>
        </section>
    );
};
