import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../../assets/css/photogelary.css";
import { firebaseStorage } from "../../firebase.init";

const PhotoGelary = () => {
    const [photos, setPhotos] = useState([]);
    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    useEffect(() => {
        fetch("json/userImage.json")
            .then(res => res.json())
            .then(data => {
                setPhotos(data);
            });
    }, []);

    const handleChange = async e => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImages(prevState => [...prevState, newImage]);
        }
        handleUpload();
    };

    const handleUpload = async () => {
        const promises = [];
        images.map(async photo => {
            const storageRef = ref(firebaseStorage, `profile/${photo.name + uuidv4()}`);
            promises.push(uploadBytes);
            await uploadBytes(storageRef, photo).then(async snapshot => {
                await getDownloadURL(snapshot.ref).then(url => {
                    setUrls(prevState => [prevState, url.toString()]);
                });
            });
        });

        Promise.all(promises)
            .then(() => alert("all photo uploaded"))
            .catch(err => console.log(err));
    };

    console.log(urls)
    return (
        <div>
            <div className="photo-gelary p-6 text-left shadow">
                <div className="flex items-center mb-4">
                    <label htmlFor="photos">
                        <svg
                            color="#FF1D8E"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                            />
                        </svg>
                    </label>
                    <input type="file" id="photos" name="photos" onChange={handleChange} className="hidden" multiple />

                    <h1 className="text-2xl font-semibold ml-2">21 photo uploaded</h1>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-10">
                    {photos?.map((p, i) => {
                        return (
                            <div key={i + p} className="borderd m-1 main-box">
                                <div className="box ">
                                    <img className="rounded-md" src={p.img} alt="Not Available" />
                                </div>
                                <div className="intro text-center w-full flex justify-center items-center">
                                    <button className="py-1 px-2 btn btn-sm text-5xl rounded-lg font-extrabold">+</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="w-full flex justify-center mt-[15px]">
                <button className="py-[5px] px-[15px] shadow-[0px_5px_20px_0px_rgb(139_122_132/50%)]  bg-[linear-gradient(171deg,rgba(233,11,200,0.6979166666666667)_41%,rgba(166,2,241,0.79)_100%)] text-white rounded-[50px]">
                    See All
                </button>
            </div>
        </div>
    );
};

export default PhotoGelary;
