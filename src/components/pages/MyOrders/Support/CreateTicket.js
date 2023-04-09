import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Stack, Tooltip } from "@mui/material";
import { Input, Select, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useCreateTicketMutation } from "../../../../Redux/features/Ticket/ticketApi";
import { Modal } from "../../../modals/Modal";
import Error from "../../../ui/error/Error";
const { TextArea } = Input;

export const CreateTicket = ({ modalControll }) => {
    const [customError, setCustomError] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [category, setCategory] = useState("");
    const [priority, setPriority] = useState("");
    const [images, setImages] = useState(null);

    const [createTicket, { isLoading, isSuccess }] = useCreateTicketMutation();

    const handleSubmit = () => {
        // Error Handling
        if (subject === "") {
            setCustomError("Please enter a subject");
            return;
        } else if (category === "") {
            setCustomError("Please enter a category");
            return;
        } else if (message === "") {
            setCustomError("Please enter a message");
            return;
        } else {
            const formData = new FormData();
            formData.append("subject", subject);
            formData.append("category", category);
            formData.append("message", message);
            formData.append("priority", priority);
            for (let i = 0; i < images.length; i++) {
                formData.append("images", images[i]);
            }

            console.log(formData);

            // api call
            createTicket(formData);
        }
    };

    const handleError = () => {
        setCustomError("");
    };

    useEffect(() => {
        if (isSuccess) {
            modalControll();
        }
    }, [isSuccess, modalControll]);

    return (
        <Modal modalControll={modalControll}>
            <div className="w-full flex justify-between items-center">
                <h3 className="text-[22px] text-gray-500 font-Inter">Create Ticket</h3>
                <AiOutlineClose className="text-[22px] text-gray-400 hover:text-gray-500 cursor-pointer" onClick={modalControll} />
            </div>
            <Stack spacing={2}>
                <Input
                    placeholder="Subject"
                    size="large"
                    onChange={e => {
                        setSubject(e.target.value);
                        handleError();
                    }}
                    value={subject}
                />
                <Select
                    size="large"
                    options={[
                        {
                            value: "Sales",
                            label: "Sales",
                        },
                        {
                            value: "Account",
                            label: "Account",
                        },
                        {
                            value: "Shop",
                            label: "Shop",
                        },
                        {
                            value: "Course",
                            label: "Course",
                        },
                    ]}
                    placeholder="Select a Category"
                    onChange={value => {
                        setCategory(value);
                        handleError();
                    }}
                />
                <TextArea
                    rows={6}
                    style={{
                        resize: "none",
                    }}
                    placeholder="Write your message here..."
                    onChange={e => {
                        setMessage(e.target.value);
                        handleError();
                    }}
                />
                <div className="w-full flex justify-between items-center">
                    <div>
                        <label
                            htmlFor="attachment"
                            className={`flex items-center gap-x-[12px] ring-1 ring-gray-200 h-[40px] px-4 rounded-[8px] hover:ring-[#ff317b] cursor-pointer ${
                                images?.length > 0 && "ring-green-500"
                            }`}
                        >
                            {images?.length > 0 ? "Attached" : "Attach"} <AttachFileIcon className={`${images?.length > 0 && "text-green-500"}`} />
                        </label>
                        <input type="file" name="attachment" id="attachment" onChange={e => setImages(e.target.files)} className="hidden" multiple />
                    </div>
                    <div className="flex items-center gap-x-[10px]">
                        <Tooltip title="Low">
                            <div
                                className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
                                    priority.includes("low") && "bg-red-500"
                                }`}
                                onClick={() => setPriority("low")}
                            ></div>
                        </Tooltip>
                        <Tooltip title="Medium">
                            <div
                                className={`h-3 w-3 border-2 border-orange-500 md:hover:bg-orange-500 rounded-full cursor-pointer ${
                                    priority.includes("medium") && "bg-orange-500"
                                }`}
                                onClick={() => setPriority("medium")}
                            ></div>
                        </Tooltip>
                        <Tooltip title="High">
                            <div
                                className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
                                    priority.includes("high") && "bg-green-500"
                                }`}
                                onClick={() => setPriority("high")}
                            ></div>
                        </Tooltip>
                    </div>
                </div>
                {customError && <Error message={customError} />}
                <Spin spinning={isLoading} delay={500}>
                    <button
                        className="bg-[linear-gradient(315deg,#eb4786_0%,#b854ab_74%)] h-[40px] px-4 rounded-[8px] text-white font-Nunito font-medium hover:bg-[linear-gradient(315deg,#eb4786_20%,#b854ab_74%)] duration-200 hover:shadow-lg w-full"
                        onClick={handleSubmit}
                        disabled={isSuccess}
                    >
                        Send ticket
                    </button>
                </Spin>
            </Stack>
        </Modal>
    );
};
