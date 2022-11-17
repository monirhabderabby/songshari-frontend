import { useReducer } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { cityFunction } from "../../../redux/actions/ProfileAction";
// import { setSearchedData } from "../../../utils/functions";

function FindPartnerForm() {
    // const navigate = useNavigate();

    // const { city } = useSelector((state) => state.profileValue);
    // const { authenticated } = useSelector((state) => state.authValue);

    // let dispatch = useDispatch();
    // useMemo(() => {
    //     dispatch(cityFunction());
    // }, [dispatch]);

    const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), {
        minAgeValues: [18, 22, 26, 30, 34],
        maxAgeValues: [38, 42, 46, 50, 54, 58],
        min_age: "",
        max_age: "",
        gender: "",
        city_id: "",
    });

    let minAges = state.minAgeValues.map(m => (
        <option key={m + 10} value={m}>
            {m}
        </option>
    ));
    let maxAges = state.maxAgeValues.map(m => (
        <option key={m + 10} value={m}>
            {m}
        </option>
    ));

    const inputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setState({ [name]: value });
    };

    const handleSubmit = () => {
        // if (authenticated) {
        //     const data = {
        //         min_age: state.min_age,
        //         max_age: state.max_age,
        //         gender: state.gender,
        //         city_id: state.city_id,
        //     };
        //     setSearchedData(data);
        //     navigate("/partner/searched");
        // } else {
        //     navigate("/login");
        // }
    };

    // let cityVal = "";
    // if (city?.data?.length > 0) {
    //     cityVal = city.data.map((c) => (
    //         <option key={c.id} value={c.id} selected={c.id == 1}>
    //             {c.name}
    //         </option>
    //     ));
    // }

    const formLabel = text => {
        return (
            <div>
                <p className="text-lg md:text-base lg:text-lg font-bold md:font-semibold lg:font-bold leading-5 md:leading-4 lg:leading-5">{text}</p>
                <hr className="w-8 h-1 rounded-sm" style={{ backgroundImage: "linear-gradient(145deg, #5d38b1f7 0%, #951f1f 100%)" }} />
            </div>
        );
    };

    return (
        <div
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="bg-white w-11/12 mx-auto mt-8 md:mt-0 md:w-1/3 lg:w-1/4 h-fit rounded-xl shadow-xl"
        >
            <div
                id="join-now-box2"
                className="rounded-xl"
                data-wow-offset="30"
                data-wow-delay="0.9s"
            >
                <div
                    className="rounded-t-xl pb-3 md:pb-1 lg:pb-3 flex justify-center"
                    style={{
                        backgroundImage:
                            "linear-gradient(145deg,rgba(81, 27, 231, 1) 0%,rgba(228, 18, 114,1)100%)",
                    }}
                >
                    <div className="">
                        <p className="text-lg font-bold text-white pt-3 md:pt-1 lg:pt-3">
                            Find Your Partner
                        </p>
                        <hr
                            className="w-8 h-1 rounded-sm border-none"
                            style={{
                                backgroundImage:
                                    "linear-gradient(145deg, #5d38b1f7 0%, #951f1f 100%)",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div className="single-option">
                        <div className="px-4 flex justify-between py-2 md:py-1 lg:py-2 border-b">
                            {formLabel("Looking For")}
                            <div className="border rounded-full px-2">
                                <select>
                                    <option value="">Myself</option>
                                    <option value="">My Brother</option>
                                    <option value="">My Son</option>
                                    <option value="">My Daughter</option>
                                    <option value="">My Relative</option>
                                    <option value="">Friend</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div
                        id="single-option2"
                        className="px-4 flex justify-between py-2 md:py-1 lg:py-2 border-b"
                    >
                        {formLabel("I am a")}
                        <div className="flex">
                            <div className="s-input mr-2">
                                <input type="radio" name="" id="male2" />
                                <label htmlFor="male2" className="pl-2" >Male</label>
                            </div>
                            <div className="s-input">
                                <input type="radio" name="" id="female2" />
                                <label htmlFor="female2" className="pl-2">Female</label>
                            </div>
                        </div>
                    </div>
                    <div
                        id="single-option2"
                        className="px-4 flex justify-between py-2 md:py-1 lg:py-2 border-b"
                    >
                        {formLabel("Seeking a")}
                        <div className="flex">
                            <div className="s-input mr-2">
                                <input
                                    type="radio"
                                    name="gender"
                                    id="males"
                                    onChange={inputChange}
                                    value={1}
                                />
                                <label htmlFor="males" className="pl-2">Man</label>
                            </div>
                            <div className="s-input">
                                <input
                                    type="radio"
                                    name="gender"
                                    id="females"
                                    onChange={inputChange}
                                    value={2}
                                />
                                <label htmlFor="females" className="pl-1">Woman</label>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 flex justify-between py-2 md:py-1 lg:py-2 border-b">
                        {formLabel("Religion")}
                        <div className="border rounded-full px-2">
                            <select name="religion" onChange={inputChange}>
                                <option value={1}>Muslim</option>
                                <option value={2}>Hindu</option>
                                <option value={3}>Christian</option>
                            </select>
                        </div>
                    </div>
                    <div className="px-4 flex justify-between py-2 md:py-1 lg:py-2 border-b">
                        {formLabel("Ages")}
                        <div className="flex">
                            <div className="border rounded-full px-2">
                                <select name="min_age" onChange={inputChange}>
                                    {minAges}
                                </select>
                            </div>
                            <div className="mx-2">-</div>
                            <div className="border rounded-full px-2">
                                <select name="max_age" onChange={inputChange}>
                                    {maxAges}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 flex justify-between py-2 md:py-1 lg:py-2 border-b">
                        {formLabel("City")}
                        <div>
                            <div className="border rounded-full px-2">
                                <select name="city_id" onChange={inputChange}>
                                    {/* {cityVal} */}
                                    City
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center my-4 md:my-2 lg:my-4">
                        <button
                            type="submit"
                            className="px-8 md:px-6 lg:px-8 pt-2 md:pt-1 lg:pt-2 pb-1 md:pb-0 lg:pb-1 mb-4 md:mb-0 text-2xl md:text-xl lg:text-2xl text-white font-semibold rounded-md tracking-[.25em] shadow-xl shadow-[#0c4ea54d] cursor-pointer"
                            style={{
                                backgroundImage:
                                    "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                            }}
                            onClick={handleSubmit}
                        >
                            JOIN NOW!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindPartnerForm;
