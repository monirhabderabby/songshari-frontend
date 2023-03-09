// configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { DatePicker } from "antd";
import { useFieldArray, useForm } from "react-hook-form";

// components
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useSetProfessionalDetailsMutation } from "../../Redux/features/userInfo/userApi";
import { usePhotosUploadOnServerMutation } from "../../Redux/features/fileUpload/fileUploadApi";

export const ProfessionalDetails = ({ setPage }) => {
  const [workPeriod, setWorkPeriod] = useState();
  const [addedWorkPeriod, setAddedWorkPeriod] = useState([]);
  const [professionalAchievementMoment, setProfessionalAchievementMoment] =
    useState("");
  const [addedAchievementMoment, setAddedAchievementMoment] = useState([]);
  const [achievementMomentName, setAchievementMomentName] = useState();

  const [setProfessionalDetails, { data: response, isLoading }] =
    useSetProfessionalDetailsMutation();
  const [uploadCertificate, { data: uploadedCertificate }] =
    usePhotosUploadOnServerMutation();
  const [uploadMoreCertificate, { data: uploadedMoreCertificate }] =
    usePhotosUploadOnServerMutation();

  useEffect(() => {
    if (uploadedCertificate)
      setProfessionalAchievementMoment(uploadedCertificate?.data[0]?.path);
  }, [uploadedCertificate]);

  useEffect(() => {
    if (uploadedMoreCertificate)
      setAddedAchievementMoment(() => [
        ...addedAchievementMoment,
        uploadedMoreCertificate?.data[0]?.path,
      ]);
  }, [uploadedMoreCertificate]);

  const { register, handleSubmit, control } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "professions",
    control,
  });

  const { RangePicker } = DatePicker;

  const onWorkPeriodChange = (value, dateString) => {
    setWorkPeriod(dateString);
  };

  const onAddedWorkPeriodChange = (value, dateString) => {
    setAddedWorkPeriod([...addedWorkPeriod, dateString]);
  };

  const onSubmit = async (data) => {
    // data.caseCompleted = parseInt(data.caseCompleted);
    // await setProfessionalDetails(data);

    data.professions.map((p) => delete p.workPeriod);
    data.professions.map((p, index) => (p.workPeriod = addedWorkPeriod[index]));

    data.professions.map((p) => delete p.certificates);
    data.professions.map(
      (p, index) => (p.certificates = { photo: addedAchievementMoment[index] })
    );

    const newObject = Object.create(data);

    newObject.position = data.position;
    newObject.institute = data.institute;
    newObject.duty = data.duty;
    newObject.workPeriod = workPeriod;
    newObject.specialAchievement = data.specialAchievement;
    newObject.certificates = { photo: professionalAchievementMoment };

    delete data.position;
    delete data.institute;
    delete data.duty;
    delete data.workPeriod;
    delete data.specialAchievement;
    delete data.certificates;

    data.professions.push(newObject);

    await setProfessionalDetails(data);
  };

  const specialAchievementMomentHandler = async (e) => {
    if (e.target.files[0]) {
      const photo = e.target.files[0];
      setAchievementMomentName(photo?.name);
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      uploadCertificate(formData);
    }
  };

  const addedProfessionAchievementMomentHandler = async (e) => {
    if (e.target.files[0]) {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      uploadMoreCertificate(formData);
    }
  };

  useEffect(() => {
    if (response) {
      console.log(response);
      setPage(4);
    }
  }, [response, setPage]);

  const isPhotoUploaded = (index) => {
    const arrayOfResult = addedAchievementMoment.map((p, idx) => {
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
      <section className="col-span-1 md:col-span-2 lg:col-span-3 text-2xl text-[#2F3659] mb-4">
        <p>Professional Info</p>
        <hr className="w-1/2 mt-2 mx-auto" />
      </section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="md:w-full w-64 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
          {/* ---------- Position ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <input
                {...register("position")}
                type="text"
                placeholder="Position"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="position"
              />
            </div>
          </section>
          {/* ---------- Institution ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <input
                {...register("institute")}
                type="text"
                placeholder="Institution"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="institute"
              />
            </div>
          </section>
          {/* ---------- Duty ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <input
                {...register("duty")}
                type="text"
                placeholder="Duty"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="duty"
              />
            </div>
          </section>
          {/* ---------- Work Period ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
              <RangePicker
                {...register("workPeriod")}
                placeholder={["Start Date", "End Date"]}
                className="flex-1 px-2 py-[10px] outline-none h-full bg-transparent text-sm text-gray-400"
                id="workPeriod"
                bordered={false}
                onChange={onWorkPeriodChange}
              />
            </div>
          </section>
          {/* ---------- Special Professional Achievement ---------- */}
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
          {/* ---------- Professional Achievement moment ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <AiOutlineCloudUpload className=" mr-2 text-gray-400" />
              <label
                htmlFor="certificates"
                className="outline-none h-full text-sm text-gray-400 bg-gray-100"
              >
                {professionalAchievementMoment ? (
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
                id="certificates"
                className="hidden"
                onChange={specialAchievementMomentHandler}
              />
            </div>
          </section>
          {fields.map((field, index) => {
            return (
              <section
                className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
                key={field.id}
              >
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <input
                      {...register(`professions.${index}.position`)}
                      type="text"
                      placeholder="Position"
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="position"
                    />
                  </div>
                </section>
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <input
                      {...register(`professions.${index}.institute`)}
                      type="text"
                      placeholder="Institution"
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="institute"
                    />
                  </div>
                </section>
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <input
                      {...register(`professions.${index}.duty`)}
                      type="text"
                      placeholder="Duty"
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="duty"
                    />
                  </div>
                </section>
                <section>
                  <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                    <RangePicker
                      {...register(`professions.${index}.workPeriod`)}
                      placeholder={["Start Date", "End Date"]}
                      className="flex-1 px-2 py-[10px] outline-none h-full bg-transparent text-sm text-gray-400"
                      id="workPeriod"
                      bordered={false}
                      onChange={onAddedWorkPeriodChange}
                    />
                  </div>
                </section>
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <input
                      {...register(`professions.${index}.specialAchievement`)}
                      type="text"
                      placeholder="Special Achievement"
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="specialAchievement"
                    />
                  </div>
                </section>
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <AiOutlineCloudUpload className=" mr-2 text-gray-400" />
                    <label
                      htmlFor="addedProfessionAchievementMoment"
                      className="outline-none h-full text-sm text-gray-400 bg-gray-100"
                    >
                      {isPhotoUploaded(index) ? (
                        <span className="text-green-400">Moments added</span>
                      ) : (
                        "Upload Achievement Moments"
                      )}
                    </label>
                    <input
                      {...register(`professions.${index}.certificates`)}
                      type="file"
                      id="addedProfessionAchievementMoment"
                      className="hidden"
                      onChange={addedProfessionAchievementMomentHandler}
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
                position: "",
                institute: "",
                duty: "",
                workPeriod: "",
                specialAchievement: "",
                certificates: "",
              });
            }}
          >
            + Add More Professional Experience
          </button>

          {/* ------------------------ Current profession field end ------------------------ */}
        </section>
        <div className="flex items-center w-full justify-center gap-x-[20px] mt-[20px]">
          <button
            className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
            onClick={() => setPage(2)}
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
