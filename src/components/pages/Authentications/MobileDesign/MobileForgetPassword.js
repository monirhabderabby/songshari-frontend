import React from 'react';
import { useState, useEffect } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { AiOutlineLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { auth } from '../../../../firebase.init';
import Error from '../../../ui/error/Error';
import forgetPasswordImg from '../../../../assets/images/auth/forgetPasswordImage.png';

const MobileForgetPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const [customError, setCustomError] = useState("");

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        data.role = "member";
        await sendPasswordResetEmail(data.email);
        reset();
    };

    useEffect(() => {
        if (error?.message === "Firebase: Error (auth/user-not-found).") {
            setCustomError("User not found");
        }
    }, [error, setCustomError]);

    return (
        <div className='bg-[#F8F8FF] pt-2 md:hidden'>
            <div
                className='text-[#1E2022] flex justify-start items-center gap-[33%] bg-white font-medium text-center text-lg leading-[18px] py-4 px-6 mx-2 mb-12'>
                <span><AiOutlineLeft /></span>
                <p>Log In</p>
            </div>
            <div>
                <h1 className='text-[#222222] text-center text-3xl font-medium leading-9'>
                    Forgot Password?
                </h1>
                <p className='text-[#888888] text-center font-medium leading-7 mt-2 px-4'>
                    If you are forget your password then please enter your email address below
                </p>
            </div>
            <div>
                <img className='w-48 mx-auto my-10' src={forgetPasswordImg} alt="Not Available" />
            </div>
            <section>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col mx-8"
                >
                    <section className="mb-5">
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
                    <div>
                        {customError && <Error message={customError} />}
                    </div>
                    <p className='text-[#888888] text-xs leading-6 mb-5'>
                        Remember password?
                        <Link className='text-[#E41272] font-medium ml-1' to={'/login'}>
                            Login
                        </Link>
                    </p>
                    <input
                        className='rounded-[48px] pt-3 pb-4 mb-16 w-full font-medium leading-4 text-white'
                        style={{ backgroundImage: "linear-gradient(180deg, #D21878 0%, #4F42A3 100%)" }}
                        type="submit"
                        value={sending ? "Sending..." : "Recover Password"}
                    />
                </form>
            </section>
        </div>
    );
};

export default MobileForgetPassword;