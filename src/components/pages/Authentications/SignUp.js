import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { AiOutlineIdcard } from "react-icons/ai";
import { FaGoogle, FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { MdLockOutline, MdPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../../../App.css";
import logo from "../../../assets/images/Logo/logoBlack.png";
import { auth } from "../../../firebase.init";
import { useRegAsMemberMutation } from "../../../Redux/features/userInfo/userApi";
import { loadUserData } from "../../../Redux/features/userInfo/userInfo";
import Error from "../../ui/error/Error";
import { TextField } from "./InputFields/TextField";
import MobileSignUp from "./MobileDesign/MobileSignUp";

const Signup = () => {
    const [regAsMember, { data: response, isLoading: serverLoading }] = useRegAsMemberMutation();
    const [customError, setCustomError] = useState("");
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading] = useSignInWithGoogle(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [gender, setGender] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const emailHandler = () => {
        setCustomError("");
    };

    const onSubmit = async data => {
        data.role = "member";
        data.gender = gender;
        console.log(data);
        // Implement firebase registration
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.firstName + " " + data.lastName });
        await regAsMember(data);
    };

    useEffect(() => {
        if (response) {
            console.log(response);
            localStorage.setItem("accessToken", response?.token);
            dispatch(loadUserData(response));
            reset();
            navigate("/userProfile");
        }
    }, [response, dispatch, reset, navigate, user, googleUser]);

    useEffect(() => {
        if (error?.message === "Firebase: Error (auth/email-already-in-use).") {
            setCustomError("email already in use");
        }
    }, [error]);

    return (
        <div>
            <div className="min-h-screen hidden md:block">
                <section className="flex justify-center items-center w-full flex-1 text-center px-3 md:px-20  min-h-screen">
                    <div className="bg-white rounded-2xl shadow-2xl lg:flex w-[100%] md:w-3/4 lg:w-4/5 max-w-6xl relative">
                        <div className="w-full lg:w-3/5 p-5 my-auto">
                            <div className="text-left font-bold">
                                <span className="gradient_text font-george">
                                    <img className="w-[150px]" src={logo} alt="logo" crossOrigin="anonymous" />
                                </span>
                            </div>
                            <div className="py-10">
                                <h2 className="text-3xl font-bold gradient_text">Member Registration</h2>
                                <div className="border-2 w-10 border-primary inline-block"></div>
                                <div className="flex justify-center items-center my-2">
                                    <p
                                        className="border-2 cursor-pointer border-gray-200 rounded-full p-3 mx-1 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-400 transition-all"
                                        onClick={() => signInWithGoogle()}
                                    >
                                        <FaGoogle className="text-sm" />
                                    </p>
                                </div>{" "}
                                {/* Social Login section */}
                                <p className="text-gray-400 my-3">or use your email account</p>
                                <div>
                                    <form className="lg:w-full w-64 mx-auto lg:grid lg:gap-x-3 lg:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
                                        <TextField
                                            {...{
                                                register,
                                                errors,
                                                icon: <FaRegUser className=" m-2 text-gray-400" />,
                                                id: "firstName",
                                                placeholder: "First name",
                                                name: "firstName",
                                                requiredMessage: "First name is required",
                                            }}
                                        />
                                        {/* <section>
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
                                                    id="firstName"
                                                />
                                            </div>
                                            <h1 className="text-left ml-2">
                                                {errors.firstName?.type === "required" && (
                                                    <span className="w-full text-left text-red-400 text-sm">{errors?.firstName.message}</span>
                                                )}
                                            </h1>
                                        </section>{" "}
                                        first name field */}
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
                                                    onChange={emailHandler}
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
                                        </section>
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
                                                        minLength: {
                                                            value: 10,
                                                            message: "Nid Or Passport Number should be minimum 10 characters",
                                                        },
                                                    })}
                                                    type="text"
                                                    placeholder="NID or Passport Number"
                                                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                                    id="NidOrPassportNumber"
                                                />
                                            </div>
                                            <h1 className="text-left ml-2">
                                                {errors.NidOrPassportNumber?.type === "required" && (
                                                    <span className="w-full text-left text-red-400 text-sm">
                                                        {errors?.NidOrPassportNumber.message}
                                                    </span>
                                                )}
                                                {errors.NidOrPassportNumber?.type === "minLength" && (
                                                    <span className="w-full text-left text-red-400 text-sm">
                                                        {errors?.NidOrPassportNumber.message}
                                                    </span>
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
                                                            value: 8,
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
                                                <MdLockOutline className=" m-2 text-gray-400" />
                                                <select
                                                    name="gender"
                                                    id="gender"
                                                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                                    required
                                                    onChange={e => setGender(e.target.value)}
                                                >
                                                    <option value="">Select Gender</option>
                                                    <option value="man">Man</option>
                                                    <option value="woman">Women</option>
                                                </select>
                                            </div>
                                            <h1 className="text-left ml-2">
                                                {errors.image?.type === "required" && (
                                                    <span className="w-full text-left text-red-400 text-sm">{errors?.image.message}</span>
                                                )}
                                            </h1>
                                        </section>{" "}
                                        {/*attach file*/}
                                        <div className="col-span-2">{customError && <Error message={customError} />}</div>
                                        <div className="col-span-2">
                                            <input
                                                type="submit"
                                                value={loading || updating || googleLoading || serverLoading ? "Loading..." : "SIGN UP"}
                                                className="border-2 cursor-pointer mt-6 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
                                            />
                                        </div>
                                    </form>
                                    <p className="mt-3">
                                        Register as professional{" "}
                                        <Link to="/regAsProfessional" className="gradient_text font-bold">
                                            REGISTER
                                        </Link>{" "}
                                    </p>
                                </div>
                                {/*Input Field*/}
                            </div>
                        </div>{" "}
                        <div className="h-[200px] w-full bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-br-2xl rounded-bl-2xl p-2 lg:hidden text-white">
                            <h2 className="font-bold text-3xl mb-2">Hello, Friend!</h2>
                            <div className="border-2 w-10 border-white inline-block"></div>
                            <p className="mb-4">Fill up your information and start journey with us</p>
                            <Link
                                to="/signup"
                                className="border-2 border-white rounded-full px-3 lg:px-12 py-2 hover:bg-white hover:text-primary duration-500 transition-all"
                            >
                                Sign Up
                            </Link>
                        </div>
                        {/*Sign in section */}
                        <div className="hidden md:block bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] lg:w-2/5 p-5 text-white rounded-tr-2xl rounded-br-2xl md:py-36 md:px-4 lg:px-12">
                            <h2 className="font-bold text-3xl mb-2">Hello, Friend!</h2>
                            <div className="border-2 w-10 border-white inline-block"></div>
                            <p className="mb-4">If you have already an account </p>
                            <Link
                                to="/login"
                                className="border-2 border-white rounded-full md:px-3 lg:px-12 py-2 hover:bg-white hover:text-primary duration-500 transition-all"
                            >
                                LOGIN
                            </Link>
                        </div>{" "}
                        {/*Sign up section */}
                    </div>
                </section>
            </div>
            <div className="md:hidden">
                <MobileSignUp />
            </div>
        </div>
    );
};

export default Signup;
