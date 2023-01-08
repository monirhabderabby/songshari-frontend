import React from "react";
import { MessegeLeft } from "./MessegeLeft";
import { MessegeRight } from "./MessegeRight";

export const MessegeList = () => {
    const messeges = [
        {
            chat: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptat",
            time: "4.30 AM",
            id: 1,
            sender: "raj021159@gmail.com",
            reciever: "monirhrabby.personal@gmail.com",
        },
        {
            chat: "nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea",
            time: "9.00 AM",
            id: 2,
            sender: "monirhrabby.personal@gmail.com",
            reciever: "raj021159@gmail.com",
        },
        {
            chat: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptat",
            time: "4.30 AM",
            id: 3,
            sender: "raj021159@gmail.com",
            reciever: "monirhrabby.personal@gmail.com",
        },
        {
            chat: "nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea",
            time: "9.00 AM",
            id: 4,
            sender: "monirhrabby.personal@gmail.com",
            reciever: "raj021159@gmail.com",
        },
    ];
    return (
        <div className="relative rounded-br-[20px] rounded-bl-[20px]">
            <div className="h-full px-[15px] overflow-auto rounded-br-[20px] rounded-bl-[20px] pb-[50px]">
                <div className="h-[60vh] overflow-auto">
                    {messeges.map(messege => {
                        const email = "raj021159@gmail.com";
                        if (messege.sender === email) {
                            return <MessegeLeft key={messege.id} />;
                        } else {
                            return <MessegeRight key={messege.id} />;
                        }
                    })}
                </div>
            </div>
        </div>
    );
};
