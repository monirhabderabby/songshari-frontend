// configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { useForm, useFieldArray } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { DatePicker } from "antd";
import CreatableSelect from "react-select/creatable";

// components
import { firebaseStorage } from "../../firebase.init";
import { useSetEducationalDetailsMutation } from "../../Redux/features/userInfo/userApi";
import { AiOutlineCloudUpload } from "react-icons/ai";

export const EducationalDetails = ({ setPage }) => {
  // const [setEducationalDetails, { data: response, isLoading }] =
  //   useSetEducationalDetailsMutation();

  const [degreeName, setDegreeName] = useState("");
  const [eduDepartment, setEduDepartment] = useState("");
  const [eduInstitute, setEduInstitute] = useState("");
  const [eduFieldOfStudy, setEduFieldOfStudy] = useState("");
  const [eduYearOfPassing, setEduYearOfPassing] = useState("");
  const [eduAchievementMoment, setEduAchievementMoment] = useState("");

  const [addedDegreeName, setAddedDegreeName] = useState([]);
  const [addedDepartment, setAddedDepartment] = useState([]);
  const [addedInstitute, setAddedInstitute] = useState([]);
  const [addedFieldOfStudy, setAddedFieldOfStudy] = useState([]);
  const [addedYearOfPassing, setAddedYearOfPassing] = useState([]);
  const [eduAddedPhotoCertificate, setEduAddedPhotoCertificate] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "educations",
    control,
  });

  const onSubmit = async (data) => {
    // data.caseCompleted = parseInt(data.caseCompleted);

    data.educations.map((p) => delete p.degree);
    data.educations.map((p) => delete p.institute);
    data.educations.map((p) => delete p.department);
    data.educations.map((p) => delete p.feildOfStudy);
    data.educations.map((p) => delete p.yearOfPassing);
    data.educations.map((p) => delete p.photoCertificate);

    data.educations.map((p, index) => (p.degree = addedDegreeName[index]));
    data.educations.map((p, index) => (p.institute = addedInstitute[index]));
    data.educations.map((p, index) => (p.department = addedDepartment[index]));
    data.educations.map(
      (p, index) => (p.feildOfStudy = addedFieldOfStudy[index])
    );
    data.educations.map(
      (p, index) => (p.yearOfPassing = addedYearOfPassing[index])
    );
    data.educations.map(
      (p, index) => (p.photoCertificate = eduAddedPhotoCertificate[index])
    );

    const newObject = Object.create(data);
    newObject.degree = degreeName;
    newObject.institute = eduInstitute;
    newObject.department = eduDepartment;
    newObject.feildOfStudy = eduFieldOfStudy;
    newObject.yearOfPassing = eduYearOfPassing;
    newObject.eduGpaOrCgpa = data.gpaOrCgpa;
    newObject.specialAchievement = data.specialAchievement;
    newObject.photoCertificate = eduAchievementMoment;

    delete data.degree;
    delete data.institute;
    delete data.department;
    delete data.feildOfStudy;
    delete data.yearOfPassing;
    delete data.photoCertificate;
    delete data.gpaOrCgpa;
    delete data.specialAchievement;
    data.educations.push(newObject);

    // data.photoCertificate = photoURL;
    // await setEducationalDetails(data);
    console.log(data);
  };

  const educationalAchievementMomentHandler = async (e) => {
    const photo = e.target.files[0];
    const storageRef = ref(firebaseStorage, `cover/${photo?.name + uuidv4()}`);
    uploadBytes(storageRef, photo).then(async (snapshot) => {
      await getDownloadURL(snapshot.ref).then((url) => {
        setEduAchievementMoment(url.toString());
      });
    });
  };

  const eduAddedAchievementMomentHandler = async (e) => {
    const photo = e.target.files[0];
    const storageRef = ref(firebaseStorage, `cover/${photo?.name + uuidv4()}`);
    uploadBytes(storageRef, photo).then(async (snapshot) => {
      await getDownloadURL(snapshot.ref).then((url) => {
        setEduAddedPhotoCertificate([
          ...eduAddedPhotoCertificate,
          url.toString(),
        ]);
      });
    });
  };

  // useEffect(() => {
  //   if (response) {
  //     setPage(3);
  //   }
  // }, [response, setPage]);

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
                {...register("degree")}
                onChange={(val) => setDegreeName(val.value)}
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
          </section>
          {/* ---------- Institution ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
              <CreatableSelect
                {...register("institute")}
                onChange={(val) => setEduInstitute(val.value)}
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
                {...register("department")}
                onChange={(val) => setEduDepartment(val.value)}
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
                {...register("feildOfStudy")}
                onChange={(val) => setEduFieldOfStudy(val.value)}
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
                {...register("gpaOrCgpa")}
                type="text"
                placeholder="GPA Or CGPA"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="gpaOrCgpa"
              />
            </div>
          </section>
          {/* ---------- Year of Passing ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
              <DatePicker
                {...register("yearOfPassing")}
                onChange={(date, dateString) => setEduYearOfPassing(dateString)}
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
                {...register("specialAchievement")}
                type="text"
                placeholder="Special Achievement"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="specialAchievement"
              />
            </div>
          </section>
          {/* ---------- Educational Achievement Moment ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <AiOutlineCloudUpload className=" mr-2 text-gray-400" />
              <label
                htmlFor="educationalAchievementMoment"
                className="outline-none h-full text-sm text-gray-400 bg-gray-100"
              >
                {eduAchievementMoment ? (
                  <>
                    <span className="text-green-400">Moments added</span>
                  </>
                ) : (
                  "Upload Achievement Moments"
                )}
              </label>
              <input
                {...register("photoCertificate")}
                type="file"
                id="educationalAchievementMoment"
                className="hidden"
                onChange={educationalAchievementMomentHandler}
              />
            </div>
          </section>

          {/* ---------- Add More Educational Info -------------*/}
          <br />
          {fields.map((field, index) => {
            return (
              <section
                className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-3 gap-3"
                key={field.id}
              >
                {/* ---------- Degree Name ---------- */}
                <section>
                  <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                    <CreatableSelect
                      {...register(`educations.${index}.degree`)}
                      onChange={(val) =>
                        setAddedDegreeName([...addedDegreeName, val.value])
                      }
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
                </section>
                {/* ---------- Institution ---------- */}
                <section>
                  <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                    <CreatableSelect
                      {...register(`educations.${index}.institute`)}
                      onChange={(val) =>
                        setAddedInstitute([...addedInstitute, val.value])
                      }
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
                      {...register(`educations.${index}.department`)}
                      onChange={(val) =>
                        setAddedDepartment([...addedDepartment, val.value])
                      }
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
                      {...register(`educations.${index}.feildOfStudy`)}
                      onChange={(val) =>
                        setAddedFieldOfStudy([...addedFieldOfStudy, val.value])
                      }
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
                      {...register(`educations.${index}.gpaOrCgpa`)}
                      type="text"
                      placeholder="Special Achievement"
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="eduGpaOrCgpa"
                    />
                  </div>
                </section>
                {/* ---------- Year of Passing ---------- */}
                <section>
                  <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                    <DatePicker
                      {...register(`educations.${index}.yearOfPassing`)}
                      onChange={(date, dateString) =>
                        setAddedYearOfPassing([
                          ...addedYearOfPassing,
                          dateString,
                        ])
                      }
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
                      {...register(`educations.${index}.specialAchievement`)}
                      type="text"
                      placeholder="Special Achievement"
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="specialAchievement"
                    />
                  </div>
                </section>
                {/* ---------- Educational Achievement Moment ---------- */}
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <AiOutlineCloudUpload className=" mr-2 text-gray-400" />
                    <label
                      htmlFor="eduAddedAchievementMoment"
                      className="outline-none h-full text-sm text-gray-400 bg-gray-100"
                    >
                      {/* {eduAchievementMoment ? (
                        <>
                          <span className="text-green-400">Moments added</span>
                        </>
                      ) : (
                        "Upload Achievement Moments"
                      )} */}
                      Upload Achievement Moments
                    </label>
                    <input
                      {...register(`educations.${index}.photoCertificate`)}
                      type="file"
                      id="eduAddedAchievementMoment"
                      className="hidden"
                      onChange={eduAddedAchievementMomentHandler}
                    />
                  </div>
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
                degree: "",
                institute: "",
                department: "",
                feildOfStudy: "",
                gpaOrCgpa: "",
                yearOfPassing: "",
                specialAchievement: "",
                photoCertificate: "",
              });
            }}
          >
            + Add More Educational Experience
          </button>

          {/* ---------- Add More Educational Info End */}
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
            // value={isLoading ? "Saving..." : "Next"}
            value={"Next"}
            className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
          />
        </div>
      </form>
    </div>
  );
};
