import BannerFilterBox from "./BannerFilterBox";
import BannerProfile from "./BannerProfile";

const Banner = () => {
    return (
        <>
            <section className="bg-[url('https://img1.picmix.com/output/stamp/normal/9/9/4/3/1503499_8efaf.gif')] h-[calc(100vh-90px)] flex items-center">
                <div className="max-w-[1200px] mx-auto">
                    <div className="h-full w-full flex items-center gap-x-3">
                        <BannerFilterBox />
                        <img
                            className="h-[400px] max-w-[611px] rounded-[12px]"
                            style={{ boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.12)" }}
                            src="https://images.pexels.com/photos/1779414/pexels-photo-1779414.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Not Available"
                        />
                        <BannerProfile />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
