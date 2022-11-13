import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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
        <div className="bg-gray-100 ">
            <div className="grid grid-cols-2 justify-center items-center container mx-auto">
                <div style={{ width: "100%" }}>
                    <img style={{ width: "90%" }} className="rounded-md" src={loginGif} alt="login image" />
                </div>
                <div>
                    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                            <h1 className="text-3xl font-semibold text-center text-purple-700 underline">Sign in</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                                <div className="mb-2">
                                    <label for="email" className="text-start pl-2 block text-sm font-semibold text-gray-800">
                                        Email
                                    </label>
                                    <input
                                        {...register("email", { required: true })}
                                        type="email"
                                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                    {errors.email && <p className="text-red-500">Email is required.</p>}
                                </div>
                                <div className="mb-2">
                                    <label for="password" className="text-start pl-2 block text-sm font-semibold text-gray-800">
                                        Password
                                    </label>
                                    <input
                                        {...register("password", { required: true })}
                                        type="password"
                                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                    {errors.password && <p className="text-red-500">password is required.</p>}
                                </div>
                                <a href="#" className="text-xs text-purple-600 hover:underline">
                                    Forget Password?
                                </a>

                                <div className="mt-6">
                                    <input
                                        className="cursor-pointer  w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
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
                                <p className="mb-4">Sign up with your email</p>
                                <div className=" w-full flex justify-center">
                                    <button className="flex items-center justify-center cursor-pointer w-3/4 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-pink-500 rounded-full hover:bg-pink-600 focus:outline-none focus:bg-pink-600">
                                        <img style={{ width: "40px" }} src={google} alt="google logo" />
                                        <p className="pl-4"> Login form google</p>
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
