import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { AiOutlineLeft } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { auth } from "../../../../firebase.init";
import { useLoginAsMemberMutation } from "../../../../Redux/features/userInfo/userApi";
import { loadUserData } from "../../../../Redux/features/userInfo/userInfo";
import Error from "../../../ui/error/Error";

const MobileLogin = () => {
    const [customError, setCustomError] = useState("");
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [loginAsMember, { data: response, isLoading }] = useLoginAsMemberMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = async data => {
        data.role = "member";
        await signInWithEmailAndPassword(data.email, data.password);
        loginAsMember(data);
    };

    useEffect(() => {
        if (error?.message === "Firebase: Error (auth/wrong-password).") {
            setCustomError("You are entering the wrong password");
        }
        if (error?.message === "Firebase: Error (auth/user-not-found).") {
            setCustomError("User not found");
        }
    }, [error, setCustomError]);

    useEffect(() => {
        if (response) {
            localStorage.setItem("accessToken", response.token);
            dispatch(loadUserData(response));
            reset();
        }
        if (response && user) {
            navigate(from, { replace: true });
        }
    }, [response, dispatch, user, navigate, reset, from]);

    return (
        <div className="bg-[#F8F8FF] min-h-screen">
            <div className="text-[#1E2022] flex justify-start items-center gap-[33%] bg-white font-medium text-center text-lg leading-[18px] py-4 px-6  mb-6">
                <span>
                    <AiOutlineLeft onClick={() => navigate("/")} />
                </span>
                <p>Log In</p>
            </div>
            {/* google login  */}
            <div className="flex justify-center items-center my-2">
                <p
                    className="border-2 cursor-pointer border-gray-200 rounded-full p-3 mx-1 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-400 transition-all"
                    onClick={() => signInWithGoogle()}
                >
                    <FaGoogle className="text-sm" />
                </p>
            </div>{" "}
            <section>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-8">
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
                    <section>
                        <div className="flex items-center bg-white p-4 w-full rounded-lg">
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
                    <Link to={"/mobileForgetPassword"} className="text-[#E41272] text-xs leading-4 font-medium mt-6">
                        Forgot Password?
                    </Link>
                    <div className="col-span-2">{customError && <Error message={customError} />}</div>
                    <div className="flex">
                        <input type="checkbox" className="focus:outline-none checked:bg-pink-500 mr-2 mt-6" />
                        <p className="text-[#1E2022] mt-14 mb-5 text-xs leading-4">
                            By continuing, you agree to our Terms of Service and Privacy Policy.
                        </p>
                    </div>
                    <input
                        className="rounded-[48px] pt-3 pb-4 mb-5 w-full font-medium leading-4 text-white"
                        style={{ backgroundImage: "linear-gradient(180deg, #D21878 0%, #4F42A3 100%)" }}
                        type="submit"
                        value={loading || isLoading ? "Loading..." : "LOGIN"}
                    />
                    <p className="text-[#202325] text-xs leading-6 mb-5">
                        Don't have an account?
                        <Link className="text-[#E41272] font-medium ml-1" to={"/signup"}>
                            Sign Up
                        </Link>
                    </p>
                </form>
            </section>
        </div>
    );
};

export default MobileLogin;
