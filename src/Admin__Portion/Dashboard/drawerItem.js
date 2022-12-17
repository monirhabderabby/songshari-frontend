import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ArticleOutlined, ColorLensOutlined, DashboardOutlined, GroupOutlined, Layers, ListOutlined, MilitaryTechOutlined, Person, RecordVoiceOverOutlined, Shop } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Typography } from "@mui/material";


export const DrawerItem = () => {
    const [active, setActive] = useState(0)
    const menuItem = [
        { Icon: <DashboardOutlined />, label: 'Dashboard', locatin: 'dashboard' },
        { Icon: <Person />, label: 'User', location: 'dashboard' },
        { Icon: <Layers />, label: 'Lawyer', location: 'dashboard' },
        { Icon: <RecordVoiceOverOutlined />, label: 'Agent', location: 'dashboard' },
        { Icon: <Person />, label: 'Kazi', location: 'dashboard' },
        { Icon: <Shop />, label: 'Shop', location: 'dashboard' },
        { Icon: <ArticleOutlined />, label: 'Course', location: 'dashboard' },
        { Icon: <ArticleOutlined />, label: 'Course', location: 'dashboard' },
        { Icon: <ListOutlined />, label: 'Packages', location: 'dashboard' },
        { Icon: <MilitaryTechOutlined />, label: 'Badges', location: 'dashboard' },
        { Icon: <GroupOutlined />, label: 'Employee', location: 'dashboard' },
        { Icon: <ColorLensOutlined />, label: 'Sponser', location: 'dashboard' },

    ]
    const navigate = useNavigate()
    const handleData = (index, item) => {
        setActive(index)
        if (item.locatin) {
            navigate(`/${item.locatin}`)
        }
    }
    return (
        <div >
            <div className="mt-8">
                {menuItem?.map((item, index) => (
                    <div key={index} disablePadding className="mb-4"  >

                        <button className="flex shadow  items-center p-2 lg:w-[263px] lg:h-[68px] rounded-lg lg:ml-4" style={index === active ? { background: "linear-gradient(83.26deg, #E41272 17.33%, #C94964 98.93%)", color: 'white' } : {}} onClick={() => handleData(index, item)}>
                            <ListItemIcon className="lg:ml-4" style={{ color: active === index ? 'white' : '' }}>
                                {item.Icon}
                            </ListItemIcon>
                            <Typography sx={{ display: { md: "none", lg: "block", fontSize: '18px', fontWeight: '600px', fontFamily: 'poppins', p: 0 } }}>
                                {item.label}
                            </Typography>

                        </button>

                    </div>
                ))}
            </div>
        </div>
    );
} 