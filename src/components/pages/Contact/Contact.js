import React, { useEffect } from "react";

// Componets
import useDocumentTitle from "../../../assets/utilities/useDocumentTitle";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import { ContactForm } from "./ContactForm";
import Footer from "../../shared/Footer/Footer";

const Contact = () => {
    useDocumentTitle("Shongshari | Contact");
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="bg-[#f8f8ff]">
            <CustomHeader title="Contact" />
            <ContactForm  />
            <Footer />
        </div>
    );
};
export default Contact;
