// configuration
import React, { useCallback, useState } from "react";

// Third party packages
import { BsPlusCircleFill } from "react-icons/bs";
import { HiMinusCircle } from "react-icons/hi";

export const SelectedCertificateForMov = ({ selectedCertificate, selectedCertificateName }) => {
    // hook variable declaration
    const [zoom, setZoom] = useState(1);

    // functiom declarations
    const handleZoomIn = useCallback(() => {
        setZoom(zoom + 0.1);
    }, [zoom]);

    const handleZoomOut = useCallback(() => {
        setZoom(zoom - 0.1);
    }, [zoom]);
    return (
        <div className="mt-[6px] w-full bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.12)] rounded-[16px] h-[382px] overflow-hidden flex flex-col items-center justify-center">
            <div className="h-[335px] w-[326px] overflow-hidden">
                <img
                    style={{ transform: `scale(${zoom})` }}
                    src={selectedCertificate?.photo}
                    alt="certificate"
                    className={`h-full w-full rounded-[16px] mx-auto overflow-hidden`}
                />
            </div>
            <div className="h-[calc(382px-345px)] w-full flex items-center justify-center gap-x-[25px]">
                <BsPlusCircleFill className="text-[22px]" onClick={handleZoomIn} />
                <p className="text-[12px] font-fira text-[#000000]">{selectedCertificateName}</p>
                <HiMinusCircle className="text-[22px]" onClick={handleZoomOut} />
            </div>
        </div>
    );
};
