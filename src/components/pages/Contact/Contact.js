import React, { useEffect } from "react";
import { ContactBanner } from "./ContactBanner";
import { ContactForm } from "./ContactForm";

const Contact = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <div>
            <ContactBanner></ContactBanner>
            <ContactForm></ContactForm>
        </div>
    );
};
export default Contact;
