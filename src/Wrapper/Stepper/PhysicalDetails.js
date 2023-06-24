// configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { useForm } from "react-hook-form";
import { decodeToken } from "react-jwt";
import CreatableSelect from "react-select/creatable";

// components
import getCookie from "../../Helper/cookies/getCookie";
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

  const token = getCookie("token");
  const tokenInfo = decodeToken(token);

  const { role } = tokenInfo || {};

  // Ancestry data
  const [ancestryData, setAncestryData] = useState([]);
  useEffect(() => {
    fetch("/json/ancestry.json")
      .then((res) => res.json())
      .then((data) => setAncestryData(data));
  }, []);

  const { register, handleSubmit } = useForm();

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
    data.height = Number(data.height);
    data.weight = Number(data.weight);

    await setPhysicalDetails(data);
  };

  useEffect(() => {
    if (response) {
      role === "member" ? setPage(5) : setPage(7);
    }
  }, [response, setPage, role]);

  const isValidNewOption = (inputValue) => {
    const pattern = /^\d+$/; // Regular expression to match only digits

    if (inputValue.match(pattern)) {
      return true;
    }

    return false;
  };

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
                {...register("height")}
                type="number"
                step="0.01"
                placeholder="Height (inch)"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="height"
              />
            </div>
          </section>
          {/* ---------- Weight ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <input
                {...register("weight")}
                type="number"
                step="0.01"
                placeholder="Weight (kg)"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="weight"
              />
            </div>
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
                options={[
                  { value: "Fair", label: "Fair" },
                  { value: "Light", label: "Light" },
                  { value: "Medium", label: "Medium" },
                  { value: "Olive", label: "Olive" },
                  { value: "Brown", label: "Brown" },
                  { value: "Dark", label: "Dark" },
                  { value: "Pale", label: "Pale" },
                  { value: "Tan", label: "Tan" },
                  { value: "Golden", label: "Golden" },
                  { value: "Ebony", label: "Ebony" },
                ]}
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
                options={[
                  { value: "Black", label: "Black" },
                  { value: "Brown", label: "Brown" },
                  { value: "Blonde", label: "Blonde" },
                  { value: "Red", label: "Red" },
                  { value: "Gray", label: "Gray" },
                  { value: "White", label: "White" },
                  { value: "Auburn", label: "Auburn" },
                  { value: "Chestnut", label: "Chestnut" },
                  { value: "Brunette", label: "Brunette" },
                  { value: "Silver", label: "Silver" },
                ]}
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
                options={[
                  { value: "Straight", label: "Straight" },
                  { value: "Wavy", label: "Wavy" },
                  { value: "Curly", label: "Curly" },
                  { value: "Kinky", label: "Kinky" },
                  { value: "Coiled", label: "Coiled" },
                  { value: "Frizzy", label: "Frizzy" },
                  { value: "Thick", label: "Thick" },
                  { value: "Thin", label: "Thin" },
                  { value: "Fine", label: "Fine" },
                  { value: "Medium", label: "Medium" },
                  { value: "Coarse", label: "Coarse" },
                ]}
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
                options={[
                  { value: "Brown", label: "Brown" },
                  { value: "Blue", label: "Blue" },
                  { value: "Green", label: "Green" },
                  { value: "Hazel", label: "Hazel" },
                  { value: "Amber", label: "Amber" },
                  { value: "Gray", label: "Gray" },
                  { value: "Black", label: "Black" },
                  { value: "Violet", label: "Violet" },
                  { value: "Mixed", label: "Mixed" },
                ]}
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
                isValidNewOption={isValidNewOption}
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
                options={[
                  {
                    value: "28",
                    label: "28",
                  },
                  {
                    value: "29",
                    label: "29",
                  },
                  {
                    value: "30",
                    label: "30",
                  },
                  {
                    value: "31",
                    label: "31",
                  },
                  {
                    value: "32",
                    label: "32",
                  },
                ]}
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
