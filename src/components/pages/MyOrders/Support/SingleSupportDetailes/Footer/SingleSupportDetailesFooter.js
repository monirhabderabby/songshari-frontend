import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Input } from "antd";
import React from "react";

const { TextArea } = Input;

export const SingleSupportDetailesFooter = () => {
    return (
        <div className="h-auto mt-[20px] bg-white shadow-[rgba(0,0,0,0.05)_0px_6px_24px_0px,_rgba(0,0,0,0.08)_0px_0px_0px_1px] rounded-[8px] w-full pb-[10px]">
            <TextArea
                rows={2}
                style={{
                    resize: "none",
                }}
                bordered={false}
                placeholder="Write your response to Admin..."
            />
            <div className="flex justify-end px-[20px] gap-x-[20px]">
                <div>
                    <label htmlFor="attachment" className="flex items-center gap-x-[12px] ring-1 ring-gray-200 h-[40px] px-4 rounded-[8px]">
                        Attach <AttachFileIcon />
                    </label>
                    <input type="file" name="attachment" id="attachment" className="hidden" />
                </div>
                <button className="bg-[linear-gradient(315deg,#eb4786_0%,#b854ab_74%)] h-[40px] px-4 rounded-[8px] text-white font-Nunito font-medium hover:bg-[linear-gradient(315deg,#eb4786_20%,#b854ab_74%)] duration-200 hover:shadow-lg">
                    Send
                </button>
            </div>
        </div>
    );
};
