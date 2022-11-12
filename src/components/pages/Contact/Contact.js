import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css'
const Contact = () => {
    const { register} = useForm();
    return (
        <div>
<div className='bg-contact'>
    <h1 className='text-7xl pt-32 text-gray-900'>Contact Us</h1>
</div>

<div className='grid lg:grid-cols-3 sm:grid-cols-2 container ml-12 mt-20'>

<div className="card w-96 bg-base-100 shadow-lg">
    <div>
    <i class="fa-solid fa-location-dot text-5xl font-location"></i>
    </div>
  <div className="card-body">
    <h2 className="text-center text-2xl">Address</h2>
    <p>60 feet, Monipur school, Mirpur 2, Dhaka, Bangladesh</p>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-lg">
    <div>
    <i class="fa-solid fa-envelope text-5xl font-location"></i>
    </div>
  <div className="card-body">
    <h2 className="text-center text-2xl">Email</h2>
    <p>anik.haque.cse1@gmail.com</p>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-lg">
    <div>
    <i class="fa-solid fa-phone text-5xl font-location"></i>
    </div>
  <div className="card-body">
    <h2 className="text-center text-2xl">Call Now</h2>
    <p>(+88 0)1814803281</p>
  </div>
</div>

</div>

             <section className="mb-10 ml-64 w-full">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">

                            <form className="space-y-4">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className='input input-bordered'>
                                    <label className="sr-only" htmlFor="name">Name</label>
                                    <input className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Name" type="text" id="name" name="name" />
                                </div>

                                    <div className='input input-bordered'>
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input  className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Email address" type="email" id="email" name="email" />
                                    </div>
                                    <div className='input input-bordered'>
                                        <label className="sr-only" htmlFor="phone">Phone</label>
                                        <input  className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Phone Number" type="tel" id="phone" name="phone" />
                                    </div>
                                    <div className='input input-bordered'>
                                        <label className="sr-only" htmlFor="phone">Address</label>
                                        <input  className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Address" type="tel" id="phone" name="address" />
                                    </div>
                                </div>
                                <div className=''>
                                    <label className="sr-only" htmlFor="message">Message</label>
                                    <textarea className="w-full rounded-lg border-gray-300 p-3 text-sm" placeholder="Message" rows={8} id="message" defaultValue={""} name="message" />
                                </div>
                                <div className="mt-4">
                                    <button type="submit" className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto">
                                        <span className="font-medium"> Send Enquiry </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    );
};

export default Contact;