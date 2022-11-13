import React, { useEffect, useState } from "react";
import "../../assets/css/photogelary.css";

const PhotoGelary = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch("json/userImage.json")
            .then(res => res.json())
            .then(data => {
                setPhotos(data);
            });
    }, []);
    return (
        <div>
            <div className="photo-gelary p-6 text-left">
                <div className="flex items-center mb-4">
                    <svg
                        color="blue"
                        xmlns="http://www.w3.org/2000/svg"
                        fill=""
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                        />
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                        />
                    </svg>
                    <h1 className="text-2xl ml-2">Hello i am developer</h1>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-10">
                    {photos?.map((p, i) => {
                        return (
                            <div key={i} className="borderd m-1 main-box">
                                <div className="box ">
                                    <img className="rounded-md" src={p.img} alt="" />
                                </div>
                                <div className="intro text-center w-full flex justify-center items-center">
                                    <button className="py-1 px-2 btn btn-sm bg-yellow-500 rounded-lg">ok</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PhotoGelary;
