import React from "react";
import "./Certificate.css";

import { useState } from "react";
/* import EducationalCertificate, {
    EducationalCertificateSidebar,
} from "../../../../../components/SingleProfilesUser/CertificateSection/EducationalCertificate";
import PersonalCertificate from "./PersonalCertificate";
import ProfessionalCertificate from "./ProfessionalCertificate"; */

export default function Certificate() {
    const [tabValue, setTabValue] = useState(1);
    // const [stepScale, setStepScale] = useState(1.0);
    const [selectedImage, setSelectedImage] = useState("");
    return (
        {/* <div className="flex justify-center items-center">
            <div className="max-w-[337px] p-2 ">
                <div className="flex ">
                    <div className="w-3/12">{tabValue === 1 && <EducationalCertificateSidebar setSelectedImage={setSelectedImage} />}</div>
                    <div className="ml-2 w-9/12">
                        <div className="p-2">
                            <div>
                                <h1 className="title">Certificate</h1>
                            </div>
                            <div className="flex justify-between">
                                <button
                                    className="p-1 font-bold btn-tab"
                                    style={
                                        tabValue === 1
                                            ? {
                                                background: "linear-gradient(106.79deg, #E52982 25.24%, #A72BC3 88.25%)",
                                                color: "#fff",
                                            }
                                            : {}
                                    }
                                    onClick={() => setTabValue(1)}
                                >
                                    Educational Certificate
                                </button>
                                <button
                                    className="p-1 font-bold btn-tab mx-2"
                                    style={
                                        tabValue === 2
                                            ? {
                                                background: "linear-gradient(106.79deg, #E52982 25.24%, #A72BC3 88.25%)",
                                                color: "#fff",
                                            }
                                            : {}
                                    }
                                    onClick={() => setTabValue(2)}
                                >
                                    Professional Certificate
                                </button>
                                <button
                                    className="p-1 font-bold btn-tab"
                                    style={
                                        tabValue === 3
                                            ? {
                                                background: "linear-gradient(106.79deg, #E52982 25.24%, #A72BC3 88.25%)",
                                                color: "#fff",
                                            }
                                            : {}
                                    }
                                    onClick={() => setTabValue(3)}
                                >
                                    Personal Certificate
                                </button>
                            </div>
                        </div>
                        <div>
                            {tabValue === 1 && <EducationalCertificate selectedImage={selectedImage} />}
                            {tabValue === 2 && <ProfessionalCertificate selectedImage={selectedImage} />}
                            {tabValue === 3 && <PersonalCertificate selectedImage={selectedImage} />}
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    );
}
