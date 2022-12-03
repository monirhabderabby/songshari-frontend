import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { AiFillFileAdd, AiOutlineLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import logo from "../../../../assets/images/Logo/logoBlack.png";
import { auth, firebaseStorage } from "../../../../firebase.init";
import { useRegAsMemberMutation } from "../../../../Redux/features/userInfo/userApi";
import { loadUserData } from "../../../../Redux/features/userInfo/userInfo";
import Error from "../../../ui/error/Error";

const MobileSignUp = () => {
    const [regAsMember, { data: response, isLoading: serverLoading }] = useRegAsMemberMutation();
    const [photoURL, setPhotoUrl] = useState("");
    const [customError, setCustomError] = useState("");
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    // const emailHandler = () => {
    //     setCustomError("");
    // };

    const onSubmit = async data => {
        if (!photoURL) {
            setCustomError("Please wait a second for added your photo");
            return;
        }
        setCustomError("");
        if (photoURL) {
            delete data.image;
            data.profilePhoto = photoURL;
            data.role = "member";
            // Implement firebase registration
            await createUserWithEmailAndPassword(data.email, data.password);
            await updateProfile({ displayName: data.firstName + " " + data.lastName, photoURL: photoURL });
            await regAsMember(data);
        }
    };

    useEffect(() => {
        if (response) {
            localStorage.setItem("accessToken", response.token);
            dispatch(loadUserData(response));
            reset();
        }
        if (user && response) {
            navigate("/userProfile");
        }
    }, [response, dispatch, reset, navigate, user]);

    useEffect(() => {
        if (error?.message === "Firebase: Error (auth/email-already-in-use).") {
            setCustomError("email already in use");
        }
    }, [error]);

    const photoHandler = async e => {
        const photo = e.target.files[0];
        const storageRef = ref(firebaseStorage, `profile/${photo.name + uuidv4()}`);
        uploadBytes(storageRef, photo).then(async snapshot => {
            await getDownloadURL(snapshot.ref).then(url => {
                setPhotoUrl(url.toString());
            });
        });
    };

    useEffect(() => {
        if (photoURL) {
            setCustomError("");
        }
    }, [photoURL]);

    return (
        <div className="bg-[#F8F8FF] pt-2">
            <div className="text-[#1E2022] flex justify-start items-center gap-[33%] bg-white font-medium text-center text-lg leading-[18px] py-4 px-6 mx-2 mb-9">
                <span>
                    <AiOutlineLeft onClick={() => navigate("/")} />
                </span>
                <p>Sign Up</p>
            </div>
            <div className="flex justify-center mb-16">
                <img src={logo} alt="Not Available" />
            </div>
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
                                id="name"
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
                                id="name"
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
                                id="phone"
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
                                id="password"
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
                                id="confirmPassword"
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
                                id="NidOrPassportNumber"
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
                    <section className="mb-4">
                        <div className="flex items-center bg-white px-8 py-6 w-full rounded-lg">
                            <label
                                htmlFor="userPhoto"
                                className="outline-none h-full text-sm mx-auto text-[#1E2022] rounded-[10px]"
                                style={{ boxShadow: "2px 2px 8px 2px rgba(0, 0, 0, 0.1)" }}
                            >
                                {photoURL ? (
                                    <>
                                        <span className="text-green-400">Photo added</span>
                                    </>
                                ) : (
                                    <p className="flex justify-center items-center gap-2 text-xs font-medium leading-9 px-6 py-10 whitespace-nowrap">
                                        Upload Profile Photo
                                        <AiFillFileAdd className="text-[#E41272] text-2xl" />
                                    </p>
                                )}
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
                    </section>
                    {/* ---------------Input data end------------ */}
                    <div className="col-span-2">{customError && <Error message={customError} />}</div>
                    <p className="text-[#1E2022] mt-5 mb-5 text-xs leading-4">By continuing, you agree to our Terms of Service and Privacy Policy.</p>
                    <input
                        className="rounded-[48px] pt-3 pb-4 mb-5 w-full font-medium leading-4 text-white"
                        style={{ backgroundImage: "linear-gradient(180deg, #D21878 0%, #4F42A3 100%)" }}
                        type="submit"
                        value={loading || serverLoading ? "Loading..." : "Complete Sign Up"}
                    />
                    <p className="text-[#202325] text-xs leading-6 mb-5">
                        Have an account?
                        <Link className="text-[#E41272] font-medium ml-1" to={"/login"}>
                            Log In
                        </Link>
                    </p>
                </form>
            </section>
        </div>
    );
};

export default MobileSignUp;
