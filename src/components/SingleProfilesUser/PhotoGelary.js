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
    // update photoes in personal details
    // useEffect(() => {
    //     const upload = async () => {
    //         const data = { photos: urls }
    //         const response = await updatePersonalDetails(data)
    //         if (response?.data && isSuccess) {
    //             window.alert("Photo updated succesfully")
    //         }
    //     }
    //     upload()
    // }, [])

    console.log(urls);
    return (
        <div className="w-full">
            <div>
                <Dragger onChange={handleChange} style={{ border: "none", background: "none" }} multiple={true} showUploadList={false}>
                    <div className="flex bg-white shadow-[0px_10px_5px_rgba(119,123,146,0.02)] rounded-[10px] p-6 w-[320px]">
                        <div className="ml-2">
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
                        <h1 className="text-lg font-bold ml-2"> Upload Photos</h1>
                    </div>
                </Dragger>
            </div>
            <div className="photo-gelary bg-white shadow-[0px_10px_5px_rgba(119,123,146,0.02)] rounded-[10px] p-6 w-[320px] text-left">
                <div className="mb-2">
                    <div className="flex">
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
                        <h1 className="text-lg font-bold ml-2">
                            {
                                photos?.length ? <p>{photos.length} Photos Uploaded</p> : <p>No Photos Uploaded</p>
                            }
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-2  ">
                    {photos?.map((p, i) => {
                        return (
                            <div key={i + p} className="borderd m-1 main-box">
                                <div className="box ">
                                    <img className="rounded-md" src={p} alt="Not Available" />
                                </div>
                                <div className="intro text-center w-full flex justify-center items-center">
                                    <button className="py-1 px-2 btn btn-sm text-5xl rounded-lg font-extrabold">+</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="w-full flex justify-center mt-[30px] md:block">
                <button className="py-[5px] px-[15px] shadow-[0px_5px_20px_0px_rgb(139_122_132/50%)]  bg-[linear-gradient(171deg,rgba(233,11,200,0.6979166666666667)_41%,rgba(166,2,241,0.79)_100%)] text-white rounded-[50px]">
                    See All
                </button>
            </div>
        </div>
    );
};

export default PhotoGelary;
