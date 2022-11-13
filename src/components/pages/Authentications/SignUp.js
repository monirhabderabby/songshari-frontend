import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../../../assets/css/ragistration.css";
import ragistrationImg from "../../../assets/images/gif/couple.gif";

const SignUp = () => {
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
        <div>
            <div className="grid grid-cols-1 md:grid-cols-12 justify-center items-center mx-auto">
                <div className="img-container col-span-12 md:col-span-5">
                    <img className="rounded-lg" src={ragistrationImg} alt="Ragistration image" />
                </div>
                <div className="col-span-12 md:col-span-7">
                    <div className="w-full md:px-4">
                        <div className="account-details p-6 m-auto bg-white shadow-md">
                            <div className="text-left">
                                <div className="pb-8">
                                    <h1 className="bg-white fixed w-full top-0 font-extrabold text-purple-700 text-4xl">Shahajan ajency</h1>
                                </div>
                                <h1 className="text-4xl text-bold py-3 font-semibold">Wellcome to Shahajan ajency</h1>
                                <p>Let's create your profile! Just fill in the fields below, and we’ll get a new account.</p>
                            </div>
                            <div className="text-left ">
                                <h1 className="my-2 font-semibold">Acount Details</h1>
                                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                                    <div className="mb-2">
                                        <label for="email" className="text-start pl-2 block text-sm font-semibold text-gray-800">
                                            User name *
                                        </label>
                                        <input
                                            {...register("uName", { required: true })}
                                            type="text"
                                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                        {errors.uName && <p className="text-red-500">Email is required.</p>}
                                    </div>
                                    <div className="mb-2">
                                        <label for="email" className="text-start pl-2 block text-sm font-semibold text-gray-800">
                                            Email Address*
                                        </label>
                                        <input
                                            {...register("email", { required: true })}
                                            type="email"
                                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                        {errors.email && <p className="text-red-500">Email is required.</p>}
                                    </div>
                                    <div className="mb-2">
                                        <label for="email" className="text-start pl-2 block text-sm font-semibold text-gray-800">
                                            Password*
                                        </label>
                                        <input
                                            {...register("password", { required: true })}
                                            type="password"
                                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                        {errors.pasword && <p className="text-red-500">Email is required.</p>}
                                    </div>
                                    <div className="mb-2">
                                        <label for="password" className="text-start pl-2 block text-sm font-semibold text-gray-800">
                                            Confirm password*
                                        </label>
                                        <input
                                            {...register("Cpassword", { required: true })}
                                            type="password"
                                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                        {errors.Cpassword && <p className="text-red-500">password is required.</p>}
                                    </div>
                                    <div>
                                        <h1 className="my-2 font-extrabold">Profile Details</h1>
                                        <div className="mb-2">
                                            <label for="email" className="text-start pl-2 block text-sm font-semibold text-gray-800">
                                                Name*
                                            </label>
                                            <input
                                                {...register("name", { required: true })}
                                                type="text"
                                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                            {errors.name && <p className="text-red-500">Email is required.</p>}
                                        </div>
                                        <div className="mb-2">
                                            <label for="birthday" className="text-start pl-2 block text-sm font-semibold text-gray-800">
                                                Birthday*
                                            </label>
                                            <input {...register("birthday")} type="date" id="birthday" name="birthday" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"></input>
                                        </div>
                                        <div>
                                            <label className="text-start pl-2 block text-sm font-semibold text-gray-800">
                                                I am*
                                            </label>
                                            <fieldset className="text-center block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" id="group1">
                                                <input type="radio" id="Man" name="fav_language" value="HTML" />
                                                <label for="Man">Man</label>
                                                <input className=" ml-5" type="radio" id="Woman" name="fav_language" value="CSS" />
                                                <label for="Woman">Woman</label>
                                            </fieldset>
                                            <label className="text-start pl-2 block text-sm font-semibold text-gray-800">
                                                Lookin for*
                                            </label>

                                            <fieldset className="text-center block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" id="group2">
                                                <input type="radio" id="man" name="language" value="Man" />
                                                <label for="man">Man</label>
                                                <input className="ml-5" type="radio" id="woman" name="language" value="Woman" />
                                                <label for="woman">Woman</label>
                                            </fieldset>
                                        </div>
                                        <div>
                                            <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Marial status*</label>
                                            <select {...register("maritial", { required: true })} id="countries" className="text-center block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                                <option selected>marid</option>
                                                <option value="US">single</option>
                                            </select>
                                        </div>
                                        <div className="mb-2">
                                            <label for="city" className="text-start pl-2 block text-sm font-semibold text-gray-800">
                                                city *
                                            </label>
                                            <input
                                                id="city"
                                                {...register("city", { required: true })}
                                                type="text"
                                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                            {errors.city && <p className="text-red-500">Email is required.</p>}
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <input
                                            className="cursor-pointer  w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                                            type="submit"
                                            value="Ragistration"
                                        />
                                    </div>
                                </form>
                            </div>
                            <p className="mt-8 text-xs font-light text-center text-gray-700">
                                {" "}
                                Already have an account?{" "}
                                <Link to="/login" className="font-medium text-purple-600 hover:underline">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
