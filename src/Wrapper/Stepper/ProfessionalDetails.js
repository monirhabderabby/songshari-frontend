// configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { DatePicker } from "antd";
import { useFieldArray, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

// components
import { AiOutlineCloudUpload } from "react-icons/ai";
import { firebaseStorage } from "../../firebase.init";
import { useSetProfessionalDetailsMutation } from "../../Redux/features/userInfo/userApi";

export const ProfessionalDetails = ({ setPage }) => {
  const [workPeriod, setWorkPeriod] = useState();
  const [addedWorkPeriod, setAddedWorkPeriod] = useState([]);
  const [professionalAchievementMoment, setProfessionalAchievementMoment] =
    useState("");
  const [addedAchievementMoment, setAddedAchievementMoment] = useState([]);

  const [setProfessionalDetails, { data: response, isLoading }] =
    useSetProfessionalDetailsMutation();

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

    data.professions.map((p) => delete p.specialAchievementMoment);
    data.professions.map(
      (p, index) => (p.specialAchievementMoment = addedAchievementMoment[index])
    );

    const newObject = Object.create(data);

    newObject.position = data.position;
    newObject.institute = data.institute;
    newObject.duty = data.duty;
    newObject.workPeriod = workPeriod;
    newObject.specialAchievement = data.specialAchievement;
    newObject.specialAchievementMoment = professionalAchievementMoment;

    delete data.position;
    delete data.institute;
    delete data.duty;
    delete data.workPeriod;
    delete data.specialAchievement;
    delete data.specialAchievementMoment;

    data.professions.push(newObject);

    await setProfessionalDetails(data);
  };

  const specialAchievementMomentHandler = async (e) => {
    const photo = e.target.files[0];
    const storageRef = ref(firebaseStorage, `cover/${photo?.name + uuidv4()}`);
    uploadBytes(storageRef, photo).then(async (snapshot) => {
      await getDownloadURL(snapshot.ref).then((url) => {
        setProfessionalAchievementMoment(url.toString());
      });
    });
  };

  const addedProfessionAchievementMomentHandler = async (e) => {
    const photo = e.target.files[0];
    const storageRef = ref(firebaseStorage, `moment/${photo?.name + uuidv4()}`);
    uploadBytes(storageRef, photo).then(async (snapshot) => {
      await getDownloadURL(snapshot.ref).then((url) => {
        setAddedAchievementMoment([...addedAchievementMoment, url.toString()]);
      });
    });
  };

  useEffect(() => {
    if (response) {
      setPage(4);
    }
  }, [response, setPage]);

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
                htmlFor="specialAchievementMoment"
                className="outline-none h-full text-sm text-gray-400 bg-gray-100"
              >
                {professionalAchievementMoment ? (
                  <>
                    <span className="text-green-400">Moments added</span>
                  </>
                ) : (
                  "Upload Achievement Moments"
                )}
              </label>
              <input
                {...register("specialAchievementMoment")}
                type="file"
                id="specialAchievementMoment"
                className="hidden"
                onChange={specialAchievementMomentHandler}
              />
            </div>
          </section>
          {fields.map((field, index) => {
            return (
              <section
                className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-3 gap-3"
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
                      {/* {addedAchievementMoment.length > 0 ? (
                        <>
                          <span className="text-green-400">
                            Moments new added
                          </span>
                        </>
                      ) : (
                        "Upload new Achievement Moments"
                      )} */}
                      Upload new Achievement Moments
                    </label>
                    <input
                      {...register(
                        `professions.${index}.specialAchievementMoment`
                      )}
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
                specialAchievementMoment: "",
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
