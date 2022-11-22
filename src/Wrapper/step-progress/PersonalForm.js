import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { FaFacebookF, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../App.css";
import logo from "../../assets/images/Logo/logoBlack.png";
import { auth } from "../../firebase.init";
import Error from "../../../src/components/ui/error/Error";
import ForgetPasswordModal from "../../components/pages/Authentications/ForgetPassword/ForgetPasswordModal";
import { useLoginAsMemberMutation, useRegAsMemberMutation, useSetPersonalDetailsMutation } from "../../Redux/features/userInfo/userApi";
import { loadUserData } from "../../Redux/features/userInfo/userInfo";

const PersonalForm = () => {
    const [customError, setCustomError] = useState("");
    const [step,setStep] = useState(false);
    const [open, setOpen] = useState(false);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [personaldetails, { data: response, isLoading }] =  useSetPersonalDetailsMutation();
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

    const modalControll = () => {
        setOpen(!open);
    };

    const onSubmit = async data => {
      
        console.log(data);
        personaldetails(data);
        alert('Data Posted Successfully');
       setStep(true);
       navigate('/professionaldetailsform')
    };




    return (
        <div>

<div className='ml-96 mt-4'>
    {
         <Link
        to='/personaldetailsform'
      component="button"
      className='mr-12 text-blue-500'
      variant="body2"
      onClick={() => {
        console.info("I'm a button.");
      }}
    >
     Step 1
    </Link>

    }
   
    <Link
  component="button"
  className='mr-12'
  variant="body2"
  onClick={() => {
    console.info("I'm a button.");
  }}
>
  Step 2
</Link>
    <Link
  component="button"
  className='mr-12'
  variant="body2"
  onClick={() => {
    console.info("I'm a button.");
  }}
>
  Step 3
</Link>
    <Link
  component="button"
  className='mr-12'
  variant="body2"
  onClick={() => {
    console.info("I'm a button.");
  }}
>
  Step 4
</Link>
    <Link
  component="button"
  variant="body2"
  onClick={() => {
    console.info("I'm a button.");
  }}
>
  Step 5
</Link>
    </div>
           
    <section className="flex justify-center items-center w-full px-3 flex-1 text-center md:px-20 bg-gray-100 min-h-screen">
                <div className="bg-white rounded-2xl shadow-2xl md:flex w-[100%] md:w-3/4 lg:w-2/3 max-w-4xl">
                    <div className="w-full lg:w-3/5 p-5">
                        <div className="text-left font-bold">
                            <span className="gradient_text font-george">
                                <img className="w-[150px]" src={logo} alt="logo" />
                            </span>
                        </div>
                        <div className="py-10">
                           
                            
                            <div>
                                <form className="w-64 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                                    <section>
                                        <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl">
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
                                                id="email"
                                            />
                                        </div>
                                    </section>
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
                                                onChange={() => setCustomError("")}
                                            />
                                        </div>
                                    </section>
                                    <div className="col-span-2">{customError && <Error message={customError} />}</div>
                                    <input
                                        type="submit"
                                        value={loading || isLoading ? "Loading..." : "Next"}
                                        className=" mt-4"
                                    />
                                </form>

                            </div>
                            {/*Input Field*/}
                        </div>
                    </div>{" "}
                </div>
            </section>
           
            <Toaster />
        </div>
    );
};

export default PersonalForm;











