import React, { useEffect } from "react";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import Footer from "../../shared/Footer/Footer";
import { ContactForm } from "./ContactForm";

const Contact = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <div>
            <CustomHeader title="Contact" />
            <ContactForm></ContactForm>
            <Footer />
        </div>
    );
};
export default Contact;
