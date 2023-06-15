// Configuration
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

// Third party packages
import LinearProgress from "@mui/material/LinearProgress";
import { message, Select, Slider } from "antd";
import { useForm } from "react-hook-form";

// Components
import { MdCancel } from "react-icons/md";
import {
  useGetProfileDetailsQuery,
  useUpdatePhysicalDetailsMutation,
} from "../../../../Redux/features/userInfo/userApi";
import { OvalLoader } from "../../../shared/Cards/Loader/OvalLoader/OvalLoader";
import { MobileBackButton } from "../../../shared/Components/MobileBackButton";
import { BottomNav } from "../../../../Wrapper/Home/mobileversion/BottomNav";

const EditPhysicalInfo = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [physicalInfo, setPhysicalInfo] = useState({});
  //others physical information
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const { handleSubmit } = useForm();

  const [updatePhysicalDetails, { isLoading, isSuccess, isError }] =
    useUpdatePhysicalDetailsMutation();

  //phycsical information data change handler
  const onHeightChange = (value) => {
    setHeight(value);
    setPhysicalInfo({ ...physicalInfo, height: value });
  };
  const onAfterHeightChange = (value) => {};
  const onWeightChange = (value) => {
    setWeight(value);
    setPhysicalInfo({ ...physicalInfo, weight: value });
  };
  const onAfterWeightChange = (value) => {};
  const handleUserAncestryChange = (value) => {
    setPhysicalInfo({ ...physicalInfo, ancestry: value });
  };
  const handleUserSkinToneChange = (value) => {
    setPhysicalInfo({ ...physicalInfo, skinTone: value });
  };
  const handleUserHairColorChange = (value) => {
    setPhysicalInfo({ ...physicalInfo, hairColor: value });
  };
  const handleUserHairTypeChange = (value) => {
    setPhysicalInfo({ ...physicalInfo, hairType: value });
  };
  const handleUserEyeColorChange = (value) => {
    setPhysicalInfo({ ...physicalInfo, eyeColor: value });
  };
  const handleNumberOfTeeth = (value) => {
    setPhysicalInfo({ ...physicalInfo, numberOfTeeth: Number(value) });
  };

  const { id } = useParams();
  const { data: profileData, isLoading: profileDataLoading } =
    useGetProfileDetailsQuery(id);

  const {
    height: heightDefault,
    weight: weightDefault,
    ancestry,
    skinTone,
    hairColor,
    hairType,
    eyeColor,
    numberOfTeeth,
  } = profileData?.physicalDetail || {};

  const navigate = useNavigate();
  //data submission function
  const onSubmit = async (data) => {
    data = { ...physicalInfo };
    await updatePhysicalDetails(data);
  };
  // error success and loading handler
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
        content: "Data updated successfully",
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
        navigate(-1);
      }, 2000);
    }
  }, [isSuccess, isLoading, isError, messageApi, navigate]);

  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="lg:hidden">
        <MobileBackButton name={"Edit Physical Info"} />
      </div>
      <div className="max-w-[523px] mx-auto bg-white drop-shadow-lg px-4 pt-3 pb-6 mb-4 rounded">
        <div className="hidden lg:flex justify-end mb-3">
          <MdCancel
            onClick={() => navigate(-1)}
            className="cursor-pointer text-3xl text-slate-600"
          />
        </div>
        {profileDataLoading ? (
          <OvalLoader />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* others physical information  */}
            <div className="pb-4">
              <label className="text-sm block pb-2 text-slate-600 font-medium">
                Height
              </label>
              <p className="text-left text-base font-medium">
                {" "}
                {height === 0 && heightDefault ? heightDefault : height}"{" "}
              </p>
              <Slider
                min={0}
                max={200}
                defaultValue={heightDefault}
                onChange={onHeightChange}
                onAfterChange={onAfterHeightChange}
              />
            </div>

            <div className="pb-4">
              <label className="text-sm block pb-2 text-slate-600 font-medium">
                Weight
              </label>
              <p className="text-left text-base font-medium">
                {" "}
                {weight === 0 && weightDefault ? weightDefault : weight} Kg{" "}
              </p>
              <Slider
                onChange={onWeightChange}
                onAfterChange={onAfterWeightChange}
                defaultValue={weightDefault}
                min={0}
                max={200}
              />
            </div>

            <div className="pb-4">
              <label className="text-sm block pb-2 text-slate-600 font-medium">
                Ancestry
              </label>
              <Select
                className="w-full mb-2"
                onChange={handleUserAncestryChange}
                defaultValue={ancestry}
                size="large"
                placeholder="Select Ancestry"
                options={[
                  {
                    value: "Khan",
                    label: "Khan",
                  },
                  {
                    value: "Majumder",
                    label: "Majumder",
                  },
                  {
                    value: "Ahmed",
                    label: "Ahmed",
                  },
                  {
                    value: "Ali",
                    label: "Ali",
                  },
                  {
                    value: "Das",
                    label: "Das",
                  },
                  {
                    value: "Barua",
                    label: "Barua",
                  },
                  {
                    value: "Chowdhury",
                    label: "Chowdhury",
                  },
                ]}
              />
            </div>

            <div className="pb-4">
              <label className="text-sm block pb-2 text-slate-600 font-medium">
                Skin Tone
              </label>
              <Select
                className="w-full mb-2"
                onChange={handleUserSkinToneChange}
                defaultValue={skinTone}
                placeholder="Select skin tone"
                size="large"
                allowClear
                options={[
                  {
                    value: "light",
                    label: "Light",
                  },
                  {
                    value: "fair",
                    label: "Fair",
                  },
                  {
                    value: "medium",
                    label: "Medium",
                  },
                  {
                    value: "deep",
                    label: "Deep (Dark)",
                  },
                ]}
              />
            </div>
            <div className="pb-4">
              <label className="text-sm block pb-2 text-slate-600 font-medium">
                Hair Color
              </label>
              <Select
                className="w-full mb-2"
                onChange={handleUserHairColorChange}
                defaultValue={hairColor}
                placeholder="Select hair color"
                size="large"
                allowClear
                options={[
                  {
                    value: "black",
                    label: "Black",
                  },
                  {
                    value: "brown",
                    label: "Brown",
                  },
                  {
                    value: "blond",
                    label: "Blond",
                  },
                  {
                    value: "white",
                    label: "White",
                  },
                  {
                    value: "gray",
                    label: "Gray",
                  },
                  {
                    value: "rarely red",
                    label: "Rarely Red",
                  },
                ]}
              />
            </div>

            <div className="pb-4">
              <label className="text-sm block pb-2 text-slate-600 font-medium">
                Hair Type
              </label>
              <Select
                className="w-full mb-2"
                onChange={handleUserHairTypeChange}
                defaultValue={hairType}
                placeholder="Select hair type"
                size="large"
                allowClear
                options={[
                  {
                    value: "fine",
                    label: "Fine",
                  },
                  {
                    value: "thick",
                    label: "Thick",
                  },
                  {
                    value: "long",
                    label: "Long",
                  },
                  {
                    value: "short",
                    label: "Short",
                  },
                  {
                    value: "matte",
                    label: "Matte",
                  },
                  {
                    value: "glossy",
                    label: "Glossy",
                  },
                  {
                    value: "curly",
                    label: "Curly",
                  },
                  {
                    value: "coily",
                    label: "Coily",
                  },
                  {
                    value: "straight",
                    label: "Straight",
                  },
                  {
                    value: "wavy",
                    label: "Wavy",
                  },
                ]}
              />
            </div>

            <div className="pb-4">
              <label className="text-sm block pb-2 text-slate-600 font-medium">
                Eye Color
              </label>
              <Select
                className="w-full mb-2"
                onChange={handleUserEyeColorChange}
                defaultValue={eyeColor}
                placeholder="Select hair type"
                allowClear
                size="large"
                options={[
                  {
                    value: "brown",
                    label: "Brown",
                  },
                  {
                    value: "hazel",
                    label: "Hazel",
                  },
                  {
                    value: "blue",
                    label: "Blue",
                  },
                  {
                    value: "green",
                    label: "Green",
                  },
                  {
                    value: "gray",
                    label: "Gray",
                  },
                  {
                    value: "amber",
                    label: "Amber",
                  },
                ]}
              />
            </div>

            <div className="pb-4">
              <label className="text-sm block pb-2 text-slate-600 font-medium">
                Number of Teeth
              </label>
              <Select
                className="w-full mb-2"
                onChange={handleNumberOfTeeth}
                defaultValue={numberOfTeeth}
                placeholder="Select teeth number"
                size="large"
                allowClear
                options={[
                  {
                    value: "20",
                    label: "20",
                  },
                  {
                    value: "21",
                    label: "21",
                  },
                  {
                    value: "22",
                    label: "22",
                  },
                  {
                    value: "23",
                    label: "23",
                  },
                  {
                    value: "24",
                    label: "24",
                  },
                  {
                    value: "25",
                    label: "25",
                  },
                  {
                    value: "26",
                    label: "26",
                  },
                  {
                    value: "27",
                    label: "27",
                  },
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
            <div>
              <button
                // type="submit"
                className="w-full text-center py-[10px] text-lg font-medium special_profile_button cursor-pointer"
              >
                Save
              </button>
              {isLoading && (
                <div className="mt-2">
                  <LinearProgress color="secondary" />
                </div>
              )}
            </div>
          </form>
        )}
      </div>
      <div>{contextHolder}</div>
      <div className="lg:hidden">
        <div className="h-12"></div>
        <BottomNav />
      </div>
    </div>
  );
};

export default EditPhysicalInfo;
