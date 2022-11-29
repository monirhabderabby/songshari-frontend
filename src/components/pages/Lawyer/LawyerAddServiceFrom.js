import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import style from "./lawyeraddservicefrom.module.css";

const LawyerAddServiceFrom = () => {
    const [files, setFiles] = useState([]);
    const [imgUrl, setImgUrl] = useState("");
    const [isImage, setImage] = useState(false);

    const {
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: { 'image/*': [] }, onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });
    const loading = () => {
        if (isImage) {
            return (
                <div>
                    <p>Loading......</p>
                </div>
            )
        }
    }

    const handelImagUpload = (e) => {
        setImage(true);
        const image = e;
        const fromData = new FormData();
        fromData.set("image", image);
        axios
            .post(
                "https://api.imgbb.com/1/upload?key=79fd0b725c9bb9b85e875f16c38c1622",
                fromData
            )
            .then((res) => {
                setImgUrl(res.data.data.display_url);
                setImage(false);
            })
            .catch((error) => {
                setImage(false);
            });
    };

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
        if (files.length) {
            const file = files.map(p => p)
            handelImagUpload(file[0])
        }
    }, [files]);

    return (
        <div className='container mx-auto mt-16'>
            <div>
                <div className='mb-10 flex justify-center'>
                    <button className={`${style.service_btn}`}>ADD NEW SERVICE</button>
                </div>
                {/* service from */}
                <div className='mb-16'>
                    <h1 className='text-[32px] font-bold'>Fill The Bleow From To Add Your Own Lawyer Service</h1>
                </div>
                <div className='flex justify-center'>
                    <div className='w-[876px] bg-white p-2 mt-16 my-6'>
                        <div className='text-left'>
                            <h1>Add Your Lawyer Service</h1>
                            <p className='py-2'>Service: A packet service you can deliver For a fixed price ia A set Timefrom</p>
                            <hr />
                        </div>
                        <div>
                            <div className='mt-2 border-2 py-1 px-2 rounded-sm'>
                                <div className='flex justify-between items-center'>
                                    <p>I can do</p>
                                    <div>
                                        <label className='mr-2' for="rate">For:</label>
                                        <select className={`rounded-sm px-6 py-2 text-center bg-[#dce0eb] ${style.select}`} id="rate">
                                            <option selected value="100">$100</option>
                                            <option value="300">$300</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between px-2'>
                                <p><small>e.g : I can do lawyer for 100$</small></p>
                                <p>CUSTOMIZE PRICES</p>
                            </div>
                        </div>
                        <div className='pt-8'>
                            <div>
                                <p>WHEN YOU DELIVERY THE OFFER</p>
                            </div>
                            <div className='mt-2 border-2 py-1 px-2 rounded-sm'>
                                <div className='flex justify-between items-center'>
                                    <div className='w-full'>
                                        <select className={`rounded-sm py-2 text-left w-full`} id="day">
                                            <option selected value="10">in 10 day</option>
                                            <option value="20">in 20 day</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className='pt-8'>
                                <div>
                                    <p>WHEN YOU DELIVERY THE OFFER</p>
                                </div>
                                <div className='mt-2 border-2 py-1 px-2 rounded-sm'>
                                    <div className='flex justify-between items-center'>
                                        <div className='w-full'>
                                            <select className={`rounded-sm py-2 text-left w-full`} id="day">
                                                <option selected value="10">in 10 day</option>
                                                <option value="20">in 20 day</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-8'>
                                <div>
                                    <p>WHEN YOU DELIVERY THE OFFER</p>
                                </div>
                                <div className='mt-2 border-2 py-1 px-2 rounded-sm'>
                                    <div className='flex justify-between items-center'>
                                        <div className='w-full'>
                                            <select className={`rounded-sm py-2 text-left w-full`} id="day">
                                                <option selected value="10">in 10 day</option>
                                                <option value="20">in 20 day</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <p>ADD TAGS (MAX 5)</p>
                            <div className='mt-2 border-2 py-1 px-2 rounded-sm'>
                                <div className='w-full h-10'>
                                    <input className='w-full h-10 outline-none' placeholder='Type here to add ..' type="text" />
                                </div>
                            </div>
                            <div className='px-2 mt-2'>
                                <p><small>Can't find a skil? <a className='text-red-500' href="!#">Contact us </a>to addd it.</small></p>
                            </div>
                        </div>
                        <div className="mt-8 " >
                            <p>Make it fun.Upload a image</p>
                            <div className="mt-2 border-2 bg-[#98999C]">
                                <div className='flex items-center h-full'>
                                    <div className={`container ${style.box_2} px-24 text-center`}>
                                        <div {...getRootProps({})}>
                                            <input {...getInputProps()} />
                                            <p>Drag 'n' drop some files here, or <span className='text-[#E41272] cursor-pointer'>click</span> to select files</p>
                                        </div>
                                    </div>
                                    <div className={`${style.h_devider}`}></div>
                                    <div className={`${style.box_2} px-24 text-center`}>
                                        Embed form other stage
                                    </div>
                                </div>

                            </div>
                        </div>
                        {loading()}
                        <div className={isImage ? 'hidden' : 'block'}>
                            <img className="w-52 h-52 rounded-full" src={imgUrl} alt="Not Available" />
                        </div>
                        <div className='mt-8'>
                            <p>Provide more details about your offer</p>
                            <div className='mt-2 border-2 py-1 px-2 rounded-sm'>
                                <div className='w-full h-20'>
                                    <input className='w-full h-20 outline-none' type="text" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <p>Provide a description for more offer, optimized your search results</p>
                            <div className='mt-2 border-2 py-1 px-2 rounded-sm'>
                                <div className='w-full h-20'>
                                    <input className='w-full h-20 outline-none' type="text" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <p>Earn extra money-offer optainal add-onservices to the buyer</p>
                            <div className='mt-2 border-2 py-1 px-2 rounded-sm'>
                                <div className='flex justify-end items-center'>
                                    <div>
                                        <label className='mr-4' for="rate">For</label>
                                        <select className={`rounded-sm px-6 py-2 text-center bg-[#dce0eb]`} id="rate">
                                            <option selected value="100">$100</option>
                                            <option value="300">$300</option>
                                        </select>
                                    </div>
                                    <div className='ml-3'>
                                        <label className='mr-4' for="rate">in</label>
                                        <select className={`rounded-sm px-6 py-2 text-center bg-[#dce0eb]`} id="rate">
                                            <option selected value="100">$100</option>
                                            <option value="300">$300</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end pr=2'>
                                <p><small className='text-red-500'>+ add more items </small></p>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <p>What do you need from the buyer to ger dtartup</p>
                            <div className='mt-2 border-2 py-1 px-2 rounded-sm'>
                                <div className='w-full h-20'>
                                    <input className='w-full h-20 outline-none' type="text" />
                                </div>
                            </div>
                        </div>
                        <div className='py-10'>
                            <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate blanditiis fuga, deserunt eum eos nostrum nam voluptas quam! Consequuntur, ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis atque incidunt, et corporis nesciunt vitae, a sequi quo hfhgfhgfhgjhfvfjfjvjfgj hello <a className='text-red-500' href="!#">T&Cs</a></small></p>
                        </div>
                        <div className={`py-4 ${style.submit_btn}`}>
                            <button>SUBMIT OFFER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LawyerAddServiceFrom;