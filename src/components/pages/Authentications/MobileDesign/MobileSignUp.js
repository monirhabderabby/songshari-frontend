/* eslint-disable react-hooks/exhaustive-deps */
// configuration
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Third party packages
import { useDropzone } from "react-dropzone";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { AiFillFileAdd } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux";

// components
import logo from "../../../../assets/images/Logo/logoBlack.png";
import { auth } from "../../../../firebase.init";
import setCookie from "../../../../Helper/cookies/setCookie";
import { useRegAsMemberMutation } from "../../../../Redux/features/userInfo/userApi";
import { loadUserData } from "../../../../Redux/features/userInfo/userInfo";
import { MobileBackButton } from "../../../shared/Components/MobileBackButton";
import Error from "../../../ui/error/Error";
import { usePhotosUploadOnServerMutation } from "../../../../Redux/features/fileUpload/fileUploadApi";

const MobileSignUp = () => {
    // hook variable declaration
    const [photoURL, setPhotoUrl] = useState("");
    console.log(photoURL,"photo")
    const [customError, setCustomError] = useState("");
    const [agreement, setAgreement] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    // Redux Api Call
    const [regAsMember, { data: response, isLoading: serverLoading, error: responseError }] = useRegAsMemberMutation();
    const [uploadPhotoOnServer, { data: uploadedPhoto }] = usePhotosUploadOnServerMutation();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    // upload profile photo to firebase storage
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        const photo = acceptedFiles[0];
        if (photo) {
          const formData = new FormData();
          formData.append("image", photo);
          uploadPhotoOnServer(formData);
        }
        // console.log(photo, "upload photo");
        // const storageRef = ref(firebaseStorage, `profile/${photo.name + uuidv4()}`);
        // uploadBytes(storageRef, photo).then(async snapshot => {
        //     await getDownloadURL(snapshot.ref).then(url => {
        //         setPhotoUrl(url.toString());
        //     });
        // });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    // Effect Declaration

    useEffect(() => {
        if (user) {
            const userEmail = user?.user?.email;
            const data = {
                email: userEmail,
                googleLogin: true,
            };

            regAsMember(data);
        }
    }, [user, regAsMember]);

    useEffect(() => {
        if (response) {
            setCookie("token", response?.data?.token);
            dispatch(loadUserData(response));
            reset();
        }
        if (response?.data?.user?.googleLogin === false) {
            navigate("/mobileOtp");
        } else if (response?.data?.user?.googleLogin === true) {
            navigate("/registration-info");
        }
    }, [response, dispatch, reset, navigate]);

    useEffect(() => {
        if (responseError) {
            setCustomError(responseError.data.message);
        }
    }, [responseError]);

    useEffect(() => {
        if (photoURL) {
            setCustomError("");
        }
    }, [photoURL]);

    // function declaration
    const onSubmit = async data => {
        if (!agreement) {
            setCustomError("Please make sure you agree with our terms and conditions");
            return;
        }
        if (!photoURL) {
            setCustomError("Please wait a second for added your photo");
            return;
        }
        setCustomError("");
        if (photoURL) {
            delete data.image;
            data.profilePhoto = photoURL;
            data.role = "member";

            if (data.password !== data.confirmPassword) {
                setCustomError("Passwords do not match");
                return;
            }
            // Implement firebase registration
            await regAsMember(data);
        }
    };

    const emailHandler = () => {
        setCustomError("");
    };

    const handleAgreement = e => {
        setCustomError("");
        setAgreement(e.target.checked);
    };
    useEffect(() => {
      if (uploadedPhoto?.data) setPhotoUrl(uploadedPhoto?.data[0]?.path);
    }, [uploadedPhoto]);

    return (
        <div className="bg-[#F8F8FF] pb-2 max-w-[1024px] mx-auto">
            <MobileBackButton name="Sign Up" />
            <div className="flex justify-center mb-6 mt-2">
                <img src={logo} alt="Not Available" />
            </div>
            {/* google sign up  */}
            <div className="flex justify-center items-center my-3">
                <p
                    className="border-2 cursor-pointer border-gray-200 rounded-full p-3 mx-1 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-400 transition-all"
                    onClick={() => signInWithGoogle()}
                >
                    <FaGoogle className="text-sm" />
                </p>
            </div>{" "}
            <section>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-8">
                    {/* ---------- First Name ---------- */}
                    <section className="mb-4">
                        <div className="flex items-center bg-white p-4 w-full rounded-lg">
                            <input
                                {...register("firstName", {
                                    required: {
                                        value: true,
                                        message: "First name is required",
                                    },
                                })}
                                type="text"
                                placeholder="First name"
                                className="flex-1 outline-none h-full text-sm text-[#1E2022]"
                                id="firstName1"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.firstName?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.firstName.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Last Name ---------- */}
                    <section className="mb-4">
                        <div className="flex items-center bg-white p-4 w-full rounded-lg">
                            <input
                                {...register("lastName", {
                                    required: {
                                        value: true,
                                        message: "Last name is required",
                                    },
                                })}
                                type="text"
                                placeholder="Last name"
                                className="flex-1 outline-none h-full text-sm text-[#1E2022]"
                                id="lastName1"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.lastName?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.lastName.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Email ---------- */}
                    <section className="mb-4">
                        <div className="flex items-center bg-white p-4 w-full rounded-lg">
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
                                className="flex-1 outline-none h-full text-sm text-[#1E2022]"
                                id="email1"
                                onChange={emailHandler}
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
                    {/* ---------- Number ---------- */}
                    <section className="mb-4">
                        <div className="flex items-center bg-white p-4 w-full rounded-lg">
                            <input
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: "Phone is Required",
                                    },
                                })}
                                type="text"
                                placeholder="Number"
                                className="flex-1 outline-none h-full text-sm text-[#1E2022]"
                                id="phone1"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.phone?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.phone.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Password ---------- */}
                    <section className="mb-4">
                        <div className="flex items-center bg-white p-4 w-full rounded-lg">
                            <input
                                {...register("password", {
                                    minLength: {
                                        value: 8,
                                        message: "Password should be minimum 8 characters",
                                    },
                                    required: {
                                        value: true,
                                        message: "Password is Required",
                                    },
                                })}
                                type="password"
                                placeholder="Password"
                                className="flex-1 outline-none h-full text-sm text-[#1E2022]"
                                id="password1"
                                onChange={() => setCustomError("")}
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
                    {/* ---------- Confirm Password ---------- */}
                    <section className="mb-4">
                        <div className="flex items-center bg-white p-4 w-full rounded-lg">
                            <input
                                {...register("confirmPassword", {
                                    minLength: {
                                        value: 8,
                                        message: "Password should be minimum 8 characters",
                                    },
                                    required: {
                                        value: true,
                                        message: "Confirm Password is Required",
                                    },
                                })}
                                type="password"
                                placeholder="Confirm Password"
                                className="flex-1 outline-none h-full text-sm text-[#1E2022]"
                                id="confirmPassword1"
                                onChange={() => setCustomError("")}
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
                    {/* ---------- NID/ Passport number */}
                    <section className="mb-4">
                        <div className="flex items-center bg-white p-4 w-full rounded-lg">
                            <input
                                {...register("NidOrPassportNumber", {
                                    required: {
                                        value: true,
                                        message: "Nid Or Passport Number is Required",
                                    },
                                    minLength: {
                                        value: 10,
                                        message: "Nid Or Passport Number should be minimum 10 characters",
                                    },
                                })}
                                type="text"
                                placeholder="NID or Passport Number"
                                className="flex-1 outline-none h-full text-sm text-[#1E2022]"
                                id="NidOrPassportNumber1"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.NidOrPassportNumber?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.NidOrPassportNumber.message}</span>
                            )}
                            {errors.NidOrPassportNumber?.type === "minLength" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.NidOrPassportNumber.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Upload profile photo ---------- */}
                    <section>
                        <div className="flex items-center bg-white p-2 w-full mt-3 h-[197px]  justify-center rounded-[8px]">
                            <div
                                {...getRootProps()}
                                className="w-[242px] h-[132px] bg-white flex justify-center items-center shadow-[2px_2px_8px_2px_rgba(0,0,0,0.1)] cursor-pointer"
                            >
                                <input {...getInputProps()} />
                                {isDragActive ? (
                                    <p>Drop the files here ...</p>
                                ) : (
                                    <div className="flex gap-x-[15px] items-center">
                                        <span className={`${photoURL ? "text-green-400" : "text-[#000000]"} text-[12px] font-medium font-Inter`}>
                                            {photoURL ? "Photo Added" : "Upload File"}
                                        </span>{" "}
                                        <AiFillFileAdd className="text-[#E41272] h-[27px] w-[21px]" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                    {/* ---------------Input data end------------ */}
                    <div className="col-span-2">{customError && <Error message={customError} />}</div>
                    <div className="flex">
                        <input type="checkbox" className="focus:outline-none checked:bg-pink-500 mr-2 mt-6" onChange={handleAgreement} />
                        <p className="text-[#1E2022] mt-14 mb-5 text-xs leading-4">
                            By continuing, you agree to our <span className="text-blue-700">Terms of Service</span> and{" "}
                            <span className="text-blue-700" onClick={() => navigate("/privacymov")}>
                                Privacy Policy
                            </span>
                            .
                        </p>
                    </div>
                    <input
                        className="rounded-[48px] pt-3 pb-4 mb-5 w-full font-medium leading-4 text-white"
                        style={{ backgroundImage: "linear-gradient(180deg, #D21878 0%, #4F42A3 100%)" }}
                        type="submit"
                        value={serverLoading ? "Loading..." : "Complete Sign Up"}
                    />
                    <p className="text-[#202325] text-xs leading-6 mb-5">
                        Have an account?
                        <Link className="text-[#E41272] font-medium ml-1" to={"/login"}>
                            Log In
                        </Link>
                    </p>
                    <p className="text-[#202325] text-xs leading-6 mb-5">
                        Register as professional{" "}
                        <Link to="/mobile-signup-professional" className="text-[#E41272] font-medium ml-1">
                            REGISTER
                        </Link>
                    </p>
                </form>
            </section>
        </div>
    );
};

export default MobileSignUp;
