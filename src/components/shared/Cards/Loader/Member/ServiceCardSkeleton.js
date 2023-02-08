import Skeleton from "@mui/material/Skeleton";
const ServiceCardSkeleton = () => {
    return (
        <div className="w-full max-w-[512px] mx-auto bg-[#FDF8E7] h-[384px] p-[18px] flex flex-col rounded-[12px]">
            <Skeleton variant="rectangular" animation="wave" height={188} />
            <div className="mt-[16px]">
                <Skeleton variant="text" animation="wave" sx={{ fontSize: "1rem" }} width={300} />
                <div className="mt-[10px]">
                    <Skeleton variant="text" animation="wave" sx={{ fontSize: "1rem" }} />
                    <Skeleton variant="text" animation="wave" sx={{ fontSize: "1rem" }} />
                </div>
            </div>
        </div>
    );
};
export default ServiceCardSkeleton;
