import React, { useState } from "react";
import "../../../assets/css/ContactForm.css";

export const ContactForm = () => {
    const [checked, setChecked] = useState(false);
    return (
        <>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.472937096036!2d90.3680889150866!3d23.837334284546543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1da28248e65%3A0x3dbe73c739c2fb09!2sMirpur%20DOHS%20-%20Dhaka!5e0!3m2!1sen!2sbd!4v1669390569029!5m2!1sen!2sbd"
                width="100%"
                height="450"
                allowfullscreen=""
                title="Google Map"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div class="container my-24 px-6 mx-auto">
                <section class="mb-32 text-gray-800">
                    <div class="flex flex-wrap">
                        <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                            <h2 class="text-3xl font-bold mb-6">Contact us</h2>
                            <p class="text-gray-500 mb-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, modi accusantium ipsum corporis quia asperiores
                                dolorem nisi corrupti eveniet dolores ad maiores repellendus enim autem omnis fugiat perspiciatis? Ad, veritatis.
                            </p>
                            <p class="text-gray-500 mb-2">884, A-2, Mirpur DOHS, Dhaka</p>
                            <p class="text-gray-500 mb-2">+ 01 234 567 89</p>
                            <p class="text-gray-500 mb-2">itco.com.bd@gmail.com</p>
                        </div>
                        <div class="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                            <form>
                                <div class="form-group mb-6">
                                    <input
                                        type="text"
                                        class="form-control block
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleInput7"
                                        placeholder="Name"
                                    />
                                </div>
                                <div class="form-group mb-6">
                                    <input
                                        type="email"
                                        class="form-control block
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleInput8"
                                        placeholder="Email address"
                                    />
                                </div>
                                <div class="form-group mb-6">
                                    <textarea
                                        class="
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
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
                                        id="exampleFormControlTextarea13"
                                        rows="3"
                                        placeholder="Message"
                                    ></textarea>
                                </div>
                                <div class="mb-6">
                                    <input type="checkbox" className="mr-2" checked={checked} onClick={() => setChecked(!checked)} />
                                    <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">
                                        Send me a copy of this message
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    class="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
