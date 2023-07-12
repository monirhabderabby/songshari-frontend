import React from "react";
import { LineWave } from "react-loader-spinner";

export const LineWaveLoader = ({ title }) => {
    return (
        <div className="w-full h-full min-h-[250px] flex-col flex justify-center items-center">
            <LineWave
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="line-wave"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                firstLineColor="#A52AC6"
                middleLineColor="#E41272"
                lastLineColor="#A52AC6"
                className="pl-4"
            />
            <span className="text-center text-[20px] text-gray-500">{title || "Loading..."}</span>
        </div>
    );
};
