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
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-4">
                        <div>
                            <ProfileCard />
                            <UtilitisCard />
                            <PhotoGelary />
                        </div>
                    </div>
                    <div className="md:col-span-5">
                        <div>
                            <Table />
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <div>
                            <ChartBoard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProfiles;
<h1>Helo</h1>;
