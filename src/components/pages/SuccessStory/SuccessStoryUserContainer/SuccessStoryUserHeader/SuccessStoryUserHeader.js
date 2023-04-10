// Configuration
import React, { useState } from "react";

// Third party package
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "@mui/material/Modal";

// Components
import SuccessStoryCreateForm from "./SuccessStoryCreateForm/SuccessStoryCreateForm";
import { Toaster } from "react-hot-toast";

const SuccessStoryUserHeader = ({ successStory, error }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="mb-6">
      <div className="w-full flex flex-col md:flex-row justify-between">
        <h3 className="text-[20px] text-gray-600 mb-2 md:mb-0">
          My Success Story
        </h3>
        {!error && successStory?.data?.stories?.length === 0 ? (
          <button
            className="flex items-center gap-x-[10px] bg-[linear-gradient(315deg,#eb4786_0%,#b854ab_74%)] h-[40px] w-fit px-[12px] rounded-[4px] text-white text-[14px] lg:text-[16px]"
            onClick={() => handleOpen()}
          >
            <AiOutlinePlus />
            Create Success Story
          </button>
        ) : (
          ""
        )}
      </div>

      {/* Success story create form modal */}
      <Modal open={open} onClose={handleClose}>
        <SuccessStoryCreateForm {...{ setOpen }} />
      </Modal>

      <Toaster />
    </div>
  );
};

export default SuccessStoryUserHeader;
