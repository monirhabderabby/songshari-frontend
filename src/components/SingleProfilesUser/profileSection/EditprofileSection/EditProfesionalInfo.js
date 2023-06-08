// Configuration
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

// Third party packages
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { DatePicker, message, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { decodeToken } from "react-jwt";

// Components
import getCookie from "../../../../Helper/cookies/getCookie";
import { usePhotosUploadOnServerMutation } from "../../../../Redux/features/fileUpload/fileUploadApi";
import { useUpdateProfessionalDetailsMutation } from "../../../../Redux/features/userInfo/userApi";
import ModifyCaseForm from "../../../Lawyer/LawyerModifyCaseForm/ModifyCaseForm";
const { RangePicker } = DatePicker;

const EditProfesionalInfo = () => {
    //success and error message co
    const [messageApi, contextHolder] = message.useMessage();
    const [viewport, setViewport] = useState("");
    // current position state
    const [currentPosition, setCurrentPosition] = useState(null);
    // institue state
    const [currentInstitute, setCurrentInstitute] = useState(null);
    const [professionalInfo, setProfessionalInfo] = useState({});
    const [professionalAchievementMoment, setProfessionalAchievementMoment] = useState("");
    const [achievementMomentName, setAchievementMomentName] = useState();
    const [completedCase, setCompletedCase] = useState(0);
    const [successfulCase, setSuccessfulCase] = useState(0);
    // const successRatio = completedCase / successfulCase || 0;
    const successRatio = successfulCase > 0 ? parseFloat((completedCase / successfulCase).toFixed(2)) : 0;
    const [updateProfessionalDetails, { isSuccess, isLoading, isError }] = useUpdateProfessionalDetailsMutation();
    const [uploadPhotoOnServer, { data: uploadedPhoto }] = usePhotosUploadOnServerMutation();

    const { handleSubmit } = useForm();

    const token = getCookie("token");
    const tokenInfo = decodeToken(token);

    const { role } = tokenInfo || {};

    // current position state handler
    const handleCurrentPosition = (event, newValue) => {
        if (typeof newValue === "string") {
            setCurrentPosition({
                title: newValue,
            });
        } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setCurrentPosition({
                title: newValue.inputValue,
            });
        } else {
            setCurrentPosition(newValue);
        }
    };
    // current institute handler function
    const handleCurrentInstitute = (event, newValue) => {
        if (typeof newValue === "string") {
            setCurrentInstitute({
                title: newValue,
            });
        } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setCurrentInstitute({
                title: newValue.inputValue,
            });
        } else {
            setCurrentInstitute(newValue);
        }
    };
    // working period data handler
    const handleWorkingPeriod = (date, dateString) => {
        setProfessionalInfo({ ...professionalInfo, workingPeriod: dateString });
    };
    // handle achivements data chane
    const handleAchivements = e => {
        setProfessionalInfo({
            ...professionalInfo,
            specialAchievement: e?.target.value,
        });
    };
    // handle duty data change
    const handleDuty = e => {
        setProfessionalInfo({ ...professionalInfo, duty: e.target.value });
    };
    // current position options (MUI Autocomplete)
    const currentPositionOptions = [{ title: "Developer" }, { title: "Hr" }, { title: "Accountant" }, { title: "Office assistant" }];
    // current institute option (MUI Autocomplete)
    const currentInstituteOptions = [{ title: "Developer company" }, { title: "ItCO " }, { title: "Microsoft" }, { title: "Google" }];
    const { id } = useParams();
    const navigate = useNavigate();
    //data submission
    const onSubmit = async () => {
        const data = {
            ...professionalInfo,
        };
        if (currentInstitute) {
            data.institute = currentInstitute?.title;
        }
        if (currentPosition) {
            data.position = currentPosition?.title;
        }
        if (professionalAchievementMoment !== "") {
            data.certificates = { photo: professionalAchievementMoment };
        }
        if (completedCase > 0) {
            data.completedCase = completedCase;
        }
        if (successfulCase > 0) {
            data.successfulCase = successfulCase;
        }
        if (successRatio > 0) {
            data.successRatio = successRatio;
        }

        await updateProfessionalDetails({ data, id });
    };

    const specialAchievementMomentHandler = async e => {
        const photo = e.target.files[0];
        setAchievementMomentName(photo?.name);
        if (photo) {
            const formData = new FormData();
            formData.append("image", photo);
            uploadPhotoOnServer(formData);
        }
    };

    useEffect(() => {
        if (uploadedPhoto?.data) setProfessionalAchievementMoment(uploadedPhoto?.data[0]?.path);
    }, [uploadedPhoto]);

    const completedCaseDecreaseHandler = () => {
        if (completedCase > 0) {
            setCompletedCase(prevCount => prevCount - 1);
        }
    };

    const completedCaseIncreaseHandler = () => {
        setCompletedCase(prevCount => prevCount + 1);
    };

    const successfulCaseDecreaseHandler = () => {
        if (successfulCase > 0) {
            setSuccessfulCase(prevCount => prevCount - 1);
        }
    };

    const successfulCaseIncreaseHandler = () => {
        setSuccessfulCase(prevCount => prevCount + 1);
    };

    // know the current viewport

    const handleResize = () => {
        const { innerWidth } = window;

        if (innerWidth < 768) {
            setViewport("mobile");
        } else if (innerWidth >= 768 && innerWidth < 1024) {
            setViewport("tablet");
        } else {
            setViewport("desktop");
        }
    };

    useEffect(() => {
        handleResize(); // Initial check when component mounts

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const key = "updated";
        if (isLoading) {
            messageApi.open({
                key,
                type: "loading",
                content: "Loading...",
            });
        }

        if (isSuccess) {
            messageApi.open({
                key,
                type: "success",
                content: "Data updated succesfully",
                duration: 2,
            });
        }

        if (isError) {
            messageApi.open({
                key,
                type: "error",
                content: "Server error! try again!!",
            });
        }
        if (!isLoading && !isError && isSuccess) {
            setTimeout(() => {
                if (viewport === "mobile" || viewport === "tablet") {
                    navigate("/mobileuserprofile");
                } else if (viewport === "desktop") {
                    navigate("/userprofile");
                }
            }, 2000);
        }
    }, [isSuccess, isLoading, isError, messageApi, navigate, viewport]);
    // filter for mui autocomplete
    const filter = createFilterOptions();

    // Modal handler for lawyer
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <div className="max-w-[523px] mx-auto bg-white drop-shadow-lg px-4 py-6 mb-4 rounded">
            <div className="flex justify-end mb-3">
                <MdCancel onClick={() => navigate(-1)} className="cursor-pointer text-3xl text-slate-600" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="pb-4">
                    <div className="flex flex-col md:flex-row justify-between">
                        {/* Position */}
                        <div>
                            <label className="text-sm block pb-2 text-slate-600	  font-medium">Position</label>
                            <Autocomplete
                                className="mb-2 w-56"
                                value={currentPosition}
                                onChange={handleCurrentPosition}
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
                                options={currentPositionOptions}
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
                                renderInput={params => <TextField {...params} placeholder="Select Position" />}
                                sx={{
                                    "& input": {
                                        height: 6,
                                        padding: 0,
                                    },
                                }}
                            />
                        </div>
                        {/* Institute */}
                        <div>
                            <label className="text-sm block pb-2 text-slate-600	  font-medium">Institute</label>
                            <Autocomplete
                                className="mb-2 w-56"
                                value={currentInstitute}
                                onChange={handleCurrentInstitute}
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
                                options={currentInstituteOptions}
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
                                renderInput={params => <TextField {...params} placeholder="Select Institute" />}
                                sx={{
                                    "& input": {
                                        height: 6,
                                        padding: 0,
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
                {/* duty */}
                <div className="pb-4">
                    <div>
                        <label htmlFor="nid" className="text-sm block pb-2 text-slate-600 font-medium">
                            Duty
                        </label>
                        <TextArea rows={4} placeholder="Text Here" onChange={handleDuty} />
                    </div>
                </div>
                {/* Working period */}
                <div className="pb-4">
                    <div>
                        <label htmlFor="nid" className="text-sm block pb-2 text-slate-600	  font-medium">
                            Working Period
                        </label>
                        <RangePicker className="w-full" onChange={handleWorkingPeriod} />
                    </div>
                </div>
                {/* Special achievement */}
                <div className="pb-4">
                    <div>
                        <label htmlFor="nid" className="text-sm block pb-2 text-slate-600 font-medium">
                            Special Achievements
                        </label>
                        <TextArea rows={4} placeholder="Text Here" name="achivements" onChange={handleAchivements} />
                    </div>
                </div>
                {/* ---------- Professional Achievement moment ---------- */}
                <section>
                    <label className="text-sm block pb-2 text-slate-600 font-medium">
                        Profession Proof Certificate(ID Card/Employment Certificate)
                    </label>
                    <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0 mb-4">
                        <AiOutlineCloudUpload className=" mr-2 text-gray-400" />
                        <label htmlFor="certificates" className="outline-none h-full text-sm text-gray-400 bg-gray-100">
                            {professionalAchievementMoment ? (
                                <>
                                    <span className="text-green-400">{achievementMomentName ? achievementMomentName : "File added"}</span>
                                </>
                            ) : (
                                "Upload File"
                            )}
                        </label>
                        <input name="certificates" type="file" id="certificates" className="hidden" onChange={specialAchievementMomentHandler} />
                    </div>
                </section>

                {/* Case completed */}
                {role !== "member" && (
                    <div>
                        <h1 className="text-sm leading-6 text-slate-600 font-medium mb-2">Case Completed</h1>
                        <div className="flex justify-start items-center mb-4">
                            <p
                                onClick={completedCaseDecreaseHandler}
                                className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-l-lg cursor-pointer"
                            >
                                -
                            </p>
                            <div className="text-base text-center leading-6 font-medium w-24 py-2 bg-gray-200">{completedCase}</div>
                            <p
                                onClick={completedCaseIncreaseHandler}
                                className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-r-lg cursor-pointer"
                            >
                                +
                            </p>
                        </div>
                    </div>
                )}

                {/* Successful Case */}
                {role !== "member" && (
                    <div>
                        <h1 className="text-sm leading-6 text-slate-600 font-medium mb-2">Successful Case</h1>
                        <div className="flex justify-start items-center mb-4">
                            <p
                                onClick={successfulCaseDecreaseHandler}
                                className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-l-lg cursor-pointer"
                            >
                                -
                            </p>
                            <div className="text-base text-center leading-6 font-medium w-24 py-2 bg-gray-200">{successfulCase}</div>
                            <p
                                onClick={successfulCaseIncreaseHandler}
                                className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-r-lg cursor-pointer"
                            >
                                +
                            </p>
                        </div>
                    </div>
                )}

                {/* Success Ratio */}
                {role !== "member" && (
                    <div>
                        <h1 className="text-sm leading-6 text-slate-600 font-medium mb-2">Success Ratio</h1>
                        <div className="flex justify-start items-center mb-4">
                            <div className="text-base text-center leading-6 font-medium w-24 py-2 bg-gray-200">{successRatio}</div>
                        </div>
                    </div>
                )}

                {/* Add case study button */}
                {role !== "member" && (
                    <p
                        onClick={showModal}
                        className="w-[144px] cursor-pointer text-center py-2 text-[#fff] text-base font-medium rounded bg-[linear-gradient(180deg,#E41272_0%,#942DD9_100%)] mt-2 mb-6"
                    >
                        {role === "lawyer" && "Add Case Study"}
                        {role === "agent" && "Add Deal Status"}
                        {role === "kazi" && "Add Deal Status"}
                    </p>
                )}

                <div>
                    <input
                        type="submit"
                        value="Save"
                        style={{
                            background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                        }}
                        className="w-full text-center py-[10px] text-[#fff]  text-lg font-medium rounded cursor-pointer"
                    />

                    <div className="mt-2">{contextHolder}</div>
                </div>
            </form>

            {/* Case study form modal */}
            <Modal open={visible} onOk={handleOk} onCancel={handleCancel} footer={null} width={840}>
                <ModifyCaseForm {...{ role }} />
            </Modal>
        </div>
    );
};

export default EditProfesionalInfo;
