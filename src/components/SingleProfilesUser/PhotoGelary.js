import { Upload } from "antd";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../../assets/css/photogelary.css";
import { firebaseStorage } from "../../firebase.init";
// import { useUpdatePersonalDetailsMutation } from "../../Redux/features/userInfo/userApi";
const { Dragger } = Upload;

const PhotoGelary = ({ data, isLoading }) => {
    // const [updatePersonalDetails, { isSuccess }] = useUpdatePersonalDetailsMutation();
    const [photos, setPhotos] = useState([]);
    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        if (data) {
            console.log(photos);
            setPhotos(data?.photos);
        }
    }, [data, photos]);

    const handleChange = async e => {
        const fileList = e.fileList;

        for (let i = 0; i < fileList.length; i++) {
            const newImage = fileList[i];
            newImage["id"] = Math.random();
            setImages(prevState => [...prevState, newImage]);
        }
        handleUpload();
    };

    const handleUpload = async () => {
        const promises = [];
        const allUrl = [];
        images.map(async photo => {
            const storageRef = ref(firebaseStorage, `profile/${photo.name}` + uuidv4());

            promises.push(uploadBytes);
            await uploadBytes(storageRef, photo).then(async snapshot => {
                await getDownloadURL(snapshot.ref).then(url => {
                    // allUrl.push(url)
                    setUrls(prev => [...prev, url]);
                });
            });
        });

        Promise.all(promises)
            .then(values => {
                setUrls(allUrl);
            })
            .catch(err => console.log(err));
    };

    console.log(urls);
    return (
        <div className="w-full mt-[24px]">
            <div className="w-full h-[333px] rounded-[10px] bg-white px-[30px] py-[26px] shadow-[0px_10px_5px_rgba(119,123,146,0.02)]">
                <div className="flex items-center">
                    <div>
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
                    </div>
                    <div className="text-[#333333] font-semibold text-[24px] font-fira ml-[7px]">No photos</div>
                </div>
                <div className="h-[calc(333px-94px)] w-full flex justify-center items-center text-gray-400 text-[20px]">No Photos Uploaded</div>
            </div>
        </div>
    );
};

export default PhotoGelary;
