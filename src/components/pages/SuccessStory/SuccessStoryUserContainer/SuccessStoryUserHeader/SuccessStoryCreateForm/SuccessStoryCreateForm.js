// Configuration
import React, { useCallback, useState, useEffect } from "react";

// Third party package
import TextField from "@mui/material/TextField";
import { useDropzone } from "react-dropzone";
import Button from "@mui/material/Button";
import { IoClose } from "react-icons/io5";
import { toast } from "react-hot-toast";

// Components
import { useCreateSuccessStoryMutation } from "../../../../../../Redux/features/SuccessStory/successStoryApi";
import { AiOutlinePlus } from "react-icons/ai";
import { Oval } from "react-loader-spinner";
import { usePhotosUploadOnServerMutation } from "../../../../../../Redux/features/fileUpload/fileUploadApi";

const SuccessStoryCreateForm = ({ setOpen }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [photos, setPhotos] = useState(null);
  const onDrop = useCallback((acceptedFiles) => {
    setPhotos(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // Redux api
  const [
    photosUploadOnServer,
    { data: videoUploadResponse, isLoading: videoUploadLoading },
  ] = usePhotosUploadOnServerMutation();
  const [createSuccessStory, { data: response, isLoading, error }] =
    useCreateSuccessStoryMutation();

  const videoUploadHandler = (e) => {
    if (e.target.files) {
      const formData = new FormData();
      const video = e.target.files[0];
      formData.append("image", video);
      photosUploadOnServer(formData);
    }
  };

  const handleSuccessStoryForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("header", title);
    formData.append("body", description);
    formData.append("videoUrl", video);
    for (let i = 0; i < photos.length; i++) {
      formData.append("photos", photos[i]);
    }

    await createSuccessStory(formData);
  };

  useEffect(() => {
    if (videoUploadResponse) {
      const video = videoUploadResponse?.data[0]?.path;
      setVideo(video);
    }
  }, [videoUploadResponse]);

  useEffect(() => {
    if (response) {
      toast.success("Story Created Successfully");
      setTitle("");
      setDescription("");
      setVideo("");
      setOpen(false);
    }
    if (error) {
      toast.error(
        <p>
          Something went wrong. <br /> Please try again later.
        </p>
      );
      setTitle("");
      setDescription("");
      setVideo("");
      setOpen(false);
    }
  }, [response, error, setOpen]);

  return (
    <div className="flex justify-center items-center h-full mx-3 md:mx-0">
      <div className="w-[512px] bg-white p-3 md:p-6 rounded">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-gray-600 font-Inter font-medium">
            Share your success story
          </h1>
          <div onClick={() => setOpen(false)}>
            <IoClose className="border border-gray-500 text-2xl rounded-full hover:bg-gray-500 hover:text-white cursor-pointer duration-300" />
          </div>
        </div>
        <hr className="my-2" />
        <div className="pt-2">
          <form onSubmit={handleSuccessStoryForm}>
            <div className="mb-2">
              <TextField
                label="Title"
                required
                variant="outlined"
                className="w-full"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <TextField
                label="Description"
                variant="outlined"
                required
                multiline
                rows={3}
                className="w-full"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* <div className="mb-2">
              <TextField
                label="Video URL"
                variant="outlined"
                className="w-full"
                onChange={(e) => setVideoUrl(e.target.value)}
              />
            </div> */}

            {/* photo */}
            <div className="w-full flex flex-col mb-2">
              <div
                {...getRootProps()}
                className="bg-white rounded-[3.6px] h-[124px] shadow-[2px_2px_10px_rgba(0,0,0,0.1)] cursor-pointer"
              >
                <input type="file" accept=".png" {...getInputProps()} />
                {isDragActive ? (
                  <div className="h-full w-full flex justify-center items-center text-[13px] text-green-400">
                    Drop the files here ...
                  </div>
                ) : photos?.length > 0 ? (
                  <div className="w-full h-full flex flex-col items-center justify-center  text-[22px] text-green-400">
                    <p>
                      Total {photos?.length} <br /> Photos
                    </p>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center  text-[13px] text-[#707276]">
                    <p>
                      Drop photos here to{" "}
                      <span className="text-[#E41272]">Share your moments</span>
                    </p>
                    <p className="mt-1">
                      or <span className="text-[#E41272]">Browse</span>
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Video upload */}
            <div className="w-full mb-8">
              <div className="flex items-center gap-x-[22px] w-full">
                <label
                  htmlFor="videoUpload"
                  className="flex items-center justify-center gap-x-[27px] bg-white w-full h-[44px] shadow-[2px_2px_10px_rgba(0,0,0,0.1)] rounded-[4px] cursor-pointer"
                >
                  {videoUploadLoading ? (
                    <Oval
                      height={20}
                      width={20}
                      color="#CC1A7A"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      ariaLabel="oval-loading"
                      secondaryColor="#A72CC7"
                      strokeWidth={4}
                      strokeWidthSecondary={4}
                    />
                  ) : (
                    <>
                      {video ? (
                        <>
                          <span className="text-green-400 font-semibold font-Inter">
                            Video Moments Added
                          </span>
                        </>
                      ) : (
                        <p className="flex items-center gap-x-2 text-[#707276]">
                          Upload Video Moments
                          <AiOutlinePlus />
                        </p>
                      )}
                    </>
                  )}
                </label>
              </div>
              <input
                type="file"
                name="videoUpload"
                accept="video/*"
                id="videoUpload"
                className="hidden"
                onChange={videoUploadHandler}
              />
            </div>

            <div>
              <Button type="submit" variant="outlined">
                {isLoading ? "Loading..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCreateForm;
