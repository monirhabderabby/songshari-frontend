// Configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { DatePicker } from "antd";
import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdLabelImportant } from "react-icons/md";

// Components
import logo from "../../../../assets/images/Logo/logoBlack.png";

// CSS
import { useNavigate } from "react-router";
import "../../../../App.css";
import { useSetPersonalDetailsMutation } from "../../../../Redux/features/userInfo/userApi";

export const GoogleSignUpInfo = () => {
    const [dateOfBirth, setDateOfBirth] = useState();
    const [dateOfBirthRequired, setDateOfBirthRequired] = useState(true);
    const navigate = useNavigate();

    // Redux API
    const [setPersonalDetails, { isSuccess, isLoading }] = useSetPersonalDetailsMutation();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    // function declaration
    const onDateOfBirthChange = (date, dateString) => {
        setDateOfBirth(dateString);
        setDateOfBirthRequired(false);
    };

    const profilePhotoHandler = e => {
        const photo = e.target.files[0];
        console.log(photo);
    };
    const onSubmit = async data => {
        data.dateOfBirth = dateOfBirth;
        data.profilePhoto = "";
        setPersonalDetails(data);
    };

    useEffect(() => {
        if (isSuccess) {
            navigate("/");
        }
    }, [isSuccess, navigate]);
    return (
        <section className="flex justify-center items-center w-full px-3 flex-1 text-center md:px-20 bg-gray-100 min-h-screen">
            <div className="bg-white rounded-2xl lg:shadow-2xl w-[100%] md:w-3/4 lg:w-2/3 max-w-4xl p-5">
                <img src={logo} alt="logo" className="w-[160px] lg:w-[200px]" />
                <div className="headline mt-[15px] flex items-start">
                    <MdLabelImportant className="text-[20px] gradient_text text-warning" />
                    <p className="font-Nunito ml-2 gradient_text text-[12px] lg:text-[14px] text-left">
                        Don't leave without filling up this information to continue with Shongsari!
                    </p>
                </div>

                {/* information getting form */}
                <form className="mt-[30px]" onSubmit={handleSubmit(onSubmit)}>
                    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {/* ---------- First Name ---------- */}
                        <section>
                            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                                <input
                                    {...register("firstName", {
                                        required: {
                                            value: true,
                                            message: "Last name is required",
                                        },
                                    })}
                                    type="text"
                                    placeholder="First name"
                                    className="flex-1 outline-none h-full bg-transparent text-[14px] text-gray-400"
                                    id="firstName"
                                />
                            </div>
                            <h1 className="text-left ml-2">
                                {errors.firstName?.type === "required" && (
                                    <span className="w-full text-left text-red-400 text-[14px]">{errors?.firstName.message}</span>
                                )}
                            </h1>
                        </section>

                        {/* ---------- Last Name ---------- */}
                        <section>
                            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                                <input
                                    {...register("lastName", {
                                        required: {
                                            value: true,
                                            message: "Last name is required",
                                        },
                                    })}
                                    type="text"
                                    placeholder="Last name"
                                    className="flex-1 outline-none h-full bg-transparent text-[14px] text-gray-400"
                                    id="lastName"
                                />
                            </div>
                            <h1 className="text-left ml-2">
                                {errors.lastName?.type === "required" && (
                                    <span className="w-full text-left text-red-400 text-[14px]">{errors?.lastName.message}</span>
                                )}
                            </h1>
                        </section>

                        {/* ---------- Date of Birth ---------- */}
                        <section>
                            <div className="flex items-center bg-gray-100  w-full rounded-lg mt-3 lg:mt-0">
                                <DatePicker
                                    {...register("dateOfBirth", {
                                        required: {
                                            value: dateOfBirthRequired,
                                            message: "Date of Birth is required",
                                        },
                                    })}
                                    placeholder="Date of Birth"
                                    className="flex-1 px-2 py-[9px] outline-none h-full bg-transparent text-[14px] text-gray-400"
                                    id="dateOfBirth"
                                    bordered={false}
                                    onChange={onDateOfBirthChange}
                                />
                            </div>
                            <h1 className="text-left ml-2">
                                {errors.dateOfBirth?.type === "required" && (
                                    <span className="w-full text-left text-red-400 text-[14px]">{errors?.dateOfBirth.message}</span>
                                )}
                            </h1>
                        </section>

                        {/* User Role */}
                        <section>
                            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                                <select
                                    {...register("role", {
                                        required: {
                                            value: true,
                                            message: "Answer is required",
                                        },
                                    })}
                                    type="text"
                                    className="flex-1 outline-none h-full bg-transparent text-[14px] text-gray-400"
                                    id="isParentsAlive"
                                >
                                    <option value="">You are?</option>
                                    <option value="member">Member</option>
                                    <option value="lawyer">Lawyer</option>
                                    <option value="agent">Agent</option>
                                    <option value="kazi">Kazi</option>
                                </select>
                            </div>
                            <h1 className="text-left ml-2">
                                {errors.role?.type === "required" && (
                                    <span className="w-full text-left text-red-400 text-[14px]">{errors?.role.message}</span>
                                )}
                            </h1>
                        </section>

                        {/* ---------- Profile Photo ---------- */}
                        <section>
                            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                                <AiOutlineCloudUpload className=" mr-2 text-gray-400" />
                                <label htmlFor="profilePhoto" className="outline-none h-full text-[14px] text-gray-400 bg-gray-100">
                                    Upload Profile Photo
                                </label>
                                <input
                                    {...register("profilePhoto", {
                                        required: {
                                            value: false,
                                            message: "Profile Photo is Required",
                                        },
                                    })}
                                    type="file"
                                    id="profilePhoto"
                                    className="hidden"
                                    onChange={profilePhotoHandler}
                                />
                            </div>
                            <h1 className="text-left ml-2">
                                {errors.profilePhoto?.type === "required" && (
                                    <span className="w-full text-left text-red-400 text-[14px]">{errors?.profilePhoto.message}</span>
                                )}
                            </h1>
                        </section>
                    </section>

                    <div className="flex items-center w-full justify-end gap-x-[20px] mt-[20px]">
                        <input
                            type="submit"
                            value={isLoading ? "wait..." : "Continue"}
                            className="cursor-pointer mt-3 bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]  rounded-[4px] px-8 py-2 text-white duration-500 transition-all"
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};
