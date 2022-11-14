import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../../../assets/css/ragistration.css";

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
        <div className="container-fluid">
            <div className="grid grid-cols-1 md:grid-cols-12 justify-center items-center mx-auto">
                <div className="col-span-12 md:col-span-5 signup-bg-img">
                    <div className="mt-6 ml-24">
                        <Link className="text-white text-2xl" to='/'> {'< Go to home'} </Link>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-7">
                    <div className="w-full md:px-10">
                        <div className="account-details p-6 m-auto bg-white">
                            <div className="md:px-5">
                                <div className="text-left">
                                    <div className="pb-8 bg-white  md:fixed w-full top-0">
                                        <h1 className="font-extrabold pt-2 title-color text-4xl uppercase">shongshari</h1>
                                    </div>
                                    <div className="mt-10">
                                        <h1 className="text-4xl title-color uppercase text-bold py-3 font-extrabold">Wellcome to shongshari</h1>
                                        <p className="py-4">Let's create your profile! Just fill in the fields below, and we’ll get a new account.</p>
                                    </div>
                                </div>
                                <div className="text-left ">
                                    <h1 className="my-2 text-2xl title-color font-extrabold">Acount Details</h1>
                                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 from-text-size">
                                        <div className="mb-2">
                                            <label className="text-start pl-2 block font-semibold text-gray-800">
                                                User name *
                                            </label>
                                            <input
                                                {...register("uName", { required: true })}
                                                type="text"
                                                className="block input-field w-full px-4 py-2 mt-2 border rounded-md outline-none"
                                            />
                                            {errors.uName && <p className="text-red-500">User name is required.</p>}
                                        </div>
                                        <div className="mb-2">
                                            <label className="text-start pl-2 block font-semibold text-gray-800">
                                                Email Address*
                                            </label>
                                            <input
                                                {...register("email", { required: true })}
                                                type="email"
                                                className="block w-full input-field input-field px-4 py-2 mt-2 border rounded-md outline-none"
                                            />
                                            {errors.email && <p className="text-red-500">Email is required.</p>}
                                        </div>
                                        <div className="mb-2">
                                            <label className="text-start pl-2 block font-semibold text-gray-800">
                                                Password*
                                            </label>
                                            <input
                                                {...register("password", { required: true })}
                                                type="password"
                                                className="block w-full input-field px-4 py-2 mt-2 border rounded-md outline-none"
                                            />
                                            {errors.pasword && <p className="text-red-500">password is required.</p>}
                                        </div>
                                        <div className="mb-2">
                                            <label className="text-start pl-2 block font-semibold text-gray-800">
                                                Confirm password*
                                            </label>
                                            <input
                                                {...register("Cpassword", { required: true })}
                                                type="password"
                                                className="block w-full input-field px-4 py-2 mt-2 border rounded-md outline-none"
                                            />
                                            {errors.Cpassword && <p className="text-red-500">Confirm password is required.</p>}
                                        </div>
                                        <div>
                                            <h1 className="my-2 text-2xl font-extrabold title-color">Profile Details</h1>
                                            <div className="mb-2">
                                                <label className="text-start pl-2 block font-semibold text-gray-800">
                                                    Name*
                                                </label>
                                                <input
                                                    {...register("name", { required: true })}
                                                    type="text"
                                                    className="block w-full input-field px-4 py-2 mt-2 border rounded-md outline-none"
                                                />
                                                {errors.name && <p className="text-red-500">name is required.</p>}
                                            </div>
                                            <div className="mb-2">
                                                <label for="birthday" className="text-start pl-2 block font-semibold text-gray-800">
                                                    Birthday*
                                                </label>
                                                <input {...register("birthday")} type="date" id="birthday" name="birthday" className="block w-full input-field px-4 py-2 mt-2 border rounded-md outline-none"></input>
                                            </div>
                                            <div>
                                                <label className="text-start pl-2 block font-semibold text-gray-800">
                                                    I am*
                                                </label>
                                                <fieldset className="flex items-center justify-center w-full input-field px-4 py-2 mt-2 border rounded-md outline-none" id="group1">
                                                    <label className="pr-5" htmlFor="iamMan">
                                                        <input className=""
                                                            {...register("iam")}
                                                            type="radio"
                                                            value="man"
                                                            id="iamMan"
                                                        />
                                                        Man
                                                    </label>
                                                    <label htmlFor="iamWoman">
                                                        <input
                                                            {...register("iam")}
                                                            type="radio"
                                                            value="woman"
                                                            id="iamWoman"
                                                        />
                                                        Woman
                                                    </label>
                                                </fieldset>
                                                <label className="text-start pl-2 block font-semibold text-gray-800">
                                                    Lookin for*
                                                </label>

                                                <fieldset className="flex items-center justify-center w-full input-field px-4 py-2 mt-2 border rounded-md outline-none" id="group2">
                                                    <label className="pr-5" htmlFor="lookingforMan">
                                                        <input className=""
                                                            {...register("lookingfor")}
                                                            type="radio"
                                                            value="man"
                                                            id="lookingforMan"
                                                        />
                                                        Man
                                                    </label>
                                                    <label htmlFor="lookingforWoman">
                                                        <input
                                                            {...register("lookingfors")}
                                                            type="radio"
                                                            value="woman"
                                                            id="lookingforWoman"
                                                        />
                                                        Woman
                                                    </label>
                                                </fieldset>
                                            </div>
                                            <div>
                                                <label for="countries" className="block mb-2 font-medium text-gray-900 dark:text-gray-400">Marial status*</label>
                                                <select {...register("maritial", { required: true })} id="countries" className="block w-full input-field px-4 py-2 mt-2 border rounded-md outline-none">
                                                    <option selected>marid</option>
                                                    <option value="single">single</option>
                                                </select>
                                            </div>
                                            <div className="mb-2">
                                                <label for="city" className="text-start pl-2 block font-semibold text-gray-800">
                                                    city *
                                                </label>
                                                <input
                                                    id="city"
                                                    {...register("city", { required: true })}
                                                    type="text"
                                                    className="block w-full input-field px-4 py-2 mt-2 border rounded-md outline-none"
                                                />
                                                {errors.city && <p className="text-red-500">City is required.</p>}
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <input
                                                className="signup-btn"
                                                type="submit"
                                                value="Create your profile"
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
        </div>
    );
};

export default SignUp;
