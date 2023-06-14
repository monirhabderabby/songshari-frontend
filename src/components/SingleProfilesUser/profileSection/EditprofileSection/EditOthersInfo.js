// Configuration
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

// Third party packages
import { message, Select } from "antd";
import { useForm } from "react-hook-form";

// Components
import {
  useGetProfileDetailsQuery,
  useUpdateOthersDetailsMutation,
} from "../../../../Redux/features/userInfo/userApi";
import { MdCancel } from "react-icons/md";
import { OvalLoader } from "../../../shared/Cards/Loader/OvalLoader/OvalLoader";

const EditOthersInfo = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [othersInfo, setOthersInfo] = useState({});

  const { handleSubmit } = useForm();
  // update query function
  const [updateOthersDetails, { isSuccess, isError, isLoading }] =
    useUpdateOthersDetailsMutation();

  const handleDoSmoke = (value) => {
    setOthersInfo({ ...othersInfo, doSmoke: value });
  };
  const handleDoDrink = (value) => {
    setOthersInfo({ ...othersInfo, doDrink: value });
  };
  const handleHavePet = (value) => {
    setOthersInfo({ ...othersInfo, havePet: value });
  };
  const handleHaveTattos = (value) => {
    setOthersInfo({ ...othersInfo, haveTattos: value });
  };
  const handleHaveVoluntaryExp = (value) => {
    setOthersInfo({ ...othersInfo, haveVoluntaryExp: value });
  };
  const handleDoTraveledOutsideBD = (value) => {
    setOthersInfo({ ...othersInfo, traveledOutsideBangladesh: value });
  };
  const handleJoinFamily = (value) => {
    setOthersInfo({ ...othersInfo, likeJoinFamily: value });
  };
  const handleLikeChildren = (value) => {
    setOthersInfo({ ...othersInfo, likeChildren: value });
  };
  const handleBelieveInGod = (value) => {
    setOthersInfo({ ...othersInfo, believeInGod: value });
  };

  const { id } = useParams();
  const { data: profileData, isLoading: profileDataLoading } =
    useGetProfileDetailsQuery(id);

  const {
    doSmoke,
    doDrink,
    havePet,
    haveTattos,
    haveVoluntaryExp,
    likeJoinFamily,
    likeChildren,
    believeInGod,
    traveledOutsideBangladesh,
  } = profileData?.othersDetail || {};

  //for navigate to user profile after update data
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    data = { ...othersInfo };
    await updateOthersDetails(data);
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
        navigate("/userprofile");
      }, 2000);
    }
  }, [isSuccess, isLoading, isError, messageApi, navigate]);

  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="max-w-[523px] mx-auto bg-white drop-shadow-lg px-4 pt-3 pb-6 mb-4 rounded">
        <div className="flex justify-end mb-3">
          <MdCancel
            onClick={() => navigate(-1)}
            className="cursor-pointer text-3xl text-slate-600"
          />
        </div>
        {profileDataLoading ? (
          <OvalLoader />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pb-4">
              <h1 className="text-sm block pb-2 text-slate-600 font-medium">
                Do you smoke?
              </h1>
              <Select
                className="w-full"
                size="large"
                placeholder="Do you smoke?"
                onChange={handleDoSmoke}
                defaultValue={doSmoke}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  { value: "left smoking", label: "Left smoking" },
                  { value: "occasional", label: "Occasional" },
                ]}
              />
            </div>
            <div className="pb-4">
              <h1 className="text-sm block pb-2 text-slate-600 font-medium">
                Do you Drink?
              </h1>
              <Select
                className="w-full"
                size="large"
                placeholder="Do you Drink?"
                onChange={handleDoDrink}
                defaultValue={doDrink}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "never", label: "Never" },
                  { value: "left drinking", label: "Left drinking" },
                  { value: "occasional", label: "Occasional" },
                ]}
              />
            </div>
            <div className="pb-4">
              <h1 className="text-sm block pb-2 text-slate-600 font-medium">
                Do you have pet?
              </h1>
              <Select
                className="w-full"
                size="large"
                placeholder="Do you have pet?"
                onChange={handleHavePet}
                defaultValue={havePet}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  {
                    value: "would like to have some",
                    label: "Would like to have some",
                  },
                  { value: "hate it", label: "Hate it" },
                ]}
              />
            </div>
            <div className="pb-4">
              <h1 className="text-sm block pb-2 text-slate-600 font-medium">
                Do you have tattos?
              </h1>
              <Select
                className="w-full"
                size="large"
                placeholder="Do you have tattos??"
                onChange={handleHaveTattos}
                defaultValue={haveTattos}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  {
                    value: "would like to have some",
                    label: "Would like to have some",
                  },
                  { value: "hate it", label: "Hate it" },
                ]}
              />
            </div>
            <div className="pb-4">
              <h1 className="text-sm block pb-2 text-slate-600 font-medium">
                Do you have voluntary experience?
              </h1>
              <Select
                className="w-full"
                size="large"
                placeholder="Do you voluntary experience?"
                onChange={handleHaveVoluntaryExp}
                defaultValue={haveVoluntaryExp}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  {
                    value: "would like to have some",
                    label: "Would like to have some",
                  },
                  {
                    value: "not interested in voluntaring",
                    label: "Not interested in volunteering",
                  },
                ]}
              />
            </div>
            <div className="pb-4">
              <h1 className="text-sm block pb-2 text-slate-600 font-medium">
                Do you Travel Outside Bangladesh?
              </h1>
              <Select
                className="w-full"
                size="large"
                placeholder="Do you travel outside Bangladesh?"
                onChange={handleDoTraveledOutsideBD}
                defaultValue={traveledOutsideBangladesh}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  {
                    value: "would like to have some",
                    label: "would like to have some",
                  },
                  {
                    value: "not interested in travelling",
                    label: "Not interested in traveling",
                  },
                ]}
              />
            </div>
            <div className="pb-4">
              <h1 className="text-sm block pb-2 text-slate-600 font-medium">
                Do you Like Join Family?
              </h1>
              <Select
                className="w-full"
                size="large"
                placeholder="Do you like join family?"
                onChange={handleJoinFamily}
                defaultValue={likeJoinFamily}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  { value: `I Wouldn't Mind`, label: `I Wouldn't Mind` },
                ]}
              />
            </div>
            <div className="pb-4">
              <h1 className="text-sm block pb-2 text-slate-600 font-medium">
                Do you Like children?
              </h1>
              <Select
                className="w-full"
                size="large"
                placeholder="Do you like children?"
                onChange={handleLikeChildren}
                defaultValue={likeChildren}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "More Than 2", label: "More Than 2" },
                  {
                    value: "I Don't Like Children",
                    label: "I Don't Like Children",
                  },
                ]}
              />
            </div>
            <div className="pb-4">
              <h1 className="text-sm block pb-2 text-slate-600 font-medium">
                Do you Believe in God?
              </h1>
              <Select
                className="w-full"
                size="large"
                placeholder="Do you Believe in God?"
                onChange={handleBelieveInGod}
                defaultValue={believeInGod}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  { value: `I Don't Care`, label: `I Don't Care` },
                ]}
              />
            </div>
            <div>
              <input
                type="submit"
                value="Save"
                style={{
                  background:
                    "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                }}
                className="w-full text-center py-[10px] text-[#fff]  text-lg font-medium rounded cursor-pointer"
              />
            </div>
          </form>
        )}
      </div>
      <div>{contextHolder}</div>
    </div>
  );
};

export default EditOthersInfo;
