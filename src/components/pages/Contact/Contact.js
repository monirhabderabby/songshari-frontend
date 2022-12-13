import React, { useEffect } from "react";
import { ContactForm } from "./ContactForm";

const Contact = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <div>
            <ContactForm></ContactForm>

        </div>
    );
};
export default Contact;
