import React from "react";
import "./Outline.module.css";
export const OutlineButton = ({ children }) => {
    return (
        <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span> Hover me
        </button>
    );
};
