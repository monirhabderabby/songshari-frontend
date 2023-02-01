import React, { useEffect } from "react";

// Componets
import useDocumentTitle from "../../../assets/utilities/useDocumentTitle";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import { ContactForm } from "./ContactForm";

const Contact = () => {
    useDocumentTitle("Shongshari | Contact");
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
