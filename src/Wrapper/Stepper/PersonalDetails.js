import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload, AiOutlineIdcard } from "react-icons/ai";

export const PersonalDetails = ({ setPage }) => {
    const [photoURL, setPhotoUrl] = useState("");
    const [meritalStatus, setMeritalStatus] = useState("");

    if (meritalStatus) {
        console.log(meritalStatus);
    }
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = data => {
        const hightestEducationalQualification = {
            ...data.degreeName,
            ...data.institute,
            ...data.Department,
            ...data.fieldOfStudy,
            ...data.yearOfPassing,
            ...data.specialAchievement,
        };
        // delete data.degreeName,
        //     delete data.institute,
        //     delete data.Department,
        //     delete data.fieldOfStudy,
        //     delete data.yearOfPassing,
        //     delete data.specialAchievement;
        data = { ...data, hightestEducationalQualification };
        console.log(hightestEducationalQualification);
        console.log(data);
        setPage(2);
    };

    const photoHandler = async e => {
        const photo = e.target.files[0];
        console.log(photo);
    };

    return (
        <div className="w-full h-auto">
            {/* ---------- Header ---------- */}
            <section className="col-span-1 md:col-span-2 lg:col-span-3 text-2xl text-[#2F3659] mb-4">
                <p>Personal Information Form</p>
                <hr className="w-1/2 mt-2 mx-auto" />
            </section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section className="md:w-full w-64 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
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
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="firstName"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.firstName?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.firstName.message}</span>
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
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="lastName"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.lastName?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.lastName.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Designation ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("designation", {
                                    required: {
                                        value: true,
                                        message: "Designation is required",
                                    },
                                })}
                                type="text"
                                placeholder="Designation"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="designation"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.designation?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.designation.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Date of Birth ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("dateOfBirth", {
                                    required: {
                                        value: true,
                                        message: "Date of birth is required",
                                    },
                                })}
                                type="date"
                                placeholder="Date of Birth"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="dateOfBirth"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.dateOfBirth?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.dateOfBirth.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Hometown ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("hometown", {
                                    required: {
                                        value: true,
                                        message: "Hometown is required",
                                    },
                                })}
                                type="text"
                                placeholder="Hometown"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="hometown"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.hometown?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.hometown.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Permanent Address ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("permanentAdress", {
                                    required: {
                                        value: true,
                                        message: "Permanent Address is required",
                                    },
                                })}
                                type="text"
                                placeholder="Permanent Address"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="permanentAdress"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.permanentAdress?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.permanentAdress.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Current Address ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("currentAdress", {
                                    required: {
                                        value: true,
                                        message: "Current Address is required",
                                    },
                                })}
                                type="text"
                                placeholder="Current Address"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="currentAdress"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.currentAdress?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.currentAdress.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Profile Photo ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <AiOutlineCloudUpload className=" mr-2 text-gray-400" />
                            <label htmlFor="profilePhoto" className="outline-none h-full text-sm text-gray-400 bg-gray-100">
                                {photoURL ? (
                                    <>
                                        <span className="text-green-400">Photo added</span>
                                    </>
                                ) : (
                                    "Upload Profile Photo"
                                )}
                            </label>
                            <input
                                {...register("profilePhoto", {
                                    required: {
                                        value: true,
                                        message: "Profile Photo is Required",
                                    },
                                })}
                                type="file"
                                id="profilePhoto"
                                className="hidden"
                                onChange={photoHandler}
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.profilePhoto?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.profilePhoto.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Cover Photo ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <AiOutlineCloudUpload className=" mr-2 text-gray-400" />
                            <label htmlFor="coverPhoto" className="outline-none h-full text-sm text-gray-400 bg-gray-100">
                                {photoURL ? (
                                    <>
                                        <span className="text-green-400">Photo added</span>
                                    </>
                                ) : (
                                    "Upload Cover Photo"
                                )}
                            </label>
                            <input
                                {...register("coverPhoto", {
                                    required: {
                                        value: true,
                                        message: "Cover Photo is Required",
                                    },
                                })}
                                type="file"
                                id="coverPhoto"
                                className="hidden"
                                onChange={photoHandler}
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.coverPhoto?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.coverPhoto.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Nid or Passport Number ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("NidOrPassportNumber", {
                                    required: {
                                        value: true,
                                        message: "Nid Or Passport Number is required",
                                    },
                                })}
                                type="text"
                                placeholder="Nid Or Passport Number"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="NidOrPassportNumber"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.NidOrPassportNumber?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.NidOrPassportNumber.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Nid front side photo ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <AiOutlineIdcard className=" mr-2 text-gray-400" />
                            <label htmlFor="frontSide" className="outline-none h-full text-sm text-gray-400 bg-gray-100">
                                {photoURL ? (
                                    <>
                                        <span className="text-green-400">Photo added</span>
                                    </>
                                ) : (
                                    "Nid Or Passport Front side Photo"
                                )}
                            </label>
                            <input
                                {...register("frontSide", {
                                    required: {
                                        value: true,
                                        message: "Nid Or Passport Front side Photo is Required",
                                    },
                                })}
                                type="file"
                                id="frontSide"
                                className="hidden"
                                onChange={photoHandler}
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.frontSide?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.frontSide.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Nid Or Passport Back side Photo ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <AiOutlineIdcard className="mr-2 text-gray-400" />
                            <label htmlFor="backSide" className="outline-none h-full text-sm text-gray-400 bg-gray-100">
                                {photoURL ? (
                                    <>
                                        <span className="text-green-400">Photo added</span>
                                    </>
                                ) : (
                                    "Nid Or Passport Back side Photo"
                                )}
                            </label>
                            <input
                                {...register("backSide", {
                                    required: {
                                        value: true,
                                        message: "Nid Or Passport Back side Photo is Required",
                                    },
                                })}
                                type="file"
                                id="backSide"
                                className="hidden"
                                onChange={photoHandler}
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.backSide?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.backSide.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Citizenship ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("citizenShip", {
                                    required: {
                                        value: true,
                                        message: "Citizenship is required",
                                    },
                                })}
                                type="text"
                                placeholder="Citizenship"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="citizenShip"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.citizenShip?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.citizenShip.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Zodiac Sign ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("zodiacSign", {
                                    required: {
                                        value: true,
                                        message: "Zodiac Sign is required",
                                    },
                                })}
                                type="text"
                                placeholder="Zodiac Sign"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="zodiacSign"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.zodiacSign?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.zodiacSign.message}</span>
                            )}
                        </h1>
                    </section>

                    {/* ---------- Marital info ---------- */}
                    <section className="col-span-1 md:col-span-2 lg:col-span-3 text-[#2F3659] font-medium text-left ml-1">Marital Info</section>
                    {/* ---------- Marital Status ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <select
                                {...register("maritalStatus", {
                                    required: {
                                        value: true,
                                        message: "Marital Status is required",
                                    },
                                })}
                                type="text"
                                onChange={e => setMeritalStatus(e.target.value)}
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="maritalStatus"
                            >
                                <option value="">Select Marital Status</option>
                                <option value="married">Married</option>
                                <option value="single">Single</option>
                                <option value="divorced">Divorced</option>
                                <option value="widowed">Widowed</option>
                            </select>
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.maritalStatus?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.maritalStatus.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Number Of Partner ---------- */}
                    {meritalStatus === "married" && (
                        <section>
                            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                                <input
                                    {...register("numberOfPartner", {
                                        required: {
                                            value: true,
                                            message: "Number of partner is required",
                                        },
                                    })}
                                    type="number"
                                    placeholder="Number of Partner"
                                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                    id="numberOfPartner"
                                />
                            </div>
                            <h1 className="text-left ml-2">
                                {errors.numberOfPartner?.type === "required" && (
                                    <span className="w-full text-left text-red-400 text-sm">{errors?.numberOfPartner.message}</span>
                                )}
                            </h1>
                        </section>
                    )}
                    {/* ---------- Reason of Marriage ---------- */}
                    {meritalStatus === "married" && (
                        <section>
                            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                                <input
                                    {...register("reasonOfMarriage", {
                                        required: {
                                            value: true,
                                            message: "Reason of Marriage is required",
                                        },
                                    })}
                                    type="text"
                                    placeholder="Reason of Marriage"
                                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                    id="reasonOfMarriage"
                                />
                            </div>
                            <h1 className="text-left ml-2">
                                {errors.reasonOfMarriage?.type === "required" && (
                                    <span className="w-full text-left text-red-400 text-sm">{errors?.reasonOfMarriage.message}</span>
                                )}
                            </h1>
                        </section>
                    )}
                    {/* ---------- Is partner aware of marriage ---------- */}
                    {meritalStatus === "married" && (
                        <section>
                            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                                <select
                                    {...register("isPartnerAwarOfMarriage", {
                                        required: {
                                            value: true,
                                            message: "Answer is required",
                                        },
                                    })}
                                    type="text"
                                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                    id="isPartnerAwarOfMarriage"
                                >
                                    <option value="">Is partner aware of marriage?</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <h1 className="text-left ml-2">
                                {errors.isPartnerAwarOfMarriage?.type === "required" && (
                                    <span className="w-full text-left text-red-400 text-sm">{errors?.isPartnerAwarOfMarriage.message}</span>
                                )}
                            </h1>
                        </section>
                    )}
                    {/* ---------- Date of Marriage ---------- */}
                    {meritalStatus === "married" && (
                        <section>
                            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                                <input
                                    {...register("marriageDate", {
                                        required: {
                                            value: true,
                                            message: "Date of Marriage is required",
                                        },
                                    })}
                                    type="date"
                                    placeholder="Date of Marriage"
                                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                    id="marriageDate"
                                />
                            </div>
                            <h1 className="text-left ml-2">
                                {errors.marriageDate?.type === "required" && (
                                    <span className="w-full text-left text-red-400 text-sm">{errors?.marriageDate.message}</span>
                                )}
                            </h1>
                        </section>
                    )}
                    {/* ---------- Reason of Divorce ---------- */}
                    {meritalStatus === "divorced" && (
                        <section>
                            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                                <input
                                    {...register("reasonOfDivorce", {
                                        required: {
                                            value: true,
                                            message: "Reason of Divorce is required",
                                        },
                                    })}
                                    type="text"
                                    placeholder="Reason of Divorce"
                                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                    id="reasonOfDivorce"
                                />
                            </div>
                            <h1 className="text-left ml-2">
                                {errors.reasonOfDivorce?.type === "required" && (
                                    <span className="w-full text-left text-red-400 text-sm">{errors?.reasonOfDivorce.message}</span>
                                )}
                            </h1>
                        </section>
                    )}
                    {/* ---------- Date of Divorce ---------- */}
                    {meritalStatus === "divorced" && (
                        <section>
                            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                                <input
                                    {...register("dicorceDate", {
                                        required: {
                                            value: true,
                                            message: "Date of Divorce is required",
                                        },
                                    })}
                                    type="date"
                                    placeholder="Date of Divorce"
                                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                    id="dicorceDate"
                                />
                            </div>
                            <h1 className="text-left ml-2">
                                {errors.dicorceDate?.type === "required" && (
                                    <span className="w-full text-left text-red-400 text-sm">{errors?.dicorceDate.message}</span>
                                )}
                            </h1>
                        </section>
                    )}
                    {/* ---------- Number Of Boy ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("numberOfBoy", {
                                    required: {
                                        value: true,
                                        message: "Number of Boy is required",
                                    },
                                })}
                                type="number"
                                placeholder="Number of Boy"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="numberOfBoy"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.numberOfBoy?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.numberOfBoy.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Ages Of Boy ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("agesOfBoy", {
                                    required: {
                                        value: true,
                                        message: "Ages of boy is required",
                                    },
                                })}
                                type="number"
                                placeholder="Ages of Boy"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="agesOfBoy"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.agesOfBoy?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.agesOfBoy.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Number Of Girl ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("numberOfGirl", {
                                    required: {
                                        value: true,
                                        message: "Number of Girl is required",
                                    },
                                })}
                                type="number"
                                placeholder="Number of Girl"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="numberOfGirl"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.numberOfGirl?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.numberOfGirl.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Ages Of Girl ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("agesOfGirl", {
                                    required: {
                                        value: true,
                                        message: "Ages of Girl is required",
                                    },
                                })}
                                type="number"
                                placeholder="Ages of Girl"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="agesOfGirl"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.agesOfGirl?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.agesOfGirl.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Partner death date ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("partnerDeathDay", {
                                    required: {
                                        value: true,
                                        message: "Partner Death Date is required",
                                    },
                                })}
                                type="date"
                                placeholder="Partner Death Date"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="partnerDeathDay"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.partnerDeathDay?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.partnerDeathDay.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ------------------------ Current profession field start ------------------------ */}

                    {/* ---------- Current Profession info ---------- */}
                    <section className="col-span-1 md:col-span-2 lg:col-span-3 text-[#2F3659] font-medium text-left ml-1">
                        Current Profession Info
                    </section>
                    {/* ---------- Position ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("position", {
                                    required: {
                                        value: true,
                                        message: "Position is required",
                                    },
                                })}
                                type="text"
                                placeholder="Position"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="position"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.position?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.position.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Institution ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("institute", {
                                    required: {
                                        value: true,
                                        message: "Institution is required",
                                    },
                                })}
                                type="text"
                                placeholder="Institution"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="institute"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.institute?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.institute.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Work Period ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("workPeriod", {
                                    required: {
                                        value: true,
                                        message: "Work Period is required",
                                    },
                                })}
                                type="text"
                                placeholder="Work Period"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="workPeriod"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.workPeriod?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.workPeriod.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Special Achievement ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("specialAchievement", {
                                    required: {
                                        value: true,
                                        message: "Special Achievement is required",
                                    },
                                })}
                                type="text"
                                placeholder="Special Achievement"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="specialAchievement"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.specialAchievement?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.specialAchievement.message}</span>
                            )}
                        </h1>
                    </section>

                    {/* ------------------------ Current profession field end ------------------------ */}

                    {/* ---------------------- Highest education qualification start --------------------- */}

                    {/* ---------- Education info ---------- */}
                    <section className="col-span-1 md:col-span-2 lg:col-span-3 text-[#2F3659] font-medium text-left ml-1">Education Info</section>
                    {/* ---------- Degree Name ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("degreeName", {
                                    required: {
                                        value: true,
                                        message: "Degree Name is required",
                                    },
                                })}
                                type="text"
                                placeholder="Degree Name"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="degreeName"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.degreeName?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.degreeName.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Institution ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("institute", {
                                    required: {
                                        value: true,
                                        message: "Institution is required",
                                    },
                                })}
                                type="text"
                                placeholder="Institution"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="institute"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.institute?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.institute.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Department Name ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("Department", {
                                    required: {
                                        value: true,
                                        message: "Department Name is required",
                                    },
                                })}
                                type="text"
                                placeholder="Department Name"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="Department"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.Department?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.Department.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Field of Study ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("fieldOfStudy", {
                                    required: {
                                        value: true,
                                        message: "Field of Study is required",
                                    },
                                })}
                                type="text"
                                placeholder="Field of Study"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="fieldOfStudy"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.fieldOfStudy?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.fieldOfStudy.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Year of Passing ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("yearOfPassing", {
                                    required: {
                                        value: true,
                                        message: "Year of Passing is required",
                                    },
                                })}
                                type="date"
                                placeholder="Year of Passing"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="yearOfPassing"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.yearOfPassing?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.yearOfPassing.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Special Achievement ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("specialAchievement", {
                                    required: {
                                        value: true,
                                        message: "Special Achievement is required",
                                    },
                                })}
                                type="text"
                                placeholder="Special Achievement"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="specialAchievement"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.specialAchievement?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.specialAchievement.message}</span>
                            )}
                        </h1>
                    </section>

                    {/* --------------------- Highest education qualification end ---------------------- */}

                    {/* ---------- Physical info ---------- */}
                    <section className="col-span-1 md:col-span-2 lg:col-span-3 text-[#2F3659] font-medium text-left ml-1">Physical Info</section>
                    {/* ---------- Height ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("height", {
                                    required: {
                                        value: true,
                                        message: "Height is required",
                                    },
                                })}
                                type="text"
                                placeholder="Height"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="height"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.height?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.height.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Weight ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("weight", {
                                    required: {
                                        value: true,
                                        message: "Weight is required",
                                    },
                                })}
                                type="text"
                                placeholder="Weight"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="weight"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.weight?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.weight.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Ancestry ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("ancestry", {
                                    required: {
                                        value: true,
                                        message: "Ancestry is required",
                                    },
                                })}
                                type="text"
                                placeholder="Ancestry"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="ancestry"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.ancestry?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.ancestry.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Skin Tone ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("SkinTone")}
                                type="text"
                                placeholder="Skin Tone"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="SkinTone"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.SkinTone?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.SkinTone.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Hair Color ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("hairColour")}
                                type="text"
                                placeholder="Hair Color"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="hairColour"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.hairColour?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.hairColour.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Hair Type ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("hairType")}
                                type="text"
                                placeholder="Hair Type"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="hairType"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.hairType?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.hairType.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Eye Color ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("eyeColor")}
                                type="text"
                                placeholder="Eye Color"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="eyeColor"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.eyeColor?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.eyeColor.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Number of Teeth ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("numberOfTeeth")}
                                type="number"
                                placeholder="Number of Teeth"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="numberOfTeeth"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.numberOfTeeth?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.numberOfTeeth.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Parents Status Info Start ---------- */}
                    <section className="col-span-1 md:col-span-2 lg:col-span-3 text-[#2F3659] font-medium text-left ml-1">Family Member Info</section>
                    {/* ---------- Status ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <select
                                {...register("status", {
                                    required: {
                                        value: true,
                                        message: "Answer is required",
                                    },
                                })}
                                type="text"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="status"
                            >
                                <option value="">Parents status?</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                                <option value="mother is alive">Mother is alive</option>
                                <option value="father is alive">Father is alive</option>
                            </select>
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.status?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.status.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Have Step Mother ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <select
                                {...register("haveStepMother", {
                                    required: {
                                        value: true,
                                        message: "Answer is required",
                                    },
                                })}
                                type="text"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="haveStepMother"
                            >
                                <option value="">Have Step Mother?</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.haveStepMother?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.haveStepMother.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Have Step Father ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <select
                                {...register("haveStepFather", {
                                    required: {
                                        value: true,
                                        message: "Answer is required",
                                    },
                                })}
                                type="text"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="haveStepFather"
                            >
                                <option value="">Have Step Father?</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.haveStepFather?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.haveStepFather.message}</span>
                            )}
                        </h1>
                    </section>

                    {/* ---------- Parents Status Info End ---------- */}

                    {/* ---------- Number of Brother ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("numberOfBrother")}
                                type="number"
                                placeholder="Number of Brother"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="numberOfBrother"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.numberOfBrother?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.numberOfBrother.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Number of Sister ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("numberOfSister")}
                                type="number"
                                placeholder="Number of Sister"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="numberOfSister"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.numberOfSister?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.numberOfSister.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Social media info ---------- */}
                    <section className="col-span-1 md:col-span-2 lg:col-span-3 text-[#2F3659] font-medium text-left ml-1">Social Media Info</section>
                    {/* ---------- LinkedIn Id ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("LinkedInId")}
                                type="text"
                                placeholder="LinkedIn Id"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="LinkedInId"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.LinkedInId?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.LinkedInId.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- FaceBook Id ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("faceBookId")}
                                type="text"
                                placeholder="FaceBook Id"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="faceBookId"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.faceBookId?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.faceBookId.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Instagram Id ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("instagramId")}
                                type="text"
                                placeholder="Instagram Id"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="instagramId"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.instagramId?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.instagramId.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Optional ---------- */}
                    <section className="col-span-1 md:col-span-2 lg:col-span-3 text-[#2F3659] font-medium text-left ml-1">Optional</section>
                    {/* ---------- Bar registration number ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("barRegistrationNumber")}
                                type="text"
                                placeholder="Bar Registration Number"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="barRegistrationNumber"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.barRegistrationNumber?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.barRegistrationNumber.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- License No ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("licenceNo")}
                                type="text"
                                placeholder="License No"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="licenceNo"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.licenceNo?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.licenceNo.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- License Photo ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <AiOutlineIdcard className="mr-2 text-gray-400" />
                            <label htmlFor="licencePhoto" className="outline-none h-full text-sm text-gray-400 bg-gray-100">
                                {photoURL ? (
                                    <>
                                        <span className="text-green-400">Photo added</span>
                                    </>
                                ) : (
                                    "License Photo"
                                )}
                            </label>
                            <input {...register("licencePhoto")} type="file" id="licencePhoto" className="hidden" onChange={photoHandler} />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.licencePhoto?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.licencePhoto.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Year of bar registration ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("yearOfBarRegistration")}
                                type="number"
                                placeholder="Year of Bar Registration"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="yearOfBarRegistration"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.yearOfBarRegistration?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.yearOfBarRegistration.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Extra ---------- */}
                    <section className="col-span-1 md:col-span-2 lg:col-span-3 text-[#2F3659] font-medium text-left ml-1">Extra Info</section>
                    {/* ---------- Your Hobbies ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("hobbies")}
                                type="text"
                                placeholder="Your Hobbies"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="hobbies"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.hobbies?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.hobbies.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- About You ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("aboutYou")}
                                type="text"
                                placeholder="About You"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="aboutYou"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.aboutYou?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.aboutYou.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- What are you looking for ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <select
                                {...register("whatAreYouLookingFor", {
                                    required: {
                                        value: true,
                                        message: "Answer is required",
                                    },
                                })}
                                type="text"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="whatAreYouLookingFor"
                            >
                                <option value="">What Are You Looking For?</option>
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                            </select>
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.whatAreYouLookingFor?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.whatAreYouLookingFor.message}</span>
                            )}
                        </h1>
                    </section>

                    {/* -------------------- Professional Details field -------------------- */}

                    {/* ---------- Extra ---------- */}
                    <section className="col-span-1 md:col-span-2 lg:col-span-3 text-[#2F3659] font-medium text-left ml-1">Professional Info</section>
                    {/* ---------- Year of Experience ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("yearOfExperience")}
                                type="number"
                                placeholder="Year of Experience"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="yearOfExperience"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.yearOfExperience?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.yearOfExperience.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Office Location ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("officeLocation")}
                                type="text"
                                placeholder="Office Location"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="officeLocation"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.officeLocation?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.officeLocation.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Service Category ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("serviceCategory")}
                                type="text"
                                placeholder="Service Category"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="serviceCategory"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.serviceCategory?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.serviceCategory.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Your Provided Service ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("serviceProvide")}
                                type="text"
                                placeholder="Your Provided Service"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="serviceProvide"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.serviceProvide?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.serviceProvide.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Monthly Income ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("monthlyIncome")}
                                type="text"
                                placeholder="Monthly Income"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="monthlyIncome"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.monthlyIncome?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.monthlyIncome.message}</span>
                            )}
                        </h1>
                    </section>
                </section>
                <input
                    type="submit"
                    value={"Submit"}
                    className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
                />
            </form>
        </div>
    );
};
