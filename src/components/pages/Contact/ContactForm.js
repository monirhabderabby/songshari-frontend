import React from 'react';
import { useForm } from "react-hook-form";
import '../../../assets/css/ContactForm.css';


export const ContactForm = () => {
    const { register } = useForm();
  return (
    <div className=''>
        <h1 className='text-secondary font-bold font-syne text-2xl text-center mt-20'>Contact Us</h1>
        <h1 className='text-black font-bold text-5xl text-center mt-4 '>Get in Touch</h1>
        <p className='text-center mt-4 text-lg'>We'd love to hear from you! Let us know how we can help.</p>

<div className='contact-form'>
<section className="mb-10 ml-64 w-full">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="input input-bordered">
                                        <label className="sr-only" htmlFor="name">
                                            Name
                                        </label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Name"
                                            type="text"
                                            id="name"
                                            name="name"
                                        />
                                    </div>

                                    <div className="input input-bordered">
                                        <label className="sr-only" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                            name="email"
                                        />
                                    </div>
                                    <div className="input input-bordered">
                                        <label className="sr-only" htmlFor="phone">
                                            Phone
                                        </label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                        />
                                    </div>
                                    <div className="input input-bordered">
                                        <label className="sr-only" htmlFor="phone">
                                            Address
                                        </label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Address"
                                            type="tel"
                                            id="phone"
                                            name="address"
                                        />
                                    </div>
                                </div>
                                <div className="">
                                    <label className="sr-only" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        className="w-full rounded-lg border-gray-300 p-3 text-sm"
                                        placeholder="Message"
                                        rows={8}
                                        id="message"
                                        defaultValue={""}
                                        name="message"
                                    />
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center rounded-lg contact-btn rounded-full px-5 py-3 text-white sm:w-auto"
                                    >
                                        <span className="font-medium"> Send Enquiry </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ml-3 h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
</div>
    </div>
  )
}
