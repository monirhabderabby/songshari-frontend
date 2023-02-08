import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import UserAgentServices from "./UserAgentServices";
import UserAllServices from "./UserAllServices";
import UserCanceledServices from "./UserCanceledServices";
import UserKaziServices from "./UserKaziServices";
import UserLawyerServices from "./UserLawyerServices";
import UserOngoingServices from "./UserOngoingServices";

const AntTabs = styled(Tabs)({
    borderBottom: "1px solid #e8e8e8",
    "& .MuiTabs-indicator": {
        backgroundColor: "#E42986",
    },
});

const AntTab = styled(props => <Tab disableRipple {...props} />)(({ theme }) => ({
    color: "#64748b",
    "&:hover": {
        color: "#FFBCCB",
        opacity: 1,
    },
    "&.Mui-selected": {
        color: "#E42986",
        fontWeight: theme.typography.fontWeightMedium,
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const ProfileServices = () => {
    const [value, setValue] = useState(1);
    const theme = useTheme();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    return (
        <>
            <div className="w-full max-w-[512px] flex justify-center bg-white mx-auto shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]">
                <AntTabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
                    <AntTab value={1} label="All Services" />
                    <AntTab value={2} label="Ongoing" />
                    <AntTab value={3} label="Completed" />
                    <AntTab value={4} label="Cancelled" />
                    <AntTab value={5} label="Agent Services" />
                    <AntTab value={6} label="Kazi Services" />
                    <AntTab value={7} label="Lawyer Services" />
                </AntTabs>
            </div>
            <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={handleChangeIndex}>
                <TabPanel value={value} index={0} dir={theme.direction}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <UserAllServices />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <UserOngoingServices />
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    Item Four
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction}>
                    <UserCanceledServices />
                </TabPanel>
                <TabPanel value={value} index={5} dir={theme.direction}>
                    <UserAgentServices />
                </TabPanel>
                <TabPanel value={value} index={6} dir={theme.direction}>
                    <UserKaziServices />
                </TabPanel>
                <TabPanel value={value} index={7} dir={theme.direction}>
                    <UserLawyerServices />
                </TabPanel>
            </SwipeableViews>
        </>
    );
};

export default ProfileServices;
