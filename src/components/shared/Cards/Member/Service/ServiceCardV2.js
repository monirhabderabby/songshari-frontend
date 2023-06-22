// Configuration
import { useNavigate } from "react-router";

// Third party packages
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import VarientAnimation from "../../../../../assets/utilities/Animation/VarientAnimation";

// const useStyles = makeStyles({
//   gradientButton: {
//     background: "#E41272",
//     borderRadius: "4px",
//     border: 0,
//     color: "white",
//     height: "28px",
//     width: "78px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     "&:hover": {
//       background: "#E41272",
//     },
//   },
// });
const ServiceCardV2 = ({ service, responsive, i }) => {
    const [navigateTo, setNavigateTo] = useState();
    // const classes = useStyles();

    const navigate = useNavigate();

    let { role, price, photos, title, description, _id } = service || {};
    const { firstName, lastName } = role || {};
    const name = `${firstName} ${lastName}`;
    description = description?.length > 94 ? description.slice(0, 94) : description;

    useEffect(() => {
        if (responsive) {
            setNavigateTo(`/serviceMov/${_id}`);
        } else {
            setNavigateTo(`/service/${_id}`);
        }
    }, [_id, responsive]);

    return (
        <div className="w-full overflow-hidden">
            <VarientAnimation direction={i % 2 === 0 ? "right" : "left"} delay={0.3}>
                <div className="w-[100%] max-w-[512px] mx-auto bg-[#FDF8E7] max-h-[384px] p-[18px] flex flex-col justify-between rounded-[12px]">
                    <img src={photos[0]} alt="serviceImage" className="h-[188px] w-full rounded-[12px]" />
                    <div className="content w-full flex flex-col gap-y-[16px] mt-[8px]">
                        <h3 className="text-[#000000] font-SourceCodePro text-[18px] font-medium leading-[23px]">{title}</h3>
                        <p className="text-[#666666] font-SourceCodePro font-normal text-[14px] leading-[18px]">{description}</p>
                        <p className="text-[#000000] text-[14px] font-medium font-SourceCodePro leading-[18px]">{name}</p>
                    </div>
                    <div className="flex items-center justify-end gap-x-[26px]">
                        <h4 className="text-[#000000] text-[16px] font-semibold flex items-center gap-x-[2px]">
                            <TbCurrencyTaka />
                            {price}
                        </h4>
                        <button
                            // variant="contained"
                            className="special_profile_button"
                            onClick={() => navigate(navigateTo)}
                        >
                            View
                        </button>
                    </div>
                </div>
            </VarientAnimation>
        </div>
    );
};

export default ServiceCardV2;
