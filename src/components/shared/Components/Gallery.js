// configuration
import React from "react";
import { useParams } from "react-router";

// Third party packages
import { motion } from "framer-motion";
import { AiOutlineWarning } from "react-icons/ai";
import { MdNoPhotography } from "react-icons/md";

// components
import { useGetProfileDetailsQuery } from "../../../Redux/features/userInfo/userApi";
import customFunc from "../../../assets/utilities/customFunc";
import useDocumentTitle from "../../../assets/utilities/useDocumentTitle";
import CustomHeader from "../CustomHeader/CustomHeader";

export const Gallery = () => {
    // page title
    useDocumentTitle("Shongshari | Gallery");
    // hook variable declaration
    const { id } = useParams();

    const { profilePhotoDecisionMaker } = customFunc;

    // Redux api calls
    const { data, error, isLoading } = useGetProfileDetailsQuery(id);

    // js variable declaration
    const photos = data?.photos;
    const loaderArr = [1, 2, 3, 4, 5, 6];

    let content;
    if (isLoading) {
        content = (
            <div className="w-full grid grid-cols-3 gap-[40px] max-w-[1200px] mx-auto px-[10px]">
                {loaderArr.map(p => {
                    return <div key={p} className={`w-[370px] h-[325px] bg-gray-200 rounded-[15px] animate-pulse`}></div>;
                })}
            </div>
        );
    } else if (!isLoading && error) {
        content = (
            <div className="w-full h-[calc(100vh-(30vh+200px))] flex flex-col justify-center items-center">
                <AiOutlineWarning className="text-[42px] text-gray-400" />
                <p className="text-[22px] font-Inter text-gray-400">Server Error</p>
            </div>
        );
    } else if (!isLoading && photos?.length === 0) {
        content = (
            <div className="w-full h-[calc(100vh-(30vh+200px))] flex flex-col justify-center items-center">
                <MdNoPhotography className="text-[42px] text-gray-400" />
                <p className="text-[22px] font-Inter text-gray-400">No photos found!</p>
            </div>
        );
    } else if (!isLoading && photos?.length > 0) {
        content = (
            <div className="w-full grid grid-cols-3 gap-[40px] max-w-[1200px] mx-auto px-[10px]">
                {photos?.map((photo, i) => {
                    return (
                        <motion.div
                            initial={{
                                opacity: 0,
                                translateX: i % 2 === 0 ? -50 : 50,
                                translateY: -50,
                            }}
                            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.2 }}
                            className="h-[325px] w-[370px] overflow-hidden rounded-[15px] "
                        >
                            <div
                                className={`w-[370px] h-[325px] rounded-md bg-cover bg-center cursor-pointer hover:scale-125 duration-300`}
                                style={{
                                    backgroundImage: `url(${profilePhotoDecisionMaker(photo)})`,
                                }}
                            ></div>
                        </motion.div>
                    );
                })}
            </div>
        );
    }
    return (
        <div className="hidden lg:block">
            <CustomHeader title="Gallery" />
            <p className="text-[#333333] font-semibold font-fira text-[32px] mt-[60px] mb-[30px] max-w-[1200px] mx-auto px-[20px]">All Photos</p>
            {content}
        </div>
    );
};
