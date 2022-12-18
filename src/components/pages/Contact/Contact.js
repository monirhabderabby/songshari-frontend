import React, { useEffect } from "react";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import { ContactForm } from "./ContactForm";

const Contact = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <div>
            <CustomHeader title="Contact" />
            <ContactForm></ContactForm>
        </div>
    );
};
export default Contact;
