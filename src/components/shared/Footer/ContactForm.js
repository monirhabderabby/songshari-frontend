/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { useSendContactMessageMutation } from "../../../Redux/features/Contact/contactApi";
import Error from "../../ui/error/Error";

const ContactForm = ({
  setShowPopup,
  setSuccessSnackBarOpen,
  successSnackBarOpen,
}) => {
  const [sendContactMessage, { data, isLoading, error }] =
    useSendContactMessageMutation();
  const { handleSubmit, reset, register } = useForm();
  const onSubmit = (data) => {
    sendContactMessage(data);
  };

  useEffect(() => {
    if (data) {
      setSuccessSnackBarOpen(true);
      setTimeout(() => setShowPopup(false), 300);
      reset();
    }
  }, [data]);
  return (
    <AnimatePresence>
      {setShowPopup && (
        <>
          <motion.div          
            onClick={(e) => setShowPopup(false)}
            className="fixed w-full h-full top-0 left-0 inset-0 z-10 bg-black/50 cursor-pointer"
          ></motion.div>
          <div>
          <motion.div           
            initial={{ translateX: '-50%', translateY: '0%' }}
            animate={{ translateX: '-50%', translateY: '-60%' }}
            exit={{ translateX: '-50%', translateY: '0%' }}
            transition={{ duration: 0.5 }}            
            className="rounded-xl sm:max-w-full bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] w-[500px] space-y-4 bg-white p-6 fixed top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="max-w-[1200px] mx-auto">
              <div className="container my-4 mx-auto">
                <h2 className="font-bold my-6 text-4xl text-white ">
                  Get in Touch
                </h2>
                <p className="text-white font-semibold text-xl my-4">
                  Reach Out to Us Today!
                </p>
                <div className="flex flex-wrap">
                  <div className="grow-0 shrink-0 basis-auto w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className=" w-full">
                      <div className="form-group mb-6">
                        <input
                          {...register("firstName", { required: true })}
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
                          {...register("lastName", { required: true })}
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
                          {...register("email", { required: true })}
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
                          {...register("message", { required: true })}
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
                        className="w-full font-bold bg-blue-700 py-3 shadow-xl text-white rounded transition duration-150 ease-in-out"
                        // className="special_profile_button_hover w-full hover:w-full text-white hover:py-3  py-3 rounded hover:rounded"
                      >
                        {isLoading ? "Loading..." : "Send Message"}
                      </button>
                      {error && <Error message={error?.data?.message} />}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
