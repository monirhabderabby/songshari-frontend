import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState, useEffect } from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload, AiOutlineIdcard } from "react-icons/ai";
import { FaFacebookF, FaGoogle, FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { MdLockOutline, MdPhone } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "../../../App.css";
import { auth, firebaseStorage } from "../../../firebase.init";
import Error from "../../ui/error/Error";

const RegAsProfessional = () => {
    const [photoUploading, setPhotoUploading] = useState(false);
    const [photoUrl, setPhotoUrl] = useState("");
    const [customError, setCustomError] = useState("");
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleLoading] = useSignInWithGoogle(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async data => {
        if (!photoUrl) {
            setCustomError("Please wait a second for added your photo");
            return;
        }
        setCustomError("");
        delete data.image;
        data.photoURL = photoUrl;

        // Implement firebase registration
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.firstName + " " + data.lastName }, { photoURL: photoUrl });
        // await regAsMember(data);
    };

    const uploadPhoto = photo => {
        const storageRef = ref(firebaseStorage, `profile/${photo.name + uuidv4()}`);
        uploadBytes(storageRef, photo).then(async snapshot => {
            await getDownloadURL(snapshot.ref).then(url => {
                console.log(url.toString());
                setPhotoUrl(url.toString());
            });
        });
    };

    const photoHandler = async e => {
        setPhotoUploading(true);
        const photo = e.target.files[0];
        uploadPhoto(photo);

        setPhotoUploading(false);
    };

    useEffect(() => {
        if (error?.message === "Firebase: Error (auth/email-already-in-use).") {
            setCustomError("email already in use");
        }
    }, [error]);

    useEffect(() => {
        if (photoUrl) {
            setCustomError("");
        }
    }, [photoUrl]);

    useEffect(() => {
        if (user) {
            console.log(user);
        }
    }, [user]);

    return (
        <div className="min-h-screen">
            <section className="flex justify-center items-center w-full flex-1 text-center px-3 md:px-20  min-h-screen">
                <div className="bg-white rounded-2xl shadow-2xl md:flex w-[100%] md:w-3/4 lg:w-4/5 max-w-6xl relative">
                    <div className="w-full lg:w-3/5 p-5 my-auto">
                        <div className="text-left font-bold">
                            <span className="gradient_text font-george">Songshari.com</span>
                        </div>
                        <div className="py-10">
                            <h2 className="text-3xl font-bold gradient_text">Professional Registration</h2>
                            <div className="border-2 w-10 border-primary inline-block"></div>
                            <div className="flex justify-center items-center my-2">
                                <p className="border-2 cursor-pointer border-gray-200 rounded-full p-3 mx-1 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-400 transition-all">
                                    <FaFacebookF className="text-sm" />
                                </p>
                                <p className="border-2 cursor-pointer border-gray-200 rounded-full p-3 mx-1 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-400 transition-all"
                                    onClick={() => signInWithGoogle()}>
                                    <FaGoogle className="text-sm" />
                                </p>
                            </div>{" "}
                            {/* Social Login section */}
                            <p className="text-gray-400 my-3">or use your email account</p>
                            <div>
                                <form className="lg:w-full w-64 mx-auto lg:grid lg:gap-x-3 lg:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
                                    <section>
                                        <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl">
                                            <FaRegUser className=" m-2 text-gray-400" />
                                            <input
                                                {...register("firstName", {
                                                    required: {
                                                        value: true,
                                                        message: "First name is required",
                                                    },
                                                })}
                                                type="text"
                                                placeholder="First name"
                                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                                id="name"
                                            />
                                        </div>
                                        <h1 className="text-left ml-2">
                                            {errors.firstName?.type === "required" && (
                                                <span className="w-full text-left text-red-400 text-sm">{errors?.firstName.message}</span>
                                            )}
                                        </h1>
                                    </section>{" "}
                                    {/*first name field*/}
                                    <section>
                                        <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3 lg:mt-0">
                                            <FaRegUser className=" m-2 text-gray-400" />
                                            <input
                                                {...register("lastName", {
                                                    required: {
                                                        value: true,
                                                        message: "Last name is required",
                                                    },
                                                })}
                                                type="text"
                                                placeholder="Last name"
                                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                                id="lastName"
                                            />
                                        </div>
                                        <h1 className="text-left ml-2">
                                            {errors.lastName?.type === "required" && (
                                                <span className="w-full text-left text-red-400 text-sm">{errors?.lastName.message}</span>
                                            )}
                                        </h1>
                                    </section>{" "}
                                    {/*last name field*/}
                                    <section>
                                        <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                                            <FaRegEnvelope className=" m-2 text-gray-400" />
                                            <input
                                                {...register("email", {
                                                    required: {
                                                        value: true,
                                                        message: "Email is required",
                                                    },
                                                    pattern: {
                                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                        message: "Provide a Valid Email",
                                                    },
                                                })}
                                                type="email"
                                                placeholder="Email"
                                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                                id="email"
                                            />
                                        </div>
                                        <h1 className="text-left ml-2">
                                            {errors.email?.type === "required" && (
                                                <span className="w-full text-left text-red-400 text-sm">{errors?.email.message}</span>
                                            )}
                                            {errors.email?.type === "pattern" && (
                                                <span className="w-full text-left text-red-400 text-sm">{errors?.email.message}</span>
                                            )}
                                        </h1>
                                    </section>
                                    {/*Email field*/}
                                    <section>
                                        <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                                            <BsPersonLinesFill className=" m-2 text-gray-400" />
                                            <select
                                                {...register("designation", {
                                                    required: {
                                                        value: true,
                                                        message: "Designation is Required",
                                                    },
                                                })}
                                                type="text"
                                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                                id="designation"
                                            >
                                                <option className="m-8 p-8" value="">Select Designation</option>
                                                <option value="Kazi">Kazi</option>
                                                <option value="Agent">Agent</option>
                                                <option value="Lawyer">Lawyer</option>
                                            </select>
                                        </div>
                                        <h1 className="text-left ml-2">
                                            {errors.designation?.type === "required" && (
                                                <span className="w-full text-left text-red-400 text-sm">{errors?.designation.message}</span>
                                            )}
                                        </h1>
                                    </section>
                                    {/* Designation Field ---------------------------------------------*/}
                                    {/* <section>
                                        <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                                            <MdPhone className=" m-2 text-gray-400" />
                                            <input
                                                {...register("phone", {
                                                    required: {
                                                        value: true,
                                                        message: "Phone is Required",
                                                    },
                                                })}
                                                type="text"
                                                placeholder="Phone Number"
                                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                                id="phone"
                                            />
                                        </div>
                                        <h1 className="text-left ml-2">
                                            {errors.phone?.type === "required" && (
                                                <span className="w-full text-left text-red-400 text-sm">{errors?.phone.message}</span>
                                            )}
                                        </h1>
                                    </section> */}
                                    {/*Phone number field*/}
                                    <section>
                                        <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                                            <AiOutlineIdcard className=" m-2 text-gray-400" />
                                            <input
                                                {...register("NidOrPassportNumber", {
                                                    required: {
                                                        value: true,
                                                        message: "Nid Or Passport Number is Required",
                                                    },
                                                })}
                                                type="text"
                                                placeholder="NID or Passport Number"
                                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                                id="phone"
                                            />
                                        </div>
                                        <h1 className="text-left ml-2">
                                            {errors.NidOrPassportNumber?.type === "required" && (
                                                <span className="w-full text-left text-red-400 text-sm">{errors?.NidOrPassportNumber.message}</span>
                                            )}
                                        </h1>
                                    </section>
                                    {/*NID Number*/}
                                    <section>
                                        <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                                            <MdLockOutline className=" m-2 text-gray-400" />
                                            <input
                                                {...register("password", {
                                                    minLength: {
                                                        value: 6,
                                                        message: "password should be minimum 8 characters",
                                                    },
                                                    required: {
                                                        value: true,
                                                        message: "Password is Required",
                                                    },
                                                })}
                                                type="password"
                                                placeholder="Password"
                                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                                id="password"
                                            />
                                        </div>
                                        <h1 className="text-left ml-2">
                                            {errors.password?.type === "required" && (
                                                <span className="w-full text-left text-red-400 text-sm">{errors?.password.message}</span>
                                            )}
                                            {errors.password?.type === "minLength" && (
                                                <span className="w-full text-left text-red-400 text-sm">{errors?.password.message}</span>
                                            )}
                                        </h1>
                                    </section>
                                    <section>
                                        <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                                            <MdLockOutline className=" m-2 text-gray-400" />
                                            <input
                                                {...register("confirmPassword", {
                                                    minLength: {
                                                        value: 6,
                                                        message: "password should be minimum 8 characters",
                                                    },
                                                    required: {
                                                        value: true,
                                                        message: "Password is Required",
                                                    },
                                                })}
                                                type="password"
                                                placeholder="Confirm Password"
                                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                                id="confirmPassword"
                                            />
                                        </div>
                                        <h1 className="text-left ml-2">
                                            {errors.confirmPassword?.type === "required" && (
                                                <span className="w-full text-left text-red-400 text-sm">{errors?.confirmPassword.message}</span>
                                            )}
                                            {errors.confirmPassword?.type === "minLength" && (
                                                <span className="w-full text-left text-red-400 text-sm">{errors?.confirmPassword.message}</span>
                                            )}
                                        </h1>
                                    </section>
                                    <section>
                                        <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                                            <AiOutlineCloudUpload className=" m-2 text-gray-400" />
                                            <label htmlFor="userPhoto" className="outline-none h-full text-sm text-gray-400 bg-gray-100">
                                                {photoUploading ? "Uploading" : "Upload Image"}
                                            </label>
                                            <input
                                                {...register("image", {
                                                    required: {
                                                        value: true,
                                                        message: "Photo is Required",
                                                    },
                                                })}
                                                type="file"
                                                id="userPhoto"
                                                className="hidden"
                                                onChange={photoHandler}
                                            />
                                        </div>
                                        <h1 className="text-left ml-2">
                                            {errors.image?.type === "required" && (
                                                <span className="w-full text-left text-red-400 text-sm">{errors?.image.message}</span>
                                            )}
                                        </h1>
                                    </section>{" "}
                                    {/*attach file*/}
                                    {/* <div className="col-span-2">
                                        <Error message="Already  have an account" />
                                    </div> */}
                                    <div className="col-span-2">{customError && <Error message={customError} />}</div>
                                    <div className="col-span-2">
                                        <input
                                            type="submit"
                                            value={loading || updating || googleLoading ? "Loading..." : "SIGN UP"}
                                            className="border-2 cursor-pointer mt-6 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
                                        />
                                    </div>
                                </form>
                                <p className="mt-3">
                                    Register as member{" "}
                                    <Link to="/signup" className="gradient_text font-bold">
                                        REGISTER
                                    </Link>{" "}
                                </p>
                            </div>
                            {/*Input Field*/}
                        </div>
                    </div>{" "}
                    {/*Sign in section */}
                    <div className="hidden md:block bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] lg:w-2/5 p-5 text-white rounded-tr-2xl rounded-br-2xl md:py-36 md:px-4 lg:px-12">
                        <h2 className="font-bold text-3xl mb-2">Hello, Friend!</h2>
                        <div className="border-2 w-10 border-white inline-block"></div>
                        <p className="mb-4">If you have already an account </p>
                        <Link
                            to="/loginAsProfessional"
                            className="border-2 border-white rounded-full md:px-3 lg:px-12 py-2 hover:bg-white hover:text-primary duration-500 transition-all"
                        >
                            LOGIN
                        </Link>
                    </div>{" "}
                    {/*Sign up section */}
                </div>
            </section>
        </div>
    );
};

export default RegAsProfessional;
