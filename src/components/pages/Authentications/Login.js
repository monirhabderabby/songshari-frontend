import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../../../assets/css/login.css";
import loginGif from "../../../assets/images/gif/teddy.gif";
import google from "../../../assets/images/icons/google.svg";

const Login = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data);
        reset();
    };
    return (
        <div className="mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center container mx-auto">
                <div style={{ width: "100%" }}>
                    <img style={{ width: "90%" }} className="rounded-md" src={loginGif} alt="login image" />
                </div>
                <div>
                    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                            <h1 className="login-title">Wellcome to shongshari</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                                <div className="mb-2">
                                    <label for="email" className="text-start pl-2 block text-sm font-semibold text-gray-800">
                                       Your Email*
                                    </label>
                                    <input
                                    placeholder="Enter your email"
                                        {...register("email", { required: true })}
                                        type="email"
                                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                    {errors.email && <p className="text-red-500">Email is required.</p>}
                                </div>
                                <div className="mb-2">
                                    <label for="password" className="text-start pl-2 block text-sm font-semibold text-gray-800">
                                        Password*
                                    </label>
                                    <input
                                    placeholder="password"
                                        {...register("password", { required: true })}
                                        type="password"
                                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                    {errors.password && <p className="text-red-500">password is required.</p>}
                                </div>
                                <a href="#" className="text-xs text-purple-600 hover:underline">
                                    Forget Password?
                                </a>

                                <div className="mt-6 flex justify-center">
                                    <input
                                        className="login-btn w-2/4 cursor-pointer px-4 py-2 tracking-wide text-white"
                                        type="submit"
                                        value="Login"
                                    />
                                </div>
                            </form>
                            <div class="relative flex py-5 items-center">
                                <div class="flex-grow border-t border-gray-400"></div>
                                <span class="flex-shrink mx-4 text-gray-400">Or</span>
                                <div class="flex-grow border-t border-gray-400"></div>
                            </div>
                            <div className="mt-2">
                                <p className="mb-4 text-center">Sign up with email</p>
                                <div className=" w-full flex justify-center">
                                    <button className="google-login-btn flex items-center justify-center cursor-pointer w-2/4 px-4 tracking-wide text-white transition-colors duration-200 transform">
                                        <img style={{ width: "40px" }} src={google} alt="google logo" />
                                        <p className="pl-4">Sign up with email</p>
                                    </button>
                                </div>
                            </div>

                            <p className="mt-8 text-xs font-light text-center text-gray-700">
                                {" "}
                                Don't have an account?{" "}
                                <Link to="/signup" className="font-medium text-purple-600 hover:underline">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
