import React from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Radio, Space } from "antd";

export default function ProfessionalInfoForm({ professionalInfo, setProfessionalInfo }) {
    const filter = createFilterOptions()
    //Educational Qualifications Options
    const educationalInfoOptions = [{ title: "Ssc" }, { title: "Hsc" }, { title: "Hons" }, { title: "Masters" }];
    //Professional experience options
    const professionalStatusOptions = [{ title: "Teacher" }, { title: "Doctor" }, { title: "Student" }, { title: "Business" }];
    // ------- Professional Info -------------
    const handleUserProfessionChange = (event, newValue) => {
        if (typeof newValue === "string") {

            setProfessionalInfo({ ...professionalInfo, professionalStatus: newValue.title });
        } else if (newValue && newValue.inputValue) {

            setProfessionalInfo({ ...professionalInfo, professionalStatus: newValue.inputValue });
        } else {
            setProfessionalInfo({ ...professionalInfo, professionalStatus: newValue.title });
        }
    };

    const handleUserProfessionalExperienceChange = e => {
        setProfessionalInfo({ ...professionalInfo, professionalExperience: e.target.value });
    };
    const handleUserEducationalQualificationChange = (event, newValue) => {
        if (typeof newValue === "string") {

            setProfessionalInfo({ ...professionalInfo, educationalQualification: newValue?.title });
        } else if (newValue && newValue.inputValue) {

            setProfessionalInfo({ ...professionalInfo, educationalQualification: newValue.inputValue });
        } else {

            setProfessionalInfo({ ...professionalInfo, educationalQualification: newValue.title });
        }
    };
    return (
        <div>
            <div className="w-full">
                <h1 className="text-base leading-6 font-medium mb-2">Profession</h1>
                <Autocomplete
                    className="mb-4 p-0"
                    value={professionalInfo?.professionalStatus}
                    onChange={handleUserProfessionChange}
                    size="small"
                    filterOptions={(options, params) => {
                        const filtered = filter(options, params);

                        const { inputValue } = params;
                        // Suggest the creation of a new value
                        const isExisting = options.some(option => inputValue === option.title);
                        if (inputValue !== "" && !isExisting) {
                            filtered.push({
                                inputValue,
                                title: `Add "${inputValue}"`,
                            });
                        }

                        return filtered;
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="free-solo-with-text-demo"
                    options={professionalStatusOptions}
                    getOptionLabel={option => {
                        // Value selected with enter, right from the input
                        if (typeof option === "string") {
                            return option;
                        }
                        // Add "xxx" option created dynamically
                        if (option.inputValue) {
                            return option.inputValue;
                        }
                        // Regular option
                        return option.title;
                    }}
                    renderOption={(props, option) => <li {...props}>{option.title}</li>}
                    freeSolo
                    renderInput={params => <TextField {...params} placeholder="Profession" />}
                    sx={{
                        "input": {
                            height: 1,
                            padding: 0,
                        },
                    }}
                />
            </div>
            <div>
                <h1 className="text-base leading-6 font-medium mb-2">Professional Experience</h1>
                <Radio.Group
                    onChange={handleUserProfessionalExperienceChange}
                    value={professionalInfo?.professionalExperience}
                    className="mb-4"
                >
                    <Space direction="vertical">
                        <Radio value="Less Than 1 Year">Less Than 1 Year</Radio>
                        <Radio value="1-2 Years">1-2 Years</Radio>
                        <Radio value="2-3 Years">2-3 Years</Radio>
                        <Radio value="3-5 Years">3-5 Years</Radio>
                        <Radio value="5-10 Years">5-10 Years</Radio>
                        <Radio value="10-15 Years">10-15 Years </Radio>
                        <Radio value="15 Years+">15 Years+</Radio>
                    </Space>
                </Radio.Group>
            </div>
            <div>
                <h1 className="text-base leading-6 font-medium mb-2">Educational Qualification</h1>
                <Autocomplete
                    value={{ title: professionalInfo?.educationalQualification }}
                    className="w-full mb-4 p-0"
                    size="small"
                    sx={{
                        "input": {
                            height: 1,
                            padding: 0,
                        },
                    }}
                    onChange={handleUserEducationalQualificationChange}
                    filterOptions={(options, params) => {
                        const filtered = filter(options, params);

                        const { inputValue } = params;
                        // Suggest the creation of a new value
                        const isExisting = options.some(option => inputValue === option.title);
                        if (inputValue !== "" && !isExisting) {
                            filtered.push({
                                inputValue,
                                title: `Add "${inputValue}"`,
                            });
                        }

                        return filtered;
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="free-solo-with-text-demo"
                    options={educationalInfoOptions}
                    getOptionLabel={option => {
                        // Value selected with enter, right from the input
                        if (typeof option === "string") {
                            return option;
                        }
                        // Add "xxx" option created dynamically
                        if (option.inputValue) {
                            return option.inputValue;
                        }
                        // Regular option
                        return option.title;
                    }}
                    renderOption={(props, option) => <li {...props}>{option.title}</li>}
                    freeSolo
                    renderInput={params => <TextField {...params} placeholder="Educational Qualification" />}

                />
            </div>

            <div>
                <h1 className="text-base leading-6 font-medium mb-2">Monthly Income</h1>
                <Radio.Group onChange={e => setProfessionalInfo({ ...professionalInfo, monthlyIncome: e?.target.value })} value={professionalInfo?.monthlyIncome} className="mb-4">
                    <Space direction="vertical">
                        <Radio value={"Below 15,000 BDT"}>Below 15,000 BDT</Radio>
                        <Radio value={"15000-20000 BDT"}>15000-20000 BDT</Radio>
                        <Radio value={"20000-25000 BDT"}>20000-25000 BDT</Radio>
                        <Radio value={"25000-30000 BDT"}>25000-30000 BDT</Radio>
                        <Radio value={"30000-35000 BDT"}>30000-35000 BDT</Radio>
                        <Radio value={"35000-40000 BDT"}>35000-40000 BDT</Radio>
                        <Radio value={"45000-50000 BDT"}>45000-50000 BDT</Radio>
                        <Radio value={"50000-60000 BDT"}>50000-60000 BDT</Radio>
                        <Radio value={"60000-70000 BDT"}>60000-70000 BDT</Radio>
                        <Radio value={"70000-80000 BDT"}>70000-80000 BDT</Radio>
                        <Radio value={"80000-90000 BDT"}>80000-90000 BDT</Radio>
                        <Radio value={"90000-100000 BDT"}>90000-100000 BDT</Radio>
                        <Radio value={"100000-150000 BDT"}>100000-150000 BDT</Radio>
                        <Radio value={"150000-200000 BDT"}>150000-200000 BDT</Radio>
                        <Radio value={"200000-250000 BDT"}>200000-250000 BDT</Radio>
                        <Radio value={"300000+ BDT"}>300000+ BDT</Radio>
                    </Space>
                </Radio.Group>
            </div>
        </div>
    )
}
