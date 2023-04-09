import React from "react";

export const SingleSupportDetailesBody = () => {
    const data = [
        {
            id: 1,
            image: "https://scontent.fdac28-1.fna.fbcdn.net/v/t39.30808-6/310814492_3383940818533755_1197676094327108122_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGA9lfn6WujkVz6fYFMVoFwjDMuNZrRHNWMMy41mtEc1bicZO-AvSF9FXCNTfRYimndHxJlLdYlNYLMqh4qcFXK&_nc_ohc=5FnTleXk218AX-0-gER&_nc_ht=scontent.fdac28-1.fna&oh=00_AfC2MERamDFxKpeJp4GC2mXoKNudOcmidMA-WBNUww3Dvw&oe=64378F9C",
            sender: true,
            message:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat",
        },
        {
            id: 2,
            image: "https://scontent.fdac28-1.fna.fbcdn.net/v/t39.30808-6/310814492_3383940818533755_1197676094327108122_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGA9lfn6WujkVz6fYFMVoFwjDMuNZrRHNWMMy41mtEc1bicZO-AvSF9FXCNTfRYimndHxJlLdYlNYLMqh4qcFXK&_nc_ohc=5FnTleXk218AX-0-gER&_nc_ht=scontent.fdac28-1.fna&oh=00_AfC2MERamDFxKpeJp4GC2mXoKNudOcmidMA-WBNUww3Dvw&oe=64378F9C",
            sender: false,
            message: "Iu am not",
        },
    ];
    return (
        <div className="h-[500px] mt-[20px] bg-white shadow-[rgba(0,0,0,0.05)_0px_6px_24px_0px,_rgba(0,0,0,0.08)_0px_0px_0px_1px] w-full overflow-y-auto px-[12px] rounded-[8px]">
            <div className="pt-[20px]">
                {data?.map(item => {
                    if (item.sender) {
                        return (
                            <div key={item.id} className="flex gap-x-[20px]">
                                <img className="w-[40px] h-[40px] rounded-full" src={item.image} alt="profile" />
                                <div>
                                    <p className="bg-gray-100 p-[10px] rounded-[4px]">{item.message}</p>
                                    <span className="text-gray-400 text-[12px]">11:30 PM</span>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div key={item.id} className="flex justify-end items-center gap-x-[20px]">
                                <div>
                                    <p>{item.message}</p>
                                    <span className="text-gray-400 text-[12px]">11:30 PM (Admin)</span>
                                </div>
                                <img className="w-[40px] h-[40px] rounded-full" src={item.image} alt="profile" />
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};
