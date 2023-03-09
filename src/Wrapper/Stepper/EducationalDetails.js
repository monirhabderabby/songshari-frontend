// configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { DatePicker } from "antd";
import { useFieldArray, useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

// components
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useSetEducationalDetailsMutation } from "../../Redux/features/userInfo/userApi";
import { usePhotosUploadOnServerMutation } from "../../Redux/features/fileUpload/fileUploadApi";

export const EducationalDetails = ({ setPage }) => {
  const [setEducationalDetails, { data: response, isLoading }] =
    useSetEducationalDetailsMutation();
  const [uploadCertificate, { data: uploadedCertificate }] =
    usePhotosUploadOnServerMutation();
  const [uploadMoreCertificate, { data: uploadedMoreCertificate }] =
    usePhotosUploadOnServerMutation();

  const [degreeName, setDegreeName] = useState("");
  const [eduDepartment, setEduDepartment] = useState("");
  const [eduInstitute, setEduInstitute] = useState("");
  const [eduFieldOfStudy, setEduFieldOfStudy] = useState("");
  const [eduYearOfPassing, setEduYearOfPassing] = useState("");
  const [eduAchievementMoment, setEduAchievementMoment] = useState("");
  const [achievementMomentName, setAchievementMomentName] = useState();

  const [addedDegreeName, setAddedDegreeName] = useState([]);
  const [addedDepartment, setAddedDepartment] = useState([]);
  const [addedInstitute, setAddedInstitute] = useState([]);
  const [addedFieldOfStudy, setAddedFieldOfStudy] = useState([]);
  const [addedYearOfPassing, setAddedYearOfPassing] = useState([]);
  const [eduAddedPhotoCertificate, setEduAddedPhotoCertificate] = useState([]);
  console.log("array of certificates", eduAddedPhotoCertificate);

  useEffect(() => {
    if (uploadedCertificate)
      setEduAchievementMoment(uploadedCertificate?.data[0]?.path);
  }, [uploadedCertificate]);

  useEffect(() => {
    if (uploadedMoreCertificate)
      setEduAddedPhotoCertificate(() => [
        ...eduAddedPhotoCertificate,
        uploadedMoreCertificate?.data[0]?.path,
      ]);
  }, [uploadedMoreCertificate]);

  // testing array for more data field

  const { register, handleSubmit, control } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "educations",
    control,
  });

  const onSubmit = async (data) => {
    data.educations.map((p) => delete p.degree);
    data.educations.map((p) => delete p.institute);
    data.educations.map((p) => delete p.department);
    data.educations.map((p) => delete p.feildOfStudy);
    data.educations.map((p) => delete p.yearOfPassing);
    data.educations.map((p) => delete p.certificates);

    data.educations.map((p, index) => (p.degree = addedDegreeName[index]));
    data.educations.map((p, index) => (p.institute = addedInstitute[index]));
    data.educations.map((p, index) => (p.department = addedDepartment[index]));
    data.educations.map(
      (p, index) => (p.fieldOfStudy = addedFieldOfStudy[index])
    );
    data.educations.map(
      (p, index) => (p.yearOfPassing = addedYearOfPassing[index])
    );
    data.educations.map(
      (p, index) =>
        (p.certificates = { photo: eduAddedPhotoCertificate[index] })
    );
    data.educations.map((p) => (p.gpaOrCgpa = Number(p.gpaOrCgpa)));

    const newObject = Object.create(data);
    newObject.degree = degreeName;
    newObject.institute = eduInstitute;
    newObject.department = eduDepartment;
    newObject.fieldOfStudy = eduFieldOfStudy;
    newObject.yearOfPassing = eduYearOfPassing;
    newObject.gpaOrCgpa = Number(data.gpaOrCgpa);
    newObject.specialAchievement = data.specialAchievement;
    newObject.certificates = { photo: eduAchievementMoment };

    delete data.degree;
    delete data.institute;
    delete data.department;
    delete data.fieldOfStudy;
    delete data.yearOfPassing;
    delete data.photoCertificate;
    delete data.gpaOrCgpa;
    delete data.certificates;
    delete data.specialAchievement;
    data.educations.push(newObject);

    await setEducationalDetails(data);
  };

  const educationalAchievementMomentHandler = async (e) => {
    setAchievementMomentName(e.target.files[0]?.name);
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    uploadCertificate(formData);
  };

  const moreEduAddedAchievementMomentHandler = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    uploadMoreCertificate(formData);
  };

  useEffect(() => {
    if (response) {
      setPage(3);
    }
  }, [response, setPage]);

  const isPhotoUploaded = (index) => {
    const arrayOfResult = eduAddedPhotoCertificate.map((p, idx) => {
      if (idx === index) {
        return true;
      } else {
        return false;
      }
    });

    const result = arrayOfResult.indexOf(true) !== -1;

    return result;
  };

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
                {...register("fieldOfStudy")}
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
                    <span className="text-green-400">
                      {achievementMomentName
                        ? achievementMomentName
                        : "Moments added"}
                    </span>
                  </>
                ) : (
                  "Upload Achievement Moments"
                )}
              </label>
              <input
                {...register("certificates")}
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
                className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
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
                      placeholder="GPA Or CGPA"
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
                      htmlFor="certificates"
                      className="outline-none h-full text-sm text-gray-400 bg-gray-100"
                    >
                      {isPhotoUploaded(index) ? (
                        <span className="text-green-400">Moments added</span>
                      ) : (
                        "Upload Achievement Moments"
                      )}
                    </label>
                    <input
                      {...register(`educations.${index}.certificates`)}
                      type="file"
                      id="certificates"
                      className="hidden"
                      onChange={moreEduAddedAchievementMomentHandler}
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
            value={isLoading ? "Saving..." : "Next"}
            className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
          />
        </div>
      </form>
    </div>
  );
};
