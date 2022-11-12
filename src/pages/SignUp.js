import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ragistrationImg from "../../src/assets/images/gif/couple.gif";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data)
        reset()
    }
    return (
        <div>
            <div className='grid grid-cols-2 justify-center items-center container mx-auto'>
                <div>
                    <img className='rounded-lg' src={ragistrationImg} alt="Ragistration image" />
                </div>
                <div>
                    <div className="relative flex flex-col justify-center min-h-screen overflow-y-scroll">
                        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                            <div className='text-left'>
                                <h1 className="text-3xl font-semibold text-purple-700">
                                    Shahajan ajency
                                </h1>
                                <h1 className='text-4xl text-bold py-3 font-extrabold'>Wellcome to Shahajan ajency</h1>
                                <p>Let's create your profile! Just fill in the fields below, and we’ll get a new account.
                                </p>
                            </div>
                            <div className='text-left text-3xl'>
                                <h1 className='my-2 font-extrabold'>Acount Details</h1>
                                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                                    <div className="mb-2">
                                        <label
                                            for="email"
                                            className="text-start pl-2 block text-sm font-semibold text-gray-800"
                                        >
                                            Email
                                        </label>
                                        <input {...register('email', { required: true })}
                                            type="email"
                                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                        {errors.email && <p className='text-red-500'>Email is required.</p>}
                                    </div>
                                    <div className="mb-2">
                                        <label
                                            for="email"
                                            className="text-start pl-2 block text-sm font-semibold text-gray-800"
                                        >
                                            Email
                                        </label>
                                        <input {...register('email', { required: true })}
                                            type="email"
                                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                        {errors.email && <p className='text-red-500'>Email is required.</p>}
                                    </div>
                                    <div className="mb-2">
                                        <label
                                            for="email"
                                            className="text-start pl-2 block text-sm font-semibold text-gray-800"
                                        >
                                            Email
                                        </label>
                                        <input {...register('email', { required: true })}
                                            type="email"
                                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                        {errors.email && <p className='text-red-500'>Email is required.</p>}
                                    </div>
                                    <div className="mb-2">
                                        <label
                                            for="password"
                                            className="text-start pl-2 block text-sm font-semibold text-gray-800"
                                        >
                                            Password
                                        </label>
                                        <input {...register('password', { required: true })}
                                            type="password"
                                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                        {errors.password && <p className='text-red-500'>password is required.</p>}
                                    </div>
                                    <div>
                                        <h1 className='my-2 font-extrabold'>Profile Details</h1>
                                        <div className="mb-2">
                                            <label
                                                for="email"
                                                className="text-start pl-2 block text-sm font-semibold text-gray-800"
                                            >
                                                Email
                                            </label>
                                            <input {...register('email', { required: true })}
                                                type="email"
                                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                            {errors.email && <p className='text-red-500'>Email is required.</p>}
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                for="email"
                                                className="text-start pl-2 block text-sm font-semibold text-gray-800"
                                            >
                                                Email
                                            </label>
                                            <input {...register('email', { required: true })}
                                                type="email"
                                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                            {errors.email && <p className='text-red-500'>Email is required.</p>}
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                for="email"
                                                className="text-start pl-2 block text-sm font-semibold text-gray-800"
                                            >
                                                Email
                                            </label>
                                            <input {...register('email', { required: true })}
                                                type="email"
                                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                            {errors.email && <p className='text-red-500'>Email is required.</p>}
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                for="email"
                                                className="text-start pl-2 block text-sm font-semibold text-gray-800"
                                            >
                                                Email
                                            </label>
                                            <input {...register('email', { required: true })}
                                                type="email"
                                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                            {errors.email && <p className='text-red-500'>Email is required.</p>}
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                for="email"
                                                className="text-start pl-2 block text-sm font-semibold text-gray-800"
                                            >
                                                Email
                                            </label>
                                            <input {...register('email', { required: true })}
                                                type="email"
                                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                            {errors.email && <p className='text-red-500'>Email is required.</p>}
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <input className="cursor-pointer  w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" type="submit" value='Ragistration' />
                                    </div>
                                </form>
                            </div>
                            <p className="mt-8 text-xs font-light text-center text-gray-700">
                                {" "}
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="font-medium text-purple-600 hover:underline"
                                >
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