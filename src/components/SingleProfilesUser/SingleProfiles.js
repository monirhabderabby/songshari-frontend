import React from "react";
import ChartBoard from "./chatboard/ChartBoard";
import PhotoGelary from "./PhotoGelary";
import ProfileCard from "./ProfileCard";
import Table from "./Table/Table";
import UtilitisCard from "./UtilitisCard";

const SingleProfiles = () => {
    const fontFamly = () => {
        return (
            {
                fontFamily: 'Courier New, Courier, monospace',
            }
        )
    }
    return (
        <div style={fontFamly()}>
            <div className="container mx-auto">
                <div className="block lg:flex">
                    <div className="md:w-full lg:w-9/12">
                        <div>
                            <div className="block md:flex">
                                <div className="w-full md:w-2/5 mr-2">
                                    <div>
                                        <ProfileCard />
                                        <UtilitisCard />
                                        <PhotoGelary />
                                    </div>
                                </div>
                                <div className="w-full md:w-3/5">
                                    <div>
                                        <Table />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-full lg:w-3/12 ml-2">
                        <div className="flex justify-center">
                            <ChartBoard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProfiles;
