// configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

// components
import { useSetPhysicalDetailsMutation } from "../../Redux/features/userInfo/userApi";

export const PhysicalDetails = ({ setPage }) => {
  const [ancestry, setAncestry] = useState("");
  const [skinTone, setSkinTone] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [hairType, setHairType] = useState("");
  const [numberOfTeeth, setNumberOfTeeth] = useState(null);

  const [setPhysicalDetails, { data: response, isLoading }] =
    useSetPhysicalDetailsMutation();

  // Ancestry data
  const [ancestryData, setAncestryData] = useState([]);
  useEffect(() => {
    fetch("json/ancestry.json")
      .then((res) => res.json())
      .then((data) => setAncestryData(data));
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    delete data.ancestry;
    delete data.eyeColor;
    delete data.hairColor;
    delete data.hairType;
    delete data.numberOfTeeth;
    delete data.skinTone;

    data = {
      ...data,
      ancestry,
      skinTone,
      hairColor,
      hairType,
      eyeColor,
      numberOfTeeth,
    };

    data.numberOfTeeth = Number(data.numberOfTeeth);
    await setPhysicalDetails(data);
  };

  useEffect(() => {
    if (response) {
      setPage(5);
    }
  }, [response, setPage]);

  return (
    <div className="w-full h-auto">
      <section className="col-span-1 md:col-span-2 lg:col-span-3 text-2xl text-[#2F3659] mb-8">
        <p>Physical Information Form</p>
        <hr className="w-1/2 mt-2 mx-auto" />
      </section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="md:w-full w-64 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
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
                <span className="w-full text-left text-red-400 text-sm">
                  {errors?.height.message}
                </span>
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
                <span className="w-full text-left text-red-400 text-sm">
                  {errors?.weight.message}
                </span>
              )}
            </h1>
          </section>
          {/* ---------- Ancestry ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
              <CreatableSelect
                {...register("ancestry")}
                onChange={(val) => setAncestry(val.value)}
                type="text"
                placeholder="Ancestry"
                options={ancestryData}
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
                id="ancestry"
              />
            </div>
          </section>
          {/* ---------- Skin Tone ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
              <CreatableSelect
                {...register("skinTone")}
                onChange={(val) => setSkinTone(val.value)}
                type="text"
                placeholder="Skin Tone"
                options={[
                  {
                    value: "Dark",
                    label: "Dark",
                  },
                  {
                    value: "Brown",
                    label: "Brown",
                  },
                  {
                    value: "White",
                    label: "White",
                  },
                ]}
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
                id="SkinTone"
              />
            </div>
          </section>
          {/* ---------- Hair Color ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
              <CreatableSelect
                {...register("hairColor")}
                onChange={(val) => setHairColor(val.value)}
                type="text"
                placeholder="Hair Color"
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
                id="hairColour"
              />
            </div>
          </section>
          {/* ---------- Hair Type ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
              <CreatableSelect
                {...register("hairType")}
                onChange={(val) => setHairType(val.value)}
                type="text"
                placeholder="Hair Type"
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
                id="hairType"
              />
            </div>
          </section>
          {/* ---------- Eye Color ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
              <CreatableSelect
                {...register("eyeColor")}
                onChange={(val) => setEyeColor(val.value)}
                type="text"
                placeholder="Eye Color"
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
                id="eyeColor"
              />
            </div>
          </section>
          {/* ---------- Number of Teeth ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
              <CreatableSelect
                {...register("numberOfTeeth")}
                onChange={(val) => setNumberOfTeeth(val.value)}
                type="number"
                placeholder="Number of Teeth"
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
                id="numberOfTeeth"
              />
            </div>
          </section>
        </section>
        <div className="flex items-center w-full justify-center gap-x-[20px] mt-[20px]">
          <button
            className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
            onClick={() => setPage(3)}
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
