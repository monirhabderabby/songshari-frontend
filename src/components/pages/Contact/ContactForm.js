/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState} from "react";
import "../../../assets/css/ContactForm.css";
import EmailIcon from '@mui/icons-material/Email';
import { useForm } from "react-hook-form";
import { useSendContactMessageMutation } from "../../../Redux/features/Contact/contactApi";
import { SuccessSnackBar } from "../../ui/error/snackBar/SuccessSnackBar";
import logoBlack from "../../../assets/images/Logo/logoBlack.png"
import { useEffect } from "react";
import Error from "../../ui/error/Error";

export const ContactForm = () => {
    const [successSnackBarOpen, setSuccessSnackBarOpen] =useState(false)
    const [sendContactMessage,{data, isLoading, error}] = useSendContactMessageMutation()
  const { handleSubmit, reset, register } = useForm();
  const onSubmit = (data) =>{
    sendContactMessage(data)
  }

  useEffect(()=>{
    if(data){
        setSuccessSnackBarOpen(true);
        reset()
    }
  },[data])
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <div className="flex flex-wrap">
            <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                <img src={logoBlack} alt="logo-black" />
              <h2 className="text-3xl font-bold my-6">Contact us</h2>
              <div className="flex">
              <EmailIcon style={{color:"#e32986"}}/>
              <span className="ml-3 underline font-bold text-gray-500 mb-2">itco.com.bd@gmail.com</span>
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-6">
                  <input
                    {...register("firstName",{required:true})}
                    type="text"
                    className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-[#e32986] focus:outline-none"
                    id="exampleInput7"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    {...register("lastName",{required:true})}
                    type="text"
                    className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-[#e32986] focus:outline-none"
                    id="exampleInput7"
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    {...register("email",{required:true})}
                    type="email"
                    className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-[#e32986] focus:outline-none"
                    id="exampleInput8"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group mb-6">
                  <textarea
                    {...register("message",{required:true})}
                    className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out m-0
              focus:text-gray-700 focus:bg-white focus:border-[#e32986] focus:outline-none
            "
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full font-bold py-1.5 bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white rounded transition duration-150 ease-in-out"
                >{isLoading? "Loading":"Send Message"}
                </button>
                {error && <Error message={error?.data?.message} />}
              </form>
              <SuccessSnackBar {...{ successSnackBarOpen, setSuccessSnackBarOpen, message:"Message Sent Successfully" }} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
