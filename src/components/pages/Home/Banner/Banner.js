import { Fragment } from "react";
import banner from "../../../../assets/images/banner/banner.png";
import BannerFilterBox from "./BannerFilterBox";
import BannerProfile from "./BannerProfile";

const Banner = () => {
    return (
        <Fragment>
            <section className="bg-[url('https://img1.picmix.com/output/stamp/normal/9/9/4/3/1503499_8efaf.gif')] h-[calc(100vh-90px)] flex items-center">
                <div className="custom-container py-[50px]">
                    <div className="grid grid-cols-4 gap-x-2 justify-center items-center">
                        <div>
                            <BannerFilterBox />
                        </div>
                        <div className=" col-span-2">
                            <img className="h-[400px] w-[721px]" src={banner} alt="" />
                        </div>
                        <div>
                            <BannerProfile />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Banner;
