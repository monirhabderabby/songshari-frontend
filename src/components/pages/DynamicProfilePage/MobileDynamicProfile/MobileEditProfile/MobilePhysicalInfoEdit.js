// Configuration
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

// Third party packages
import LinearProgress from "@mui/material/LinearProgress";
import { message, Select, Slider } from "antd";
import { useForm } from "react-hook-form";

// Components
import { useUpdatePhysicalDetailsMutation } from "../../../../../Redux/features/userInfo/userApi";
import { BottomNav } from "../../../../../Wrapper/Home/mobileversion/BottomNav";
import { Link } from "react-router-dom";

const MobilePhysicalInfoEdit = () => {
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
  };
  const onAfterHeightChange = (value) => {};
  const onWeightChange = (value) => {
    setWeight(value);
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

  const navigate = useNavigate();
  //data submission function
  const onSubmit = async (data) => {
    data = { ...physicalInfo, height, weight };
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
        content: "Data updated succesfully",
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
        navigate("/mobileuserprofile");
      }, 2000);
    }
  }, [isSuccess, isLoading, isError, messageApi, navigate]);

  return (
    <div className="mx-6 mb-20">
      {/* Navigate previous page */}
      <div className="bg-[#FFFFFF] py-[10px] sticky top-0">
        <div className="bg-white w-full grid grid-cols-6 h-[48px]">
          <div className="pl-1 col-span-1">
            <Link onClick={() => navigate(-1)}>
              <i className="fa-solid text-sm text-[#1E2022] fa-chevron-left "></i>
            </Link>
          </div>
          <div className="col-span-4 ">
            <p className="text-center">Edit Physical Details</p>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
      <div className="max-w-[523px] mx-auto bg-white drop-shadow-lg px-4 py-6 mb-4 rounded">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* others physical information  */}
          <div className="pb-4">
            <label className="text-sm block pb-2 text-slate-600 font-medium">
              Height
            </label>
            <p className="text-left text-base font-medium"> {height}" </p>
            <Slider
              min={0}
              max={200}
              onChange={onHeightChange}
              onAfterChange={onAfterHeightChange}
            />
          </div>

          <div className="pb-4">
            <label className="text-sm block pb-2 text-slate-600 font-medium">
              Weight
            </label>
            <p className="text-left text-base font-medium"> {weight} Kg </p>
            <Slider
              onChange={onWeightChange}
              onAfterChange={onAfterWeightChange}
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
            <input
              type="submit"
              value="Save"
              style={{
                background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
              }}
              className="w-full text-center py-[10px] text-[#fff]  text-lg font-medium rounded"
            />
            {isLoading && (
              <div className="mt-2">
                <LinearProgress color="secondary" />
              </div>
            )}
          </div>
        </form>
      </div>
      <div>{contextHolder}</div>
      <BottomNav />
    </div>
  );
};

export default MobilePhysicalInfoEdit;
