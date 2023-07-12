import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Input, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useReOpenTicketMutation } from "../../../../../../Redux/features/Ticket/ticketApi";

const { TextArea } = Input;

export const SingleSupportDetailesFooter = () => {
    const [message, setMessages] = useState("");
    const [images, setImages] = useState(null);

    const { id } = useParams();

    const [reOpenTicket, { isLoading, isSuccess }] = useReOpenTicketMutation();

    const handleReply = () => {
        const formData = new FormData();
        formData.append("message", message);
        if (images && images.length > 0) {
            for (let i = 0; i < images.length; i++) {
                formData.append("images", images[i]);
            }
        }

        // api call
        reOpenTicket({
            id: id,
            data: formData,
        });
    };

    // set empty value when api response successfully
    useEffect(() => {
        if (isSuccess) {
            setMessages("");
        }
    }, [isSuccess]);
    return (
        <div className="h-auto mt-[20px] bg-white shadow-[rgba(0,0,0,0.05)_0px_6px_24px_0px,_rgba(0,0,0,0.08)_0px_0px_0px_1px] rounded-[8px] w-full pb-[10px]">
            <TextArea
                rows={2}
                style={{
                    resize: "none",
                }}
                bordered={false}
                value={message}
                placeholder="Write your response to Admin..."
                onChange={e => setMessages(e.target.value)}
            />
            <div className="flex justify-end px-[20px] gap-x-[20px]">
                <div>
                    <label
                        htmlFor="attachment"
                        className={`flex items-center gap-x-[12px] ring-1 ring-gray-200 h-[40px] px-4 rounded-[8px] ${
                            images?.length > 0 && "ring-green-500"
                        }`}
                    >
                        {images?.length > 0 ? "Attached" : "Attach"} <AttachFileIcon className={`${images?.length > 0 && "text-green-500"}`} />
                    </label>
                    <input type="file" name="attachment" id="attachment" className="hidden" onChange={e => setImages(e.target.files)} />
                </div>
                <Spin spinning={isLoading} delay={500}>
                    <button
                        className={`${
                            message !== "" ? "bg-[linear-gradient(315deg,#eb4786_0%,#b854ab_74%)]" : "bg-slate-400"
                        } h-[40px] px-4 rounded-[8px] text-white font-Nunito font-medium ${
                            message !== "" && "hover:bg-[linear-gradient(315deg,#eb4786_20%,#b854ab_74%)] hover:shadow-lg"
                        } duration-200`}
                        onClick={handleReply}
                        disabled={message === ""}
                    >
                        Send
                    </button>
                </Spin>
            </div>
        </div>
    );
};
