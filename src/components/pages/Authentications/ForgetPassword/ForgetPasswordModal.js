import { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import "../../../../App.css";
import { auth } from "../../../../firebase.init";

export default function ForgetPasswordModal({ open, modalControll }) {
    const [email, setEmail] = useState("");
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const actionCodeSettings = {
        url: "http://localhost:3000/login",
    };
    const onsubmit = async e => {
        e.preventDefault();
        const success = await sendPasswordResetEmail(email, actionCodeSettings);

        if (success) {
            toast.success("Sent Email");
            modalControll();
        }
    };
    return (
        <>
            <div className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"></div>
            <div className="rounded sm:max-w-full w-[400px] space-y-4 bg-white p-6 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <h2 className=" text-3xl font-extrabold text-gray-900">Forgot your password?</h2>
                <p>we'll email you a link to reset your password</p>
                <form onSubmit={onsubmit}>
                    <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl">
                        <input
                            type="text"
                            name="email"
                            className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                            placeholder="Email"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <input
                        type="submit"
                        value="Send me a password reset link"
                        className="flex-1 outline-none h-full text-sm bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] w-full rounded-xl p-2 mt-3 text-white"
                    />
                </form>
                <button className="flex-1 outline-none h-full text-sm bg-gray-200 w-full rounded-xl p-2 mt-3 text-black" onClick={modalControll}>
                    Cancel
                </button>
            </div>
        </>
    );
}

// className="flex-1 outline-none h-full text-sm bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] w-full rounded-xl p-2 mt-3 text-white"

// className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
