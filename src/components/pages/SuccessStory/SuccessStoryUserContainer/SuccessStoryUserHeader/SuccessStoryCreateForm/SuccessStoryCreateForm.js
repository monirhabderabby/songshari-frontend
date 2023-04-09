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

const SuccessStoryCreateForm = ({ setOpen }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [photos, setPhotos] = useState(null);
  const onDrop = useCallback((acceptedFiles) => {
    setPhotos(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // Redux api
  const [createSuccessStory, { data: response, isLoading, error }] =
    useCreateSuccessStoryMutation();

  const handleSuccessStoryForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("header", title);
    formData.append("body", description);
    formData.append("videoUrl", videoUrl);
    for (let i = 0; i < photos.length; i++) {
      formData.append("photos", photos[i]);
    }

    await createSuccessStory(formData);
  };

  useEffect(() => {
    if (response) {
      toast.success("Story Created Successfully");
      setTitle("");
      setDescription("");
      setVideoUrl("");
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
      setVideoUrl("");
      setOpen(false);
    }
  }, [response, error, setOpen]);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-[512px] bg-white p-6 rounded">
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

            <div className="mb-2">
              <TextField
                label="Video URL"
                variant="outlined"
                className="w-full"
                onChange={(e) => setVideoUrl(e.target.value)}
              />
            </div>

            {/* products photo */}
            <div className="w-full flex flex-col mb-8">
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
