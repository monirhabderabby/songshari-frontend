import { Select, Slider } from "antd";
import React from "react";
import BasicInfoForm from "./BasicInfoForm";

export default function OthersInfoForm({ othersInfo, setOthersInfo }) {
    // --------- Others Information ------------
    const onHeightChange = value => {
        setOthersInfo({ ...othersInfo, height: value });
    };
    const onWeightChange = value => {
        setOthersInfo({ ...othersInfo, weight: value });
    };
    const handleUserAncestryChange = value => {
        setOthersInfo({ ...othersInfo, ancestry: value });
    };
    const handleUserSkinToneChange = value => {
        setOthersInfo({ ...othersInfo, skinTone: value });
    };
    const handleUserHairColorChange = value => {
        setOthersInfo({ ...othersInfo, hairColor: value });
    };
    const handleUserHairTypeChange = value => {
        setOthersInfo({ ...othersInfo, hairType: value });
    };
    const handleUserEyeColorChange = value => {
        setOthersInfo({ ...othersInfo, eyeColor: value });
    };
    const handleNumberOfTeeth = value => {
        setOthersInfo({ ...othersInfo, numberOfTeeth: value });
    };
    return (
        <div className="w-full">
            <div>
                <h1 className="text-base leading-6 font-medium mb-2">Height</h1>
                <p className="text-left text-base font-medium">
                    {" "}
                    {othersInfo?.height[0]}' - {othersInfo?.height[1]}'{" "}
                </p>
                <Slider
                    range={{ draggableTrack: true }}
                    defaultValue={othersInfo.height}
                    step={0.01}
                    min={0}
                    max={10}
                    onChange={onHeightChange}
                    className="mb-4"
                />
            </div>
            <div>
                <h1 className="text-base leading-6 font-medium mb-2">Weight</h1>
                <p className="text-left text-base font-medium">
                    {" "}
                    {othersInfo?.weight[0]} Kg - {othersInfo?.weight[1]} Kg{" "}
                </p>
                <Slider
                    range={{ draggableTrack: true }}
                    defaultValue={BasicInfoForm.weight}
                    step={1}
                    min={0}
                    max={150}
                    onChange={onWeightChange}
                    className="mb-4"
                />
            </div>
            <div>
                <h1 className="text-base leading-6 font-medium mb-2">Ancestry</h1>
                <Select
                    className="w-full mb-4"
                    onChange={handleUserAncestryChange}
                    placeholder="Select Ancestry"
                    options={[
                        {
                            value: "option",
                            label: "Option",
                        },
                        {
                            value: "options",
                            label: "Options",
                        },
                    ]}
                />
            </div>
            <div>
                <h1 className="text-base leading-6 font-medium mb-2">Skin Tone</h1>
                <Select
                    className="w-full mb-4"
                    onChange={handleUserSkinToneChange}
                    placeholder="Select skin tone"
                    mode="multiple"
                    allowClear
                    options={[
                        {
                            value: "light",
                            label: "Light",
                        },
                        {
                            value: "fair",
                            label: "Fair",
                        },
                        {
                            value: "medium",
                            label: "Medium",
                        },
                        {
                            value: "deep",
                            label: "Deep (Dark)",
                        },
                    ]}
                />
            </div>
            <div>
                <h1 className="text-base leading-6 font-medium mb-2">Hair Color</h1>
                <Select
                    className="w-full mb-4"
                    onChange={handleUserHairColorChange}
                    placeholder="Select hair color"
                    mode="multiple"
                    allowClear
                    options={[
                        {
                            value: "black",
                            label: "Black",
                        },
                        {
                            value: "brown",
                            label: "Brown",
                        },
                        {
                            value: "blond",
                            label: "Blond",
                        },
                        {
                            value: "white",
                            label: "White",
                        },
                        {
                            value: "gray",
                            label: "Gray",
                        },
                        {
                            value: "rarely red",
                            label: "Rarely Red",
                        },
                    ]}
                />
            </div>
            <div>
                <h1 className="text-base leading-6 font-medium mb-2">Hair Type</h1>
                <Select
                    className="w-full mb-4"
                    onChange={handleUserHairTypeChange}
                    placeholder="Select hair type"
                    mode="multiple"
                    allowClear
                    options={[
                        {
                            value: "fine",
                            label: "Fine",
                        },
                        {
                            value: "thick",
                            label: "Thick",
                        },
                        {
                            value: "long",
                            label: "Long",
                        },
                        {
                            value: "short",
                            label: "Short",
                        },
                        {
                            value: "matte",
                            label: "Matte",
                        },
                        {
                            value: "glossy",
                            label: "Glossy",
                        },
                        {
                            value: "curly",
                            label: "Curly",
                        },
                        {
                            value: "coily",
                            label: "Coily",
                        },
                        {
                            value: "straight",
                            label: "Straight",
                        },
                        {
                            value: "wavy",
                            label: "Wavy",
                        },
                    ]}
                />
            </div>
            <div>
                <h1 className="text-base leading-6 font-medium mb-2">Eye Color</h1>
                <Select
                    className="w-full mb-4"
                    onChange={handleUserEyeColorChange}
                    placeholder="Select hair type"
                    mode="multiple"
                    allowClear
                    options={[
                        {
                            value: "brown",
                            label: "Brown",
                        },
                        {
                            value: "hazel",
                            label: "Hazel",
                        },
                        {
                            value: "blue",
                            label: "Blue",
                        },
                        {
                            value: "green",
                            label: "Green",
                        },
                        {
                            value: "gray",
                            label: "Gray",
                        },
                        {
                            value: "amber",
                            label: "Amber",
                        },
                    ]}
                />
            </div>
            <div>
                <h1 className="text-base leading-6 font-medium mb-2">Number of Teeth</h1>
                <Select
                    className="w-full mb-2"
                    onChange={handleNumberOfTeeth}
                    placeholder="Select teeth number"
                    mode="multiple"
                    allowClear
                    options={[
                        {
                            value: "20",
                            label: "20",
                        },
                        {
                            value: "21",
                            label: "21",
                        },
                        {
                            value: "22",
                            label: "22",
                        },
                        {
                            value: "23",
                            label: "23",
                        },
                        {
                            value: "24",
                            label: "24",
                        },
                        {
                            value: "25",
                            label: "25",
                        },
                        {
                            value: "26",
                            label: "26",
                        },
                        {
                            value: "27",
                            label: "27",
                        },
                        {
                            value: "28",
                            label: "28",
                        },
                        {
                            value: "29",
                            label: "29",
                        },
                        {
                            value: "30",
                            label: "30",
                        },
                        {
                            value: "31",
                            label: "31",
                        },
                        {
                            value: "32",
                            label: "32",
                        },
                    ]}
                />
            </div>
        </div>
    );
}
