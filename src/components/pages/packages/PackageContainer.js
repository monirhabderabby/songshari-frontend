// import React from 'react';
import { useGetAllPackagesQuery } from "../../../Redux/features/package/packageApi";

// Configuration
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router";

// Components
import { useGetProfileDetailsWIthAuthQuery } from "../../../Redux/features/userInfo/userApi";
import { OvalLoader } from "../../shared/Cards/Loader/OvalLoader/OvalLoader";
import { PackageTestCard } from "../../shared/Cards/Packages/PackageTestCard";
import { ServerErrorMessage } from "../../ui/error/ServerErrorMessage";
import { SuccessSnackBar } from "../../ui/error/snackBar/SuccessSnackBar";

const PackageContainer = () => {
    const [packages, setPackages] = useState([]);
    const [successSnackBarOpen, setSuccessSnackBarOpen] = useState(false);
    // const navigate = useNavigate();
    const { data, isLoading, error } = useGetAllPackagesQuery();
    console.log(data);
    const { data: profile } = useGetProfileDetailsWIthAuthQuery();

    useEffect(() => {
        if (data) {
            const newPackages = [...data?.data?.packages].filter(item => item.category !== "complete-feature");
            setPackages([...newPackages].sort((a, b) => a.priceMonth - b.priceMonth));
        }
    }, [data]);

    return (
        <div className="max-w-[1200px] mx-auto mt-8">
            <h6 className="text-[#5650ce] text-center text-5xl font-semibold font-Inter mb-6">Special Packages For You</h6>

            {isLoading && (
                <div className="my-16">
                    <OvalLoader />
                </div>
            )}

            {error && (
                <div className="flex items-center justify-center my-16">
                    <ServerErrorMessage />
                </div>
            )}
            {packages.length !== 0 && (
                <div className="px-auto grid md:grid-cols-2 my-16 lg:grid-cols-3 gap-4">
                    {packages?.map((pack, i) => (
                        <PackageTestCard
                            pack={pack}
                            packages={packages}
                            index={i}
                            user={profile?._id}
                            setSuccessSnackBarOpen={setSuccessSnackBarOpen}
                        />
                    ))}
                </div>
            )}
            {packages?.length === 0 && data && <div className="text-center text-3xl font-bold text-gray-400 my-16">No Packages Found</div>}
            <SuccessSnackBar
                {...{
                    successSnackBarOpen,
                    setSuccessSnackBarOpen,
                    message: "Successful",
                }}
            />
        </div>
    );
};

export default PackageContainer;
