import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import bangla from "../../../assets/images/NavIcons/Language-Switcher-Bangla.svg";
import english from "../../../assets/images/NavIcons/Language-Switcher-English.svg";

export const LanguageSwitcher = () => {
  // language switcher icon style
  const englishIcon = (
    <img className="w-[68px] h-[68px]" src={english} alt="english" />
  );
  const banglaIcon = (
    <img className="w-[68px] h-[68px]" src={bangla} alt="bangla" />
  );

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIcon, setSelectedIcon] = useState(english);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setSelectedIcon(english);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="mt-2"
      >
        <img className="w-[56px] h-[56px]" src={selectedIcon} alt="language" />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose} defaultValue={english}>
          {englishIcon}
        </MenuItem>
        <MenuItem onClick={handleClose} defaultValue={bangla}>
          {banglaIcon}
        </MenuItem>
      </Menu>
    </div>
  );
};
