import React from "react";
import "../../../assets/css/footer.css";

export const Footer = () => {
    return (
        <footer>
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            <ul>
                <li>Facebook</li>
                <li>LinkedIn</li>
            </ul>
        </footer>
    );
};
