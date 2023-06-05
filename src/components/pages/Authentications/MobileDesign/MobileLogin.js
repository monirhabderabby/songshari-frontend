// configuration
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

// Third party packages
import { FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux";

// components
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import setCookie from "../../../../Helper/cookies/setCookie";
import { useLoginAsMemberMutation, useRegAsMemberMutation } from "../../../../Redux/features/userInfo/userApi";
import { loadUserData } from "../../../../Redux/features/userInfo/userInfo";
import { auth } from "../../../../firebase.init";
import { MobileBackButton } from "../../../shared/Components/MobileBackButton";
import Error from "../../../ui/error/Error";

const MobileLogin = () => {
    const [customError, setCustomError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    // Redux API Call
    const [loginAsMember, { data: response, isLoading, error: responseError }] = useLoginAsMemberMutation();
    const [regAsMember, { data: googleLoginResponse, isLoading: googleLoginLoading }] = useRegAsMemberMutation();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    // js variable declare
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // useEffect Declaration
    useEffect(() => {
        if (response) {
            setCookie("token", response?.data?.token);
            dispatch(loadUserData(response?.data));
            reset();
            navigate(from, { replace: true });
        }
        if (googleLoginResponse) {
            setCookie("token", googleLoginResponse?.data?.token);
            dispatch(loadUserData(response));
            navigate("/userprofile");
            reset();
        }
    }, [response, googleLoginResponse, dispatch, from, navigate, regAsMember, reset]);

    useEffect(() => {
        if (responseError?.status === 401 && responseError?.data?.success === true) {
            setCookie("token", responseError?.data?.data?.token);
            dispatch(loadUserData(responseError?.data?.data));
            navigate(from, { replace: true });
        } else if (responseError?.status === 404) {
            setCustomError(responseError?.data?.message);
        } else if (responseError?.data?.message.includes("Invalid credential")) {
            setCustomError("Passwords do not match");
        }
    }, [responseError, navigate, from, dispatch]);

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

    // function declaration
    const onSubmit = async data => {
        data.profile = "mattrimonyAccess";
        loginAsMember(data);
    };

    return (
        <div className="bg-[#F8F8FF] min-h-screen max-w-[1024px] mx-auto">
            <MobileBackButton name="LOGIN" />
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
                    <Link to={"/mobileForgetPassword"} className="text-[#E41272] text-xs leading-4 font-medium my-6">
                        Forgot Password?
                    </Link>
                    <div className="col-span-2">{customError && <Error message={customError} />}</div>
                    <input
                        className="rounded-[48px] pt-3 pb-4 mb-5 w-full font-medium leading-4 text-white"
                        style={{ backgroundImage: "linear-gradient(180deg, #D21878 0%, #4F42A3 100%)" }}
                        type="submit"
                        disabled={isLoading || googleLoginLoading}
                        value={isLoading ? "Loading..." : "LOGIN"}
                    />
                    <p className="text-[#202325] text-xs leading-6 mb-5">
                        Don't have an account?
                        <Link className="text-[#E41272] font-medium ml-1" to={"/mobile-signup"}>
                            Sign Up
                        </Link>
                    </p>
                </form>
            </section>
        </div>
    );
};

export default MobileLogin;
