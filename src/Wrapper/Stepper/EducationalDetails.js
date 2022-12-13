import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
// import { v4 as uuidv4 } from "uuid";
// import { firebaseStorage } from "../../firebase.init";
import { useSetEducationalDetailsMutation } from "../../Redux/features/userInfo/userApi";
import CreatableSelect from "react-select/creatable";
import { DatePicker } from "antd";

export const EducationalDetails = ({ setPage }) => {
    // const [photoURL, setPhotoUrl] = useState("");
    const [setEducationalDetails, { data, isLoading }] = useSetEducationalDetailsMutation();

    const [degreeName, setDegreeName] = useState("");
    const [eduDepartment, setEduDepartment] = useState("");
    const [eduInstitute, setEduInstitute] = useState("");
    const [eduFieldOfStudy, setEduFieldOfStudy] = useState("");
    const [eduYearOfPassing, setEduYearOfPassing] = useState("");

    const [addedDegreeName, setAddedDegreeName] = useState([]);
    const [addedDepartment, setAddedDepartment] = useState([]);
    const [addedInstitute, setAddedInstitute] = useState([]);
    const [addedFieldOfStudy, setAddedFieldOfStudy] = useState([]);
    const [addedYearOfPassing, setAddedYearOfPassing] = useState([]);

    const {
        register,
        formState: { errors },
        handleSubmit,
        control
    } = useForm();

    const { fields, append, remove } = useFieldArray({
        name: "educations",
        control,
    });

    const onSubmit = async data => {
        // data.caseCompleted = parseInt(data.caseCompleted);

        data.educations.map(p => delete p.degreeName);
        data.educations.map(p => delete p.eduInstitute);
        data.educations.map(p => delete p.eduDepartment);
        data.educations.map(p => delete p.eduFieldOfStudy);
        data.educations.map(p => delete p.eduYearOfPassing);

        data.educations.map((p, index) => (p.degreeName = addedDegreeName[index]));
        data.educations.map((p, index) => (p.eduInstitute = addedInstitute[index]));
        data.educations.map((p, index) => (p.eduDepartment = addedDepartment[index]));
        data.educations.map((p, index) => (p.eduFieldOfStudy = addedFieldOfStudy[index]));
        data.educations.map((p, index) => (p.eduYearOfPassing = addedYearOfPassing[index]));

        delete data.degreeName;
        delete data.eduInstitute;
        delete data.eduDepartment;
        delete data.eduFieldOfStudy;
        delete data.eduYearOfPassing;

        const newObject = Object.create(data);
        newObject.degreeName = degreeName;
        newObject.eduDepartment = eduDepartment;
        newObject.eduFieldOfStudy = eduFieldOfStudy;
        newObject.eduInstitute = eduInstitute;
        newObject.eduYearOfPassing = eduYearOfPassing;
        newObject.eduGpaOrCgpa = data.gpaOrCgpa;
        newObject.specialEducationalAchievement = data.specialEducationalAchievement;

        delete data.gpaOrCgpa;
        delete data.specialEducationalAchievement;
        console.log(newObject);
        data.educations.push(newObject);

        // data.photoCertificate = photoURL;
        await setEducationalDetails(data);
        console.log(data);
    };

    useEffect(() => {
        if (data) {
            setPage(3);
        }
    }, [data, setPage]);

    // const photoHandler = async e => {
    //     const photo = e.target.files[0];
    //     const storageRef = ref(firebaseStorage, `certificate/${photo.name + uuidv4()}`);
    //     uploadBytes(storageRef, photo).then(async snapshot => {
    //         await getDownloadURL(snapshot.ref).then(url => {
    //             setPhotoUrl(url.toString());
    //         });
    //     });
    // };

    return (
        <div className="w-full h-auto">
            <section className="col-span-1 md:col-span-2 lg:col-span-3 text-2xl text-[#2F3659] mb-8">
                <p>Educational Information Form</p>
                <hr className="w-1/2 mt-2 mx-auto" />
            </section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section className="md:w-full w-64 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
                    {/* ---------- Degree Name ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                            <CreatableSelect
                                {...register("degreeName")}
                                onChange={val => setDegreeName(val.value)}
                                type="text"
                                placeholder="Degree Name"
                                // options={options}
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        backgroundColor: "transparent",
                                        border: "none",
                                        textAlign: "left",
                                        fontSize: "14px",
                                        color: "#9CA3AF",
                                    }),
                                }}
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
                        <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                            <CreatableSelect
                                {...register("eduInstitute")}
                                onChange={val => setEduInstitute(val.value)}
                                type="text"
                                placeholder="Institution"
                                // options={options}
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        backgroundColor: "transparent",
                                        border: "none",
                                        textAlign: "left",
                                        fontSize: "14px",
                                        color: "#9CA3AF",
                                    }),
                                }}
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="institute"
                            />
                        </div>
                    </section>
                    {/* ---------- Department Name ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                            <CreatableSelect
                                {...register("eduDepartment")}
                                onChange={val => setEduDepartment(val.value)}
                                type="text"
                                placeholder="Department Name"
                                // options={options}
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        backgroundColor: "transparent",
                                        border: "none",
                                        textAlign: "left",
                                        fontSize: "14px",
                                        color: "#9CA3AF",
                                    }),
                                }}
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="Department"
                            />
                        </div>
                        {/* <h1 className="text-left ml-2">
                            {errors.Department?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.Department.message}</span>
                            )}
                        </h1> */}
                    </section>
                    {/* ---------- Field of Study ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                            <CreatableSelect
                                {...register("eduFieldOfStudy")}
                                onChange={val => setEduFieldOfStudy(val.value)}
                                type="text"
                                placeholder="Field of Study"
                                // options={options}
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        backgroundColor: "transparent",
                                        border: "none",
                                        textAlign: "left",
                                        fontSize: "14px",
                                        color: "#9CA3AF",
                                    }),
                                }}
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="fieldOfStudy"
                            />
                        </div>
                        {/* <h1 className="text-left ml-2">
                            {errors.fieldOfStudy?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.fieldOfStudy.message}</span>
                            )}
                        </h1> */}
                    </section>
                    {/* ---------- GPA or CGPA ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("gpaOrCgpa", {
                                    required: {
                                        value: true,
                                        message: "GPA or CGPA is required",
                                    },
                                })}
                                type="text"
                                placeholder="GPA Or CGPA"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="gpaOrCgpa"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.gpaOrCgpa?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.gpaOrCgpa.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Year of Passing ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                            <DatePicker
                                {...register("eduYearOfPassing")}
                                onChange={(date, dateString) => setEduYearOfPassing(dateString)}
                                placeholder="Year of Passing"
                                className="flex-1 px-2 py-2 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="yearOfPassing"
                                bordered={false}
                            />
                        </div>
                        {/* <h1 className="text-left ml-2">
                            {errors.yearOfPassing?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.yearOfPassing.message}</span>
                            )}
                        </h1> */}
                    </section>
                    {/* ---------- Special Educational Achievement ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("specialEducationalAchievement")}
                                type="text"
                                placeholder="Special Achievement"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="specialEducationalAchievement"
                            />
                        </div>
                    </section>

                    {/* ---------- Add More Educational Info */}
                    <br />
                    <div></div>
                    {fields.map((field, index) => {
                        return (
                            <section className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-3 gap-3" key={field.id}>
                                {/* ---------- Degree Name ---------- */}
                                <section>
                                    <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                                        <CreatableSelect
                                            {...register(`educations.${index}.degreeName`)}
                                            onChange={val => setAddedDegreeName([...addedDegreeName, val.value])}
                                            type="text"
                                            placeholder="Degree Name"
                                            // options={options}
                                            styles={{
                                                control: (baseStyles, state) => ({
                                                    ...baseStyles,
                                                    backgroundColor: "transparent",
                                                    border: "none",
                                                    textAlign: "left",
                                                    fontSize: "14px",
                                                    color: "#9CA3AF",
                                                }),
                                            }}
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
                                    <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                                        <CreatableSelect
                                            {...register(`educations.${index}.eduInstitute`)}
                                            onChange={val => setAddedInstitute([...addedInstitute, val.value])}
                                            type="text"
                                            placeholder="Institution"
                                            // options={options}
                                            styles={{
                                                control: (baseStyles, state) => ({
                                                    ...baseStyles,
                                                    backgroundColor: "transparent",
                                                    border: "none",
                                                    textAlign: "left",
                                                    fontSize: "14px",
                                                    color: "#9CA3AF",
                                                }),
                                            }}
                                            className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                            id="institute"
                                        />
                                    </div>
                                </section>
                                {/* ---------- Department Name ---------- */}
                                <section>
                                    <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                                        <CreatableSelect
                                            {...register(`educations.${index}.eduDepartment`)}
                                            onChange={val => setAddedDepartment([...addedDepartment, val.value])}
                                            type="text"
                                            placeholder="Department Name"
                                            // options={options}
                                            styles={{
                                                control: (baseStyles, state) => ({
                                                    ...baseStyles,
                                                    backgroundColor: "transparent",
                                                    border: "none",
                                                    textAlign: "left",
                                                    fontSize: "14px",
                                                    color: "#9CA3AF",
                                                }),
                                            }}
                                            className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                            id="Department"
                                        />
                                    </div>
                                </section>
                                {/* ---------- Field of Study ---------- */}
                                <section>
                                    <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                                        <CreatableSelect
                                            {...register(`educations.${index}.eduFieldOfStudy`)}
                                            onChange={val => setAddedFieldOfStudy([...addedFieldOfStudy, val.value])}
                                            type="text"
                                            placeholder="Field of Study"
                                            // options={options}
                                            styles={{
                                                control: (baseStyles, state) => ({
                                                    ...baseStyles,
                                                    backgroundColor: "transparent",
                                                    border: "none",
                                                    textAlign: "left",
                                                    fontSize: "14px",
                                                    color: "#9CA3AF",
                                                }),
                                            }}
                                            className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                            id="fieldOfStudy"
                                        />
                                    </div>
                                </section>
                                {/* ---------- GPA or CGPA ---------- */}
                                <section>
                                    <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                                        <input
                                            {...register(`educations.${index}.eduGpaOrCgpa`, {
                                                required: {
                                                    value: true,
                                                    message: "GPA or CGPA is required",
                                                },
                                            })}
                                            type="text"
                                            placeholder="Special Achievement"
                                            className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                            id="eduGpaOrCgpa"
                                        />
                                    </div>
                                    <h1 className="text-left ml-2">
                                        {errors.eduGpaOrCgpa?.type === "required" && (
                                            <span className="w-full text-left text-red-400 text-sm">{errors?.eduGpaOrCgpa.message}</span>
                                        )}
                                    </h1>
                                </section>
                                {/* ---------- Year of Passing ---------- */}
                                <section>
                                    <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                                        <DatePicker
                                            {...register(`educations.${index}.eduYearOfPassing`)}
                                            onChange={(date, dateString) => setAddedYearOfPassing([...addedYearOfPassing, dateString])}
                                            placeholder="Year of Passing"
                                            className="flex-1 px-2 py-2 outline-none h-full bg-transparent text-sm text-gray-400"
                                            id="yearOfPassing"
                                            bordered={false}
                                        />
                                    </div>
                                </section>
                                {/* ---------- Special Educational Achievement ---------- */}
                                <section>
                                    <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                                        <input
                                            {...register(`educations.${index}.specialEducationalAchievement`, {
                                                required: {
                                                    value: true,
                                                    message: "Special Educational Achievement is required",
                                                },
                                            })}
                                            type="text"
                                            placeholder="Special Achievement"
                                            className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                            id="specialEducationalAchievement"
                                        />
                                    </div>
                                    <h1 className="text-left ml-2">
                                        {errors.specialEducationalAchievement?.type === "required" && (
                                            <span className="w-full text-left text-red-400 text-sm">{errors?.specialEducationalAchievement.message}</span>
                                        )}
                                    </h1>
                                </section>
                                <button
                                    className="p-3 text-sm text-center font-medium bg-red-100 text-red-500 rounded-lg"
                                    type="button"
                                    onClick={() => remove(index)}
                                >
                                    Remove
                                </button>
                            </section>
                        );
                    })}
                    <button
                        type="button"
                        className="p-3 text-sm text-center font-medium text-gray-400 bg-gray-100 rounded-lg"
                        onClick={() => {
                            append({
                                degreeName: "",
                                eduInstitute: "",
                                eduDepartment: "",
                                eduFieldOfStudy: "",
                                eduGpaOrCgpa: "",
                                eduYearOfPassing: "",
                                specialEducationalAchievement: "",
                            });
                        }}
                    >
                        + Add More Educational Experience
                    </button>

                    {/* ---------- Add More Educational Info End */}

                    {/* ---------- Photo of Certificate ---------- */}
                    {/* <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <AiOutlineCloudUpload className=" mr-2 text-gray-400" />
                            <label htmlFor="photoCertificate" className="outline-none h-full text-sm text-gray-400 bg-gray-100">
                                {photoURL ? (
                                    <>
                                        <span className="text-green-400">Photo added</span>
                                    </>
                                ) : (
                                    "Upload Certificate Photo"
                                )}
                            </label>
                            <input
                                {...register("photoCertificate", {
                                    required: {
                                        value: true,
                                        message: "Certificate Photo is Required",
                                    },
                                })}
                                type="file"
                                id="photoCertificate"
                                className="hidden"
                                onChange={photoHandler}
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.photoCertificate?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.photoCertificate.message}</span>
                            )}
                        </h1>
                    </section> */}

                </section>
                <div className="flex items-center w-full justify-center gap-x-[20px] mt-[20px]">
                    <button
                        className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
                        onClick={() => setPage(1)}
                    >
                        Previous
                    </button>
                    <input
                        type="submit"
                        value={isLoading ? "Saving..." : "Next"}
                        className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
                    />
                </div>
            </form>
        </div>
    );
};
